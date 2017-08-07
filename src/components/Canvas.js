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

			//TODO: correct for image stamp at top corner
			img.onload = () => {
				ctx.drawImage(img, this.getX(event) - 75, this.getY(event) - ((150 * img.height / img.width) / 2), 150, 150 * img.height / img.width)
			}
			img.src = this.props.tools.image
			img.className = "image-stamp"
		}

		// NOTE: sets clear_canvas back to false when user draws again
		if(this.props.canvas.clear_canvas) {
			this.props.actions.resetCanvas(false)
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
	let dataURL = document
					.querySelector('.canvas')
					.toDataURL();
		
		this.props.actions.saveCanvas(dataURL)
		event.preventDefault();
	}

	render() {
		
		if (this.props.canvas.clear_canvas) {
			this.resetCanvas()
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
	tools: PropTypes.object.isRequired
}
