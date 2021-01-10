import React, {Component} from 'react';
import {TopicWrapper, TopicItem, MoreItem} from '../style.js';
import {connect} from 'react-redux';

class Topic extends Component {
	render() {
		return (

			<TopicWrapper>

				{this.props.list.map((item) => {
					return (
						<TopicItem key={item.get('id')}>
							<img className='topicpic1' src={item.get('imgUrl')} alt=''/>
							{item.get('title')}
						</TopicItem>)
				})}
				
			
				<MoreItem>更多热门专题</MoreItem>
			</TopicWrapper>

			)
	}
}


const mapState = (state) => ({
	list: state.get('home').get('topicList')
});


export default connect(mapState, null)(Topic);