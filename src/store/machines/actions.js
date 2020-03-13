import {environment} from '../../environments';

export const getMachines = () => dispatch => {
	dispatch({ type: 'FETCH_MACHINES' });
	return fetch(`${environment.apiUrl}/machines`, {method: 'GET'})
		.then(response => response.json())
		.then((data) => {
			dispatch({ type: 'FETCH_MACHINES_SUCCESS', payload: data });
		});
};

export const getMachine = (id) => dispatch => {
	dispatch({ type: 'FETCH_MACHINE' });
	return fetch(`${environment.apiUrl}/machines/${id}`, {method: 'GET'})
		.then(response => response.json())
		.then((data) => {
			dispatch({ type: 'FETCH_MACHINE_SUCCESS', payload: data });
		});
};

export const updateMachine = (id, updateProps) => dispatch => {
	dispatch({ type: 'FETCH_MACHINE' });
	return fetch(`${environment.apiUrl}/machines/${id}`,
		{method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(updateProps)
		})
		.then(response => response.json())
		.then((data) => {
			dispatch({ type: 'FETCH_MACHINE_SUCCESS', payload: data });
		});
};
