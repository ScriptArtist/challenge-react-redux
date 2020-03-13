import { keyBy } from 'lodash';

const initialState = {
	loading: false,
	data: {}
};

export default function machines (state = initialState, action) {
	if (action.type === 'FETCH_MACHINES') {
		return {
			loading: true,
			data: {}
		};
	}
	if (action.type === 'FETCH_MACHINES_SUCCESS') {
		const machine = keyBy(action.payload, (machine) => machine.id);
		return {
			loading: false,
			data: machine
		};
	}
	if (action.type === 'FETCH_MACHINE') {
		return {
			loading: true,
			data: {}
		};
	}
	if (action.type === 'FETCH_MACHINE_SUCCESS') {
		return {
			loading: false,
			data: {[action.payload.id]: action.payload}
		};
	}
	if (action.type === 'REDUX_WEBSOCKET::MESSAGE') {
		let message = JSON.parse(action.payload.message);
		if (message.type === 'HEALTH_UPDATE') {
			if (typeof state.data[message.id] === 'object') {
				return {
					...state,
					data: {
						...state.data,
						[message.id]: {
							...state.data[message.id],
							health: message.health
						}
					}
				};
			}
		}
	}
	return state;
}
