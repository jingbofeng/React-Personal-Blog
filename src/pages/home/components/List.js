import React, {Component} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style.js';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

class List extends Component {
	render() {
		return(
			<div>
			{this.props.articleList.map((item) => {
				return (
				<ListItem key={item.get('id')}>
				    <img className='list-pic' src={item.get('imgUrl')} alt=''/>
					<ListInfo>
					  <h3 className='title'>{item.get('title')}</h3>
					  <p className='page'>{item.get('desc')}</p>
				 	</ListInfo>
				</ListItem>

					)
			})}
			<LoadMore onClick={this.props.getMoreList}>更多文字</LoadMore>
			</div>
			

			)
	}
}

const mapState = (state) => ({
	articleList: state.get('home').get('articleList')
})

const mapDispatch = (dispatch) => ({
	getMoreList(){
		dispatch(actionCreators.getMoreList());
	}
})

export default connect(mapState, mapDispatch)(List);