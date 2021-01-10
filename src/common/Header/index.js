import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList} from './style.js';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store';



class Header extends Component {
    
	getListArea(){

		const {page, totalpage} = this.props;
		const pageList = [];
		const newList = this.props.list.toJS();
		if(newList.length){
		for(let i= (page-1)*10; i < page*10; i++) {
			pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
		}
		}
		if(this.props.focused || this.props.mouseIn){
			return (<SearchInfo onMouseEnter={this.props.handleMouseIn} 
								onMouseLeave={this.props.handleMouseOut}>
				    	<SearchInfoTitle>
				    		热门搜索
				    	
				    	<SearchInfoSwitch onClick={() => this.props.handleClick(page, totalpage)}>换一换</SearchInfoSwitch>
				    	</SearchInfoTitle>
				    	<SearchInfoList>
				    	{pageList}
				    		
				    
				    		
				    	</SearchInfoList>
				    </SearchInfo>)
		}else{
			return null;
		}
	}





	


	render(){
		return(

			<HeaderWrapper>

				<Logo />
				<Nav>
					<NavItem className='left active'><i className='iconfont'>&#xe873;</i>首页</NavItem>
					<NavItem className='left'><i className='iconfont'>&#xe60d;</i>下载App</NavItem>
					{
						this.props.login ? 
						<NavItem onClick={this.props.logout} className='right'>退出</NavItem> : 
						<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
					<NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
				  <SearchWrapper>
					<CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
					  <NavSearch onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} className={this.props.focused ? 'focused' : ''}></NavSearch>
					</CSSTransition>
					  <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
				    {this.getListArea()}
				  </SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
					<Button className='writting'><i className='iconfont'>&#xe6e5;</i>写文章</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>

			)
	}
	

	
}

const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		page: state.get('header').get('page'),
		totalpage: state.get('header').get('totalpage'),
		mouseIn: state.get('header').get('mouseIn'),
		login: state.get('login').get('login')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(){
			dispatch(actionCreators.searchFocus());
			dispatch(actionCreators.getList());
		},
		
		handleInputBlur(){
			const action = actionCreators.searchBlur();
			dispatch(action);
		},
		handleMouseIn(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseOut(){
			dispatch(actionCreators.mouseLeave());
		},
		handleClick(page, totalpage){
			if(page < totalpage){
				dispatch(actionCreators.handleClick(page + 1));
			}else{
				dispatch(actionCreators.handleClick(1));
			}
			
		},
		logout(){
			dispatch(loginActionCreators.logout());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);