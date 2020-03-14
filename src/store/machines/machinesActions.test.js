import {fetchMachines, fetchMachine, updateMachine} from './machinesActions';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {environment} from '../../environments';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Machine Actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	let machinesList = [{
		id: '99ade105-dee1-49eb-8ac4-e4d272f89fba',
		name: 'Machine 1',
		ip_address: '127.0.0.31',
		health: 65
	}, {
		id: '4111947a-6c58-4977-90fa-2caaaef88648',
		name: 'Machine 2',
		ip_address: '127.0.0.4',
		health: 84
	}];

	test('creates FETCH_MACHINES_SUCCESS when fetching machines has been done', async () => {
		fetchMock.getOnce(`${environment.apiUrl}/machines`, {
			body: machinesList,
			headers: { 'content-type': 'application/json' }
		});

		const store = mockStore({loading: false, data: {}});
		const expectedActions = [
			{ type: 'FETCH_MACHINES' },
			{ type: 'FETCH_MACHINES_SUCCESS', payload: machinesList }
		];

		await store.dispatch(fetchMachines());

		expect(store.getActions()).toEqual(expectedActions);
	});

	test('creates FETCH_MACHINE_SUCCESS when fetching machine has been done', async () => {
		fetchMock.getOnce(`${environment.apiUrl}/machines/0`, {
			body: machinesList[0],
			headers: { 'content-type': 'application/json' }
		});

		const store = mockStore({loading: false, data: {}});
		const expectedActions = [
			{ type: 'FETCH_MACHINE' },
			{ type: 'FETCH_MACHINE_SUCCESS', payload: machinesList[0] }
		];

		await store.dispatch(fetchMachine(0));

		expect(store.getActions()).toEqual(expectedActions);
	});

	test('creates FETCH_MACHINE_SUCCESS when update machine has been done', async () => {
		fetchMock.putOnce(`${environment.apiUrl}/machines/0`, {
			body: machinesList[0],
			headers: { 'content-type': 'application/json' }
		});

		const store = mockStore({loading: false, data: {}});
		const expectedActions = [
			{ type: 'FETCH_MACHINE' },
			{ type: 'FETCH_MACHINE_SUCCESS', payload: machinesList[0] }
		];

		await store.dispatch(updateMachine(0, {name: "Test Name"}));

		expect(store.getActions()).toEqual(expectedActions);
	});
});
