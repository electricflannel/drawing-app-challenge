import React from "react";

export default function ResetCanvas(props) {
	const { action } = props;
	return (
		<input
			type="button"
			value="Reset Canvas"
			className="number-input"
			onClick={ (e) => action(true) }
		/>
	);
}

