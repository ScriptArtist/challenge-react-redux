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
		return (
			<div className='machine'>
				<div className='machine__col'>
					<h1>{this.props.machine.name}</h1>
					<h2>Update Device</h2>
					<form>
						<label htmlFor="name">Name:</label>
						<input className="machine__name-input" type="text" id="name" placeholder={this.props.machine.name} autoComplete="off" />
						<input className="machine__submit" type="submit" />
					</form>
				</div>
				<div className='machine__col'>
					<div className='machine__helath-conainer'>
						<Health value={this.props.machine.health} showValue={true} />
					</div>
					<h2>Stats</h2>
					IP Address: {this.props.machine.ip_address}
				</div>
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
