import {environment} from '../../environments';
import * as types from './machinesTypes';

export const fetchMachines = () => dispatch => {
	dispatch({ type: types.FETCH_MACHINES });
	return fetch(`${environment.apiUrl}/machines`, {method: 'GET'})
		.then(response => response.json())
		.then((data) => {
			dispatch({ type: types.FETCH_MACHINES_SUCCESS, payload: data });
		});
};

export const fetchMachine = (id) => dispatch => {
	dispatch({ type: types.FETCH_MACHINE });
	return fetch(`${environment.apiUrl}/machines/${id}`, {method: 'GET'})
		.then(response => response.json())
		.then((data) => {
			dispatch({ type: types.FETCH_MACHINE_SUCCESS, payload: data });
		});
};

export const updateMachine = (id, updateProps) => dispatch => {
	dispatch({ type: types.FETCH_MACHINE });
	return fetch(`${environment.apiUrl}/machines/${id}`,
		{method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(updateProps)
		})
		.then(response => response.json())
		.then((data) => {
			dispatch({ type: types.FETCH_MACHINE_SUCCESS, payload: data });
		});
};
