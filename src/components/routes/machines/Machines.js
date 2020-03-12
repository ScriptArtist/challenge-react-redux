import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Machines.scss';
import {Link} from 'react-router-dom';
import Health from "../../health/Health";

class Machines extends Component {
	constructor (props) {
		super(props);
	}

	static get propTypes () {
		return {
			machines: PropTypes.array
		};
	}

	render () {
		return (
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
						{this.props.machines.map((machine, key) =>
							<tr key={key}>
								<td><Link to={`/machines/${machine.id}`}>{machine.name}</Link></td>
								<td>{machine.ip_address}</td>
								<td>
									<Health value={machine.health} />
								</td>
							</tr>
						)}
					</tbody>
				</table>

			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		machines: state.machines
	};
}

export default connect(mapStateToProps)(Machines);