import React, { Component } from 'react';

const buttonStyle = {
	width: "350px"
};

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
			<div className="Calculate" style={buttonStyle}>
				<button type="button" className="btn btn-lg btn-primary" onClick={this.handleClick}>
					Calculate
				</button>
				<div className='alert alert-info' role='alert' style={{display: this.props.display}}>{this.props.result}</div>
			</div>
		);
	}
}