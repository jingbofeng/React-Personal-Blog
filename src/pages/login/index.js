import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {LoginWrapper, LoginBox, Input, Button} from './style';
import {actionCreators} from './store';

class Login extends Component {
	render(){
		const {loginStatus} = this.props;

		if(!loginStatus){
			return (
		    	<LoginWrapper>
			  			<LoginBox>
			  				<Input placeholder='Username' ref={(input) =>{this.account = input}}/>
			  				<Input placeholder='Password' type='password' ref={(input) => {this.password = input}}/>
			  				<Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
			  			</LoginBox>
				</LoginWrapper>
			);

		}else{
			return <Redirect to='/' />

		}

		
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value));
	}
});

export default connect(mapState, mapDispatch)(Login);