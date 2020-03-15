import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Machine.scss';
import {withRouter} from 'react-router';
import Health from '../../health/Health';
import {fetchMachine, updateMachine} from '../../../store/machines/machinesActions';
import {getMachine} from '../../../store/machines/machinesSelectors';
import Spinner from '../../spinner/spinner';

export class Machine extends Component {
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
			loading: PropTypes.bool,
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
			(!this.props.loading && typeof this.props.machine === 'object') ?
				<div className='machine'>
					<div className='machine__col'>
						<h1 className="machine__title">{this.props.machine.name}</h1>
						<h2>Update Device</h2>
						<form className="machine__form" onSubmit={this.handleSubmit.bind(this)}>
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
						<div className='machine__health-conainer'>
							<Health value={Number(this.props.machine.health)} showValue={true} />
						</div>
						<h2>Stats</h2>
						IP Address: {this.props.machine.ip_address}
					</div>
				</div>
				:
				<Spinner />
		);
	}
}

function mapStateToProps (state, ownProps) {
	let { id } = ownProps.match.params;

	return {
		machineId: id,
		machine: getMachine(state, id),
		loading: state.machines.loading
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onGetMachine: (id) => {
			dispatch(fetchMachine(id));
		},
		onUpdateMachine: (id, updateProps) => {
			dispatch(updateMachine(id, updateProps));
		}
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)( Machine ));
