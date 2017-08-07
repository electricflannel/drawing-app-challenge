import React from "react";

export default function SaveCanvas(props) {
    const { canvas_state, action } = props;

    // NOTE: Base 64 doesn't allow user to Save As

    return (<input
        type="button"
        value="Save Canvas"
        className="number-input"
        onClick={(e) => {
            action(true)
        }}/>);
}
