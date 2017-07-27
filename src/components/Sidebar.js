import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from './BrushColor';

export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size, brush_color } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>

				<section className="section section--brush-size">
					<h3 className="section__heading">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>

				<section className="section">
				<h3 className="section__heading">Brush Color</h3>
				<BrushColor 
					brush_color={ brush_color }
					action={ actions.changeColor }
				/>
				</section>

				<section className="section">
				<h3 className="section__heading">Image Stamp</h3>
				<input type="file" />
				</section>

				<section className="section">
				<h3 className="section__heading">Reset</h3>
				</section>

				<section className="section">
				<h3 className="section__heading">Save</h3>

				</section>

			</div>
		)
	}
}
