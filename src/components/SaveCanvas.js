import React from "react";

export default function SaveCanvas(props) {
    const { action } = props;

    return (<input
        type="button"
        value="Save Canvas"
        className="number-input"
        onClick={(e) => {
            action(true)
        }}/>);
}
