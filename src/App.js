import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Machines from './Machines';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
	constructor (props) {
		super(props);
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
						<Route path='/machines'>
							<Machines />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

export default connect(mapStateToProps)(App);
