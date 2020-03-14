import React from 'react';
import {shallow} from 'enzyme';
import Spinner from './spinner';

describe('<Spinner />', () => {
	test('should show spinner element', async () => {
		let wrapper = shallow(<Spinner />);
		let spinnerElement = wrapper.find('.spinner');
		expect(spinnerElement.exists()).toBe(true);
	});
});
