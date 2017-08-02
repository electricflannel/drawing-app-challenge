import { SELECT_TOOL, CHANGE_SIZE, CHANGE_COLOR, SET_IMAGE_STAMP } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: '#C0FFEE',
	image: ''
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return Object.assign({}, state, {
				brush_size: action.text
			})

		case SET_IMAGE_STAMP:
			return Object.assign({}, state, {
				image: action.url
			})

		case SELECT_TOOL:
			return Object.assign({}, state, {
				tool: action.text,
			})
			
		case CHANGE_COLOR:
			return Object.assign({}, state, {
				brush_color: action.text
			})

		default:
			return state
	}
}
