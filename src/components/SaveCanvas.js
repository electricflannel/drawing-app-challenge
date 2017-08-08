import React, { PropTypes } from "react";

export default function SaveCanvas(props) {
    const { action } = props;

    return (<input
        type="button"
        value="Save"
        className="SaveCanvas__button"
        onClick={(e) => {
            action(true)
        }}/>);
}

SaveCanvas.propTypes = {
    action: PropTypes.func.isRequired
};