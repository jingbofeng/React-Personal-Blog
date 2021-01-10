import axios from 'axios';
import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const addHomeList = (list) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: fromJS(list)
})


export const getMoreList = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json').then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result));
		}).catch()
	}
}

export const toggleTopShow = (show) => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
})