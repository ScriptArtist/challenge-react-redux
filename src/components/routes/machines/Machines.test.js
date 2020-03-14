import React from 'react';
import {shallow} from 'enzyme';
import {Machines} from './Machines';

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

describe('<Machines />', () => {
	test('should show spinner while loading machines list', () => {
		let props = {loading: true,
			onGetMachines: jest.fn(),
			machines: machinesList
		};
		let wrapper = shallow(<Machines {...props} />);

		expect(wrapper.find('Spinner').exists()).toBe(true);
		wrapper.setProps({loading: false});
		expect(wrapper.find('Spinner').exists()).toBe(false);
	});

	test('get machines method should be called after init', () => {
		let props = {
			loading: false,
			onGetMachines: jest.fn(),
			machines: machinesList
		};
		let wrapper = shallow(<Machines {...props} />);

		expect(props.onGetMachines).toBeCalled();
	});

	test('count of machines in list should be the same as passed in params', () => {
		let props = {
			loading: false,
			onGetMachines: jest.fn(),
			machines: machinesList
		};
		let wrapper = shallow(<Machines {...props} />);
		let listItems = wrapper.find('.machines__table tbody tr');

		expect(listItems.length).toBe(2);
	});
});

