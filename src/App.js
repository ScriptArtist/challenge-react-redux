import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Machines from './Machines';
import Machine from './Machine';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import { createBrowserHistory } from 'history';

class App extends Component {
	constructor (props) {
		super(props);
		this.history = createBrowserHistory();
		this.store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	}

	render () {
		return (
			<Provider store={this.store}>
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
			</Provider>
		);
	}
}

export default App;
