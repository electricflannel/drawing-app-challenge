import { combineReducers } from "redux";
import tools from "./tools";
import canvas from './canvas'

const rootReducer = combineReducers({
	tools,
	canvas
});

export default rootReducer;
