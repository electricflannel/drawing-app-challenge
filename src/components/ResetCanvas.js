import React from "react";

export default function ResetCanvas(props) {
	return (
		<input
			type="button"
			value="Reset Canvas"
			className="number-input"
			onClick={ (e) => console.log('RESET CANVAS') }
		/>
	);
}

