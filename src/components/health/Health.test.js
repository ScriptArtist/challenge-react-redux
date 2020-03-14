import React from 'react';
import Health from './Health';
import Enzyme, {shallow} from 'enzyme';

describe('<Health />', () => {
	test('should have progress bar', () => {
		let props = { value: 100 };
		let wrapper = shallow(<Health {...props} />);
		let progressBar = wrapper.find('.health__progress-bar');
		expect(progressBar.exists()).toBe(true);
	});

	test('should show health value when needed', () => {
		let props = { showValue: true, value: 100 };
		let wrapper = shallow(<Health {...props} />);

		expect(wrapper.find('.health__value').exists()).toBe(true);
		wrapper.setProps({showValue: false});
		expect(wrapper.find('.health__value').exists()).toBe(false);
	});

	test('should have correct value', () => {
		let props = { showValue: true, value: 55 };
		let wrapper = shallow(<Health {...props} />);
		let healthValue = wrapper.find('.health__value').text();
		expect(healthValue).toBe("55");
	});

	test('should have correct colors', () => {
		let wrapper = shallow(<Health />);

		wrapper.setProps({value: 100});
		expect(wrapper.find('.health__progress-bar-indicator').hasClass('health__progress-bar-indicator_green')).toBe(true);
		wrapper.setProps({value: 60});
		expect(wrapper.find('.health__progress-bar-indicator').hasClass('health__progress-bar-indicator_yellow')).toBe(true);
		wrapper.setProps({value: 20});
		expect(wrapper.find('.health__progress-bar-indicator').hasClass('health__progress-bar-indicator_red')).toBe(true);
	});

	test('progress bar should show correct health', () => {
		let props = {value: 55};
		let wrapper = shallow(<Health {...props} />);
		let indicatorElement = wrapper.find('.health__progress-bar-indicator');
		expect(indicatorElement.prop('style')).toHaveProperty('width', '55%');
	});
});
