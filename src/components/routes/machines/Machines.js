import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Machines.scss';
import {Link} from 'react-router-dom';
import Health from '../../health/Health';
import {fetchMachines} from '../../../store/machines/machinesActions';
import {getMachines} from '../../../store/machines/machinesSelectors';
import Spinner from '../../spinner/spinner';

export class Machines extends Component {
	constructor (props) {
		super(props);
	}

	static get propTypes () {
		return {
			machines: PropTypes.array,
			loading: PropTypes.bool,
			onGetMachines: PropTypes.func
		};
	}

	componentDidMount () {
		this.props.onGetMachines();
	}

	render () {
		return (
			(!this.props.loading) ?
				<div className='machines'>
					<table className='machines__table'>
						<thead>
							<tr>
								<th>Name</th>
								<th>IP Address</th>
								<th width={'25%'}>Health</th>
							</tr>
						</thead>
						<tbody>
							{this.props.machines.map((machine, key) =>
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
				<Spinner />
		);
	}
}

function mapStateToProps (state) {
	return {
		machines: getMachines(state),
		loading: state.machines.loading
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onGetMachines: () => {
			dispatch(fetchMachines());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Machines);
