export function getMachines (state) {
	return Object.values(state.machines.data);
}

export function getMachine (state, id) {
	return state.machines.data[id];
}
