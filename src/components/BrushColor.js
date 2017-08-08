import React, { PropTypes } from "react";

export default function BrushSize(props) {
	const { action, brush_color } = props;
	return (
		<input
			type="color"
			className="BrushColor__input"
			defaultValue={brush_color}
			onChange={ (e) => {
				action(e.target.value)
			}}
		/>
	);
}

BrushSize.propTypes = {
	brush_color: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};