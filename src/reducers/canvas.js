import {RESET_CANVAS} from "../constants/ActionTypes";

const initialState = {
    clear_canvas: false
}

export default function canvas(state = initialState, action) {
    switch(action.type) {
        case RESET_CANVAS:
            return Object.assign({}, state, {
                clear_canvas: action.bool
            })
        default:
            return state
    }
}