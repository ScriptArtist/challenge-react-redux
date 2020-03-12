import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AppRoutes from './AppRoutes';
import reducer from './reducers';
import './App.css';

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function App () {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
}

export default App;
