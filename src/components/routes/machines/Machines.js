import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Machines.scss';
import {Link} from 'react-router-dom';
import Health from '../../health/Health';
import {getMachines} from '../../../store/machines/actions';

class Machines extends Component {
	constructor (props) {
		super(props);
	}

	static get propTypes () {
		return {
			machines: PropTypes.object,
			onGetMachines: PropTypes.func
		};
	}

	componentDidMount () {
		this.props.onGetMachines();
	}

	render () {
		return (
			(!this.props.machines.loading) ?
				<div className='machines'>
					<table className='machines__table'>
						<thead>
							<tr>
								<th>Name</th>
								<th>IP Address</th>
								<th>Health</th>
							</tr>
						</thead>
						<tbody>
							{this.props.machines.data.map((machine, key) =>
								<tr key={key}>
									<td><Link to={`/machines/${machine.id}`}>{machine.name}</Link></td>
									<td>{machine.ip_address}</td>
									<td>
										<Health value={Number(machine.health)} />
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
				:
				<div>Loading...</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		machines: state.machines
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onGetMachines: () => {
			dispatch(getMachines());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Machines);
