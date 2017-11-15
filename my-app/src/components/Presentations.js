import React, {Component} from 'react';

const labelStyle = {
	display: 'inline-block',
	width: '140px',
	textAlign: 'right',
	paddingRight: '0.5em'
}

const inputStyle = {
	display: 'inline-block'
}

export class Loan extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const loan = e.target.value;
		this.props.onChange(loan);
	}

	render () {
		return (
			<div className="Loan">
				<label>
					Loan Balance:	
						<input type='text' value={this.props.balance} onChange={this.handleChange} />
				</label>
			</div>
		);
	}
}

export class Interest extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const rate = e.target.value;
		this.props.onChange(rate);
	}

	render () {
		return (
			<div className="Interest">
				<label>
					Interest Rate (%):	
					<input type='text' value={this.props.rate} onChange={this.handleChange}/>
				</label>
			</div>
		);
	}
}

export class Term extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const term = e.target.value;
		this.props.onChange(term);
	}

	render () {
		return (
			<div className="Term">
				<label>
					Loan Term (years):
						<select value={this.props.term} onChange={this.handleChange}>  
							<option value='0'>0</option>
							<option value='5'>5</option>
							<option value='10'>10</option>
							<option value='15'>15</option>
							<option value='20'>20</option>
							<option value='25'>25</option>
							<option value='30'>30</option>
						</select>	
				</label>
			</div>
		);
	}
}