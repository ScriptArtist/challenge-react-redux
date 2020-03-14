import React from 'react';
import {shallow} from 'enzyme';
import {AppRoutes} from './AppRoutes';

describe('<AppRoutes />', () => {
	test('should have header', () => {
		let wrapper = shallow(<AppRoutes />);
		let header = wrapper.find('.App-header');
		expect(header.exists()).toBe(true);
	});

	test('navigation links exists', () => {
		let wrapper = shallow(<AppRoutes />);
		let navigationElement = wrapper.find('.App-nav');
		let linkToMain = navigationElement.findWhere(n => n.prop('to') === '/');
		let linkToMachines = navigationElement.findWhere(n => n.prop('to') === '/machines');

		expect(navigationElement.exists()).toBe(true);
		expect(linkToMain.exists()).toBe(true);
		expect(linkToMachines.exists()).toBe(true);
	});
});

