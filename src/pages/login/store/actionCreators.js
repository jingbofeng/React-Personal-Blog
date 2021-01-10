import * as actionTypes from './actionTypes.js'
import axios from 'axios';
import {fromJS} from 'immutable';

const changeLogin = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: true
})

const logout = ({
	type: actionTypes.LOG_OUT,
	value: false
})

export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
			const result = res.data.data;

			if(result){
				dispatch(changeLogin());
			}else{
				alert('登陆失败');
			}
		}).catch(() => {console.log('error');})
}
};