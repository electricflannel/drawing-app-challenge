import * as types from '../constants/ActionTypes'

export const selectTool = text => ({ type: types.SELECT_TOOL, text });
export const changeSize = text => ({ type: types.CHANGE_SIZE, text });
export const changeColor = text => ({ type: types.CHANGE_COLOR, text });
export const setImageStamp = (file, urlPreview) => ({ type: types.SET_IMAGE_STAMP, file, urlPreview });

