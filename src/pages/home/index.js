import React, {Component} from 'react';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Download from './components/Download';
import axios from 'axios';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Home extends Component {
	
	handleScrollTop(){
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='bannerimg' alt=''/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Download />
					<Writer />
				</HomeRight>
				{this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
				
			</HomeWrapper>
			)
	}
	componentDidMount(){
		this.bindEvents();
		axios.get('/api/home.json').then((res) => {
			
			const result = res.data.data;
			const action = {
				type: 'change_home_data',
				topicList: result.topicList,
				articleList: result.articleList,
				recommendList: result.recommendList
			}
			this.props.changeHomeData(action);
		}).catch(() => {})
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}


}


const mapState = (state) => ({
	showScroll: state.get('home').get('showScroll')
})

const mapDispatch = (dispatch) => ({
	changeHomeData(action){
		dispatch(action);
	},
	changeScrollTopShow(){
		if(document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true));
		}else{
			dispatch(actionCreators.toggleTopShow(false));
		}
	}
})

export default connect(mapState, mapDispatch)(Home);