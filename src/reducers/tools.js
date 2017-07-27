import { SELECT_TOOL, CHANGE_SIZE, CHANGE_COLOR, SET_IMAGE_STAMP } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: '#BADA55',
	image_file: '',
	image_preview: '',
	isEraser: false,
	isStamp: false
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return Object.assign({}, state, {
				brush_size: action.text
			})

		case SET_IMAGE_STAMP:
			console.log(action.text)
			return Object.assign({}, state, {
				image_file: action.file,
				image_preview: action.urlPreview
			})

		case SELECT_TOOL:
			if(action.text === 'ERASER') {
				return Object.assign({}, state, {
					tool: action.text,
					isEraser: true,
					isStamp: false
				})
			} else if (action.text === 'STAMP') {
				return Object.assign({}, state, {
					tool: action.text,
					isEraser: false,
					isStamp: true
				})
			} else {
				return Object.assign({}, state, {
					tool: action.text,
					isEraser: false,
					isStamp: false
				})
			}
			
		case CHANGE_COLOR:
			return Object.assign({}, state, {
				brush_color: action.text
			})

		default:
			return state
	}
}
