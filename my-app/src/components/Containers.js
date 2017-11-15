import React, {Component} from 'react';

export class Calculate extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.onClick();
	}

	render () {
		return (
			<div className="Calculate">
				<button onClick={this.handleClick}>
					Calculate
				</button>
			</div>
		);
	}
}