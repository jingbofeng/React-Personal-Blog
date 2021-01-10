import * as actionTypes from './actionTypes.js'
import {fromJS} from 'immutable'


const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	showScroll: false
});


export default (state = defaultState, action)  => {
	switch(action.type) {
		case 'change_home_data':
		return state.set('topicList', fromJS(action.topicList)).set('articleList', fromJS(action.articleList)).set('recommendList', fromJS(action.recommendList));
		case actionTypes.ADD_ARTICLE_LIST:
		return state.set('articleList', state.get('articleList').concat(action.list));
		case actionTypes.TOGGLE_SCROLL_TOP:
		return state.set('showScroll', action.show);
		default:
		 return state;
	}
}