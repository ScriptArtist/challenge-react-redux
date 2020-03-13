import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Machine.scss';
import {withRouter} from 'react-router';
import Health from '../../health/Health';
import {getMachine, updateMachine} from '../../../store/machines/actions';

class Machine extends Component {
	constructor (props) {
		super(props);

		this.state = {
			nameValue: ''
		};
	}

	static get propTypes () {
		return {
			machineId: PropTypes.string,
			machine: PropTypes.object,
			machines: PropTypes.object,
			onGetMachine: PropTypes.func,
			onUpdateMachine: PropTypes.func
		};
	}

	componentDidMount () {
		this.props.onGetMachine(this.props.machineId);
	}

	handleSubmit (e) {
		e.preventDefault();
		if (this.state.nameValue.length) {
			this.props.onUpdateMachine(this.props.machineId, {name: this.state.nameValue});
		}
	}

	handleChange (e) {
		this.setState({[e.target.name]: e.target.value});
	}

	render () {
		return (
			(!this.props.machines.loading && typeof this.props.machine === 'object') ?
				<div className='machine'>
					<div className='machine__col'>
						<h1>{this.props.machine.name}</h1>
						<h2>Update Device</h2>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<label htmlFor="nameValue">Name:</label>
							<input className="machine__name-input"
								id="nameValue"
								name="nameValue"
								value={this.state.nameValue}
								onChange={this.handleChange.bind(this)}
								type="text"
								placeholder={this.props.machine.name}
								autoComplete="off"
							/>
							<input className="machine__submit" type="submit" />
						</form>
					</div>
					<div className='machine__col'>
						<div className='machine__helath-conainer'>
							<Health value={Number(this.props.machine.health)} showValue={true} />
						</div>
						<h2>Stats</h2>
						IP Address: {this.props.machine.ip_address}
					</div>
				</div>
				:
				<div>loading...</div>
		);
	}
}

function mapStateToProps (state, ownProps) {
	let { id } = ownProps.match.params;

	return {
		machineId: id,
		machines: state.machines,
		machine: state.machines.data.find((machine) => machine.id === id)
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onGetMachine: (id) => {
			dispatch(getMachine(id));
		},
		onUpdateMachine: (id, updateProps) => {
			dispatch(updateMachine(id, updateProps));
		}
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)( Machine ));
