import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Machine.scss';
import Health from './Health';
import {withRouter} from 'react-router';

class Machine extends Component {
	constructor (props) {
		super(props);
	}

	static get propTypes () {
		return {
			machine: PropTypes.object
		};
	}

	render () {
		console.log(this.props.machine);
		return (
			<div className='machine'>
				Machine view
			</div>
		);
	}
}

function mapStateToProps (state, ownProps) {
	let { id } = ownProps.match.params;

	return {
		machine: state.machines.find((machine) => machine.id == id)
	};
}

export default withRouter(connect(mapStateToProps)( Machine ));
