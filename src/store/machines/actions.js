import {environment} from "../../environments";

export const getMachines = () => dispatch => {
	return fetch(`${environment.apiUrl}/machines`, {method: 'GET'})
		.then(response => response.json())
		.then((data) => {
			dispatch({ type: 'FETCH_MACHINES_SUCCESS', payload: data });
		});
};
