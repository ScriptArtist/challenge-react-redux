import React, {Component} from 'react';
import {PacmanLoader} from 'react-spinners';
import './spinner.scss';

class Spinner extends Component {
	constructor (props) {
		super(props);
		this.state = {
			show: false
		};
	}

	componentDidMount () {
		setTimeout(() => {
			this.setState({show: true});
		}, 0);

	}

	render () {
		return (
			<div className={`spinner ${this.state.show ? 'spinner_show':''}`}>
				<PacmanLoader
					size={30}
					color={'#f15825'}
				/>
			</div>
		);
	}
}

export default Spinner;
