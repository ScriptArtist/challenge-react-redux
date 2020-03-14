import machinesReducer from "./machinesReducer";

describe('Machine Reducer', () => {
	let initialState = {
		loading: false,
		data: {}
	};

	let machines = [
		{
			id: '90fa-2caaaef88648-4111947a-6c58-4977',
			name: 'Machine 1',
			ip_address: '127.0.0.4',
			health: 5
		},
		{
			id: '4111947a-6c58-4977-90fa-2caaaef88648',
			name: 'Machine 2',
			ip_address: '127.0.0.4',
			health: 100
		}, {
			id: '57342663-909c-4adf-9829-6dd1a3aa9143',
			name: 'Machine 3',
			ip_address: '127.0.0.55',
			health: 75
		}];

	test('list of machines should updates', () => {
		let newMachinesState = machinesReducer(undefined, {type: 'FETCH_MACHINES_SUCCESS', payload: machines});
		expect(Object.keys(newMachinesState.data).length).toBe(3);
	});

	test('fetch machine should return machine object', () => {
		let newMachineState = machinesReducer(undefined, {type: 'FETCH_MACHINE_SUCCESS', payload: machines[0]});
		expect(Object.keys(newMachineState.data).length).toBe(1);
	});

	test('health update message should update health of machine', () => {
		let message = {message: '{"type": "HEALTH_UPDATE", "id": "90fa-2caaaef88648-4111947a-6c58-4977", "health": 38}'};
		let state = machinesReducer(undefined, {type: 'FETCH_MACHINES_SUCCESS', payload: machines});
		state = machinesReducer(state, {type: 'REDUX_WEBSOCKET::MESSAGE', payload: message});
		expect(state.data['90fa-2caaaef88648-4111947a-6c58-4977'].health).toBe(38);
	});
});