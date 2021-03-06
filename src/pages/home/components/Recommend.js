import React, {Component} from 'react';
import {RecommendWrapper, RecommendItem} from '../style.js';
import {connect} from 'react-redux';

class Recommend extends Component {
	render() {
		return (
			<RecommendWrapper>
				{this.props.list.map((item) => {
					return (
						<RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} alt=''/>
						)
				})}	
			</RecommendWrapper>
				)
	}
}


const mapState = (state) => ({
	list: state.get('home').get('recommendList')
})

export default connect(mapState, null)(Recommend);