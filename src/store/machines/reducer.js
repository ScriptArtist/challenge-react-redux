const initialState = {
	loading: false,
	data: []
};

export default function machines (state = initialState, action) {
	if (action.type === 'FETCH_MACHINES') {
		return {
			loading: true,
			data: []
		};
	}
	if (action.type === 'FETCH_MACHINES_SUCCESS') {
		return {
			loading: false,
			data: action.payload
		};
	}
	if (action.type === 'FETCH_MACHINE') {
		return {
			loading: true,
			data: []
		};
	}
	if (action.type === 'FETCH_MACHINE_SUCCESS') {
		return {
			loading: false,
			data: [action.payload]
		};
	}
	return state;
}
