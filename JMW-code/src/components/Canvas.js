import React, { PropTypes, Component } from "react";
import { BRUSH, ERASER, STAMP } from "../constants/Tools";

let ctx;

export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.isDrawing = false;
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.refs.canvas.height = window.innerHeight;
		this.refs.canvas.width = window.innerWidth;
		ctx = this.refs.canvas.getContext("2d");
	}

	getStroke() {
		return this.props.tools.brush_size;
	}

	getColor() {
		if (this.props.tools.tool === ERASER) {
			return '#FFFFFF'
		} else if (this.props.tools.tool === STAMP) {
			return
		} else {
			return this.props.tools.brush_color;
		}
	}

	getStamp() {
		if (this.isDrawing && this.props.tools.tool === STAMP) {
			let img = new Image();

			img.onload = () => {
				ctx.drawImage(img, 10, 10)
			}
			img.src = this.props.tools.image
		}
	}

	getCanvasState() {
		// NOTE: Both of these work, there is an issue with being able to right
		// click the exported image and "Save image as"


		// if(document.querySelector('.canvas')) {
		// 	let dataURL = document
		// 				.querySelector('.canvas')
		// 				.toDataURL('image/png');

		// 	open().document.write(`<img src="${dataURL}" />`);
		// }


		if(document.querySelector('.canvas')) {
			let canvas = document.querySelector('.canvas')
			
			canvas.toBlob((blob) => {
				let img = new Image()
				img.src = window.URL.createObjectURL(blob)
				open().document.body.appendChild(img);
			})
		}
	}

	resetCanvas() {
		return ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
	}

	getX(event) {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.refs.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.refs.canvas.offsetLeft;
		}
	}

	getY(event) {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.refs.canvas.offsetTop;
		}
		else {
			return event.pageY - this.refs.canvas.offsetTop;
		}
	}

	start(event) {
		if (this.props.tools.tool === BRUSH || this.props.tools.tool === ERASER) {
			this.isDrawing = true;
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			event.preventDefault();
		}

		if (this.props.tools.tool === STAMP) {
			// This synthetic event is reused for performance reasons. If you're seeing this, you're accessing the method `pageX` on a released/nullified synthetic event. This is a no-op function. If you must keep the original synthetic event around, use event.persist().
			// Had to add event.persist to prevent this error
			event.persist()
			let img = new Image();
			
			
			img.onload = () => {
				ctx.drawImage(img, this.getX(event) - 125, this.getY(event) - ((250 * img.height / img.width) / 2), 250, 250 * img.height / img.width)
			}
			img.src = this.props.tools.image
			img.className = "image-stamp"
		}

		// NOTE: sets clear_canvas back to false when user draws again
		if(this.props.canvas.clear_canvas) {
			this.props.actions.resetCanvas(false)
		}

		// NOTE: sets save_canvas back to false when user draws again
		if(this.props.canvas.save_canvas) {
			this.props.actions.saveCanvas(false)
		}
	}

	draw(event) {
		if (this.isDrawing && !(this.props.tools.tool === STAMP)) {
			ctx.lineTo(this.getX(event), this.getY(event));
			ctx.lineWidth = this.getStroke();
			ctx.strokeStyle = this.getColor()
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.stroke()
		}
		event.preventDefault();
	}

	end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
		}
		event.preventDefault();
	}

	render() {
		
		// NOTE: Calls clear_canvas or save_canvas on state change
		if (this.props.canvas.clear_canvas) {
			this.resetCanvas()
		}

		if(this.props.canvas.save_canvas) {
			this.getCanvasState()
			// NOTE: is it bad practice to set state in render,
			// this is a bandaid. Ideal solution would be to check and set saveCanvas()
			// to false with every state change
			this.props.actions.saveCanvas(false)
		}

		
		return (
			<canvas
				className="canvas"
				ref="canvas"
				onMouseDown={ this.start }
				onMouseUp={ this.end }
				onMouseMove={ this.draw }
			></canvas>
		)
	}
}

Canvas.propTypes = {
	tools: PropTypes.object.isRequired,
	canvas: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
}
