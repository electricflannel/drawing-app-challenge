import * as types from '../constants/ActionTypes'

export const selectTool = text => ({ type: types.SELECT_TOOL, text });
export const changeSize = text => ({ type: types.CHANGE_SIZE, text });
export const changeColor = text => ({ type: types.CHANGE_COLOR, text });
export const setImageStamp = (file, url) => ({ type: types.SET_IMAGE_STAMP, file, url });
export const resetCanvas = bool => ({ type: types.RESET_CANVAS, bool });
export const saveCanvas = bool => ({type: types.SAVE_CANVAS, bool});
export const getCanvasState = text => ({type: types.GET_CANVAS_STATE, text});


