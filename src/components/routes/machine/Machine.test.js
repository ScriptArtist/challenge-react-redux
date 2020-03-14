import React from 'react';
import {shallow} from 'enzyme';
import {Machine} from './Machine';

let machine = {
	id: '99ade105-dee1-49eb-8ac4-e4d272f89fba',
	name: 'Machine 1',
	ip_address: '127.0.0.31',
	health: 65
};

describe('<Machine />', () => {
	test('should show spinner while loading machine', () => {
		let props = {
			machineId: machine.id,
			loading: true,
			onGetMachine: jest.fn(),
			machine: machine
		};
		let wrapper = shallow(<Machine {...props} />);

		expect(wrapper.find('Spinner').exists()).toBe(true);
		wrapper.setProps({loading: false});
		expect(wrapper.find('Spinner').exists()).toBe(false);
	});

	test('should show machine title', () => {
		let props = {
			machineId: machine.id,
			loading: false,
			onGetMachine: jest.fn(),
			machine: machine
		};
		let wrapper = shallow(<Machine {...props} />);
		let titleText = wrapper.find('.machine__title').text();

		expect(titleText).toBe('Machine 1');
	});

	test('should contain <health />', () => {
		let props = {
			machineId: machine.id,
			loading: false,
			onGetMachine: jest.fn(),
			machine: machine
		};
		let wrapper = shallow(<Machine {...props} />);
		let healthElement = wrapper.find('Health');

		expect(healthElement.exists()).toBe(true);
	});

	test('should call machineUpdate on submit form', () => {
		let props = {
			machineId: machine.id,
			loading: false,
			onGetMachine: jest.fn(),
			onUpdateMachine: jest.fn(),
			machine: machine
		};
		let wrapper = shallow(<Machine {...props} />);
		wrapper.setState({nameValue: 'text'});
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };

		expect(props.onUpdateMachine).not.toBeCalled();
		wrapper.find('.machine__form').simulate('submit', fakeEvent);
		expect(props.onUpdateMachine).toBeCalled();
	});

	test("shouldn't call machineUpdate on submit empty name", () => {
		let props = {
			machineId: machine.id,
			loading: false,
			onGetMachine: jest.fn(),
			onUpdateMachine: jest.fn(),
			machine: machine
		};
		let wrapper = shallow(<Machine {...props} />);
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };

		expect(props.onUpdateMachine).not.toBeCalled();
		wrapper.find('.machine__form').simulate('submit', fakeEvent);
		expect(props.onUpdateMachine).not.toBeCalled();
	});
});

