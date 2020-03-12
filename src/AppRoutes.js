import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Machine from './Machine';
import Machines from './Machines';
import {connect} from 'react-redux';
import {getMachines} from './actions/machines';

class AppRoutes extends Component {
	constructor (props) {
		super(props);
		props.onGetMachines();
	}

	static get propTypes () {
		return {
			onGetMachines: PropTypes.func
		};
	}

	render () {
		return (
			<Router>
				<div className='App'>
					<header className='App-header'>
						<img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
					</header>

					<nav className='App-nav'>
						<Link to='/'>Home</Link>
						<Link to='/machines'>Machines</Link>
					</nav>

					<Switch>
						<Route path='/machines/:id'>
							<Machine />
						</Route>
						<Route path='/machines/'>
							<Machines />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect((state, ownProps) => {
	return {};
}, dispatch => {
	return {
		onGetMachines: () => {
			dispatch(getMachines());
		}
	};
})(AppRoutes);
