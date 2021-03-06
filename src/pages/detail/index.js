import React, {Component} from 'react';
import {DetailWrapper, Header, Content} from './style';
import {connect} from 'react-redux';

class Detail extends Component {
	render() {
		return (

			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content dangerouslySetInnerHTML={{__html:this.props.content}} />

			</DetailWrapper>

			)
	}
}

const mapState = (state) => ({
	title: state.get('detail').get('headerList'),
	content: state.get('detail').get('content')
})

export default connect(mapState, null)(Detail);