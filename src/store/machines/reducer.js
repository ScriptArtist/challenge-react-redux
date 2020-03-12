const initialState = [];

export default function machines (state = initialState, action) {
	if(action.type === 'FETCH_MACHINES_SUCCESS') {
		return action.payload;
	}
	return state;
}
