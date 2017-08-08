import {RESET_CANVAS, SAVE_CANVAS, GET_CANVAS_STATE} from "../constants/ActionTypes";

const initialState = {
    clear_canvas: false,
    save_canvas: false
}

export default function canvas(state = initialState, action) {
    switch(action.type) {
        case RESET_CANVAS:
            return Object.assign({}, state, {
                clear_canvas: action.bool
            })
        case SAVE_CANVAS:
            return Object.assign({}, state, {
                save_canvas: action.bool
            })

        case GET_CANVAS_STATE:
            return Object.assign({}, state, {
                canvas_state: action.text
            })
        default:
            return state
    }
}