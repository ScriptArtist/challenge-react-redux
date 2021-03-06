import { keyBy, merge } from 'lodash';
import { DEFAULT_PREFIX, WEBSOCKET_MESSAGE } from '@giantmachines/redux-websocket';
import * as types from './machinesTypes';

const initialState = {
	loading: false,
	data: {}
};

export default function machines (state = initialState, action) {
	if (action.type === types.FETCH_MACHINES) {
		return {
			...state,
			loading: true,
			data: {}
		};
	}
	if (action.type === types.FETCH_MACHINES_SUCCESS) {
		const machine = keyBy(action.payload, (machine) => machine.id);
		return {
			...state,
			loading: false,
			data: machine
		};
	}
	if (action.type === types.FETCH_MACHINE) {
		return {
			...state,
			loading: true,
			data: {}
		};
	}
	if (action.type === types.FETCH_MACHINE_SUCCESS) {
		return {
			...state,
			loading: false,
			data: {[action.payload.id]: action.payload}
		};
	}
	if (action.type === `${DEFAULT_PREFIX}::${WEBSOCKET_MESSAGE}`) {
		let message = JSON.parse(action.payload.message);
		if (message.type === types.HEALTH_UPDATE) {
			if (typeof state.data[message.id] === 'object') {
				return {
					...state,
					data: merge({}, state.data, {[message.id]: {health: message.health}})
				};
			}
		}
	}
	return state;
}
