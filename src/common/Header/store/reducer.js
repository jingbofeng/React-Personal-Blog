import * as actionTypes from './actionTypes.js'
import {fromJS} from 'immutable'

const defaultState = fromJS({
	focused: false,
	list:[],
	page: 1,
	totalpage: 1,
	mouseIn: false
});

export default (state = defaultState, action) => {
	if(action.type === actionTypes.SEARCH_FOCUS){
		return state.set('focused', true);
		// const newState = JSON.parse(JSON.stringify(state));
		// newState.focused = true;
		// return newState;
	}
	if(action.type === actionTypes.SEARCH_BLUR){
		return state.set('focused', false);
		// const newState = JSON.parse(JSON.stringify(state));
		// newState.focused = false;
		// return newState;
	}
	if(action.type === actionTypes.CHANGE_LIST){
		return state.set('list', action.data).set('totalpage', action.totalpage);
	}
	if(action.type === actionTypes.MOUSE_ENTER){
		return state.set('mouseIn', true);
	}
	if(action.type === actionTypes.MOUSE_LEAVE){
		return state.set('mouseIn', false);
	}
	if(action.type === actionTypes.HANDLE_CLICK){
		return state.set('page', action.page);
	}
	return state;
}