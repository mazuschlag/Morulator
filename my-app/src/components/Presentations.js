import React, {Component} from 'react';

const inputStyle = {
	width: "350px",
	marginLeft: "0px",
	marginTop: "10px"
};

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
			<div className="form-group row" style={inputStyle}>
  			<label className="col-2 col-form-label">Loan Balance</label>
  			<div className="col-10">
    			<input className="form-control" type="text" value={this.props.balance} onChange={this.handleChange} id="loanBalance"/>
  			</div>
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
			<div className="form-group row" style={inputStyle}>
  			<label className="col-2 col-form-label">Interest Rate (%)</label>
  			<div className="col-10">
    			<input className="form-control" type="text" value={this.props.rate} onChange={this.handleChange} id="interestRate"/>
  			</div>
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
		  <div className="form-group" style={inputStyle}>
		    <label>Loan Term (years)</label>
		    <select className="form-control" value={this.props.term} onChange={this.handleChange} id="loanTerm">
					<option value='0'>0</option>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='15'>15</option>
					<option value='20'>20</option>
					<option value='25'>25</option>
					<option value='30'>30</option>
		    </select>
		  </div>
		);
	}
}