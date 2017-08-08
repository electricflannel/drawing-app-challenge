import React, {PropTypes} from "react";

export default function ResetCanvas(props) {
	const { action } = props;
	return (
		<input
			type="button"
			value="Reset"
			className="ResetCanvas__button"
			onClick={ (e) => action(true) }
		/>
	);
}

ResetCanvas.propTypes = {
	action : PropTypes.func.isRequired
};