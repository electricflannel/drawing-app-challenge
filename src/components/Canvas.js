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
		if (this.props.tools.tool === STAMP) {
			console.log("stamp is working")
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

		if (this.isDrawing && this.props.tools.tool === STAMP) {
			console.log('Cheese')
		}
		// else {
		// 	let imageObj = new Image();
			
		// 	imageObj.onload = (event) => {
  //      ctx.drawImage(imageObj, this.getX(event), this.getY(event));

		// 	imageObj.src = "http://via.placeholder.com/50x50"
		// }
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