import React, { Component } from 'react';
import './Health.scss';
import PropTypes from 'prop-types';

class Health extends Component {
	constructor (props) {
		super(props);
	}

	static get propTypes () {
		return {
			value: PropTypes.number,
			showValue: PropTypes.bool
		};
	}

	getColorType (value) {
		if (value <= 50) {
			return 'red';
		} else if (value <= 70) {
			return 'yellow';
		}
		return 'green';
	}

	render () {
		return (
			<div className='health'>
				{this.props.showValue &&
					<div className='health__value'>
						{this.props.value}
					</div>
				}
				<div className='health__progress-bar'>
					<div
						className={`health__progress-bar-indicator health__progress-bar-indicator_${this.getColorType(this.props.value)}`}
						style={{width: `${this.props.value}%`}}>
					</div>
				</div>
			</div>
		);
	}
}

export default Health;
