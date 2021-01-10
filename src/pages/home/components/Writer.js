import React, {Component} from 'react';
import {WriterWrapper} from '../style.js';
import {connect} from 'react-redux';

class Writer extends Component {
	
	render() {
		return (

			<WriterWrapper>
				homework
			</WriterWrapper>

			)
	}
}


const mapState = (state) => ({

})


export default connect(mapState, null)(Writer);