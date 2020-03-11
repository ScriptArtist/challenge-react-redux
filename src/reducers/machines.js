const initialState = [
	{
		id: '99ade105-dee1-49eb-8ac4-e4d272f89fba',
		name: 'Machine 1',
		'ip_address': '127.0.0.31',
		health: 60
	},
	{
		id: '4111947a-6c58-4977-90fa-2caaaef88648',
		name: 'Machine 2',
		'ip_address': '127.0.0.4',
		health: 100
	}
];

export default function machines (state = initialState, action) {
	return state;
}
