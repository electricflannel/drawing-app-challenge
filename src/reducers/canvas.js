import {RESET_CANVAS, SAVE_CANVAS} from "../constants/ActionTypes";

const initialState = {
    clear_canvas: false,
    canvas_state: ""
}

export default function canvas(state = initialState, action) {
    switch(action.type) {
        case RESET_CANVAS:
            return Object.assign({}, state, {
                clear_canvas: action.bool,
                canvas_state: ""
            })
        case SAVE_CANVAS:
            return Object.assign({}, state, {
                canvas_state: action.text
            })
        default:
            return state
    }
}