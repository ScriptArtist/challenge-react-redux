import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxWebsocket from '@giantmachines/redux-websocket';
import AppRoutes from './components/routes/AppRoutes';
import reducer from './store';
import './App.css';
import {environment} from './environments';
import { connect } from '@giantmachines/redux-websocket';

const reduxWebsocketMiddleware = reduxWebsocket();
let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, reduxWebsocketMiddleware)));
store.dispatch(connect(environment.webSocketUrl));

function App () {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
}

export default App;
