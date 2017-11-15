import React, { Component } from 'react';
import {Loan, Interest, Term} from './Presentations';
import {Calculate} from './Containers';

const allStyle = {
  font: '12px sans-serif',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loanBalance: '0',
      interestRate: '0',
      loanTerm: '0',
      result: ''
    };
    this.changeLoanBalance = this.changeLoanBalance.bind(this);
    this.changeInterestRate = this.changeInterestRate.bind(this);
    this.changeLoanTerm = this.changeLoanTerm.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  changeLoanBalance(newBalance) {
    this.setState({ loanBalance: newBalance });
  }

  changeInterestRate(newRate) {
    this.setState({ interestRate: newRate });
  }

  changeLoanTerm(newTerm) {
    this.setState({ loanTerm: newTerm });
  } 

  calculate() {
    const p = Number(this.state.loanBalance);
    const r = (Number(this.state.interestRate) / 12) * 0.01;
    const n = Number(this.state.loanTerm) * 12;
    if (isNaN(p)) {
      const mortgage = 'Loan Balance is not a valid number'
      this.setState({ result: mortgage });
    } else if (isNaN(r)) {
      const mortgage = 'Interest Rate is not a valid number'
      this.setState({ result: mortgage });
    } else if (p === 0) {
      const mortgage = 'Your monthly mortgage rate is: $0.00';
      this.setState({ result: mortgage });
    } else if (r === 0) {
      const mortgage = 'Your monthly mortgage rate is: $' + (p / n).toFixed(2).toString();
      this.setState({ result: mortgage });
    } else if (n === 0) {
      const mortgage = 'Your monthly mortgage rate is: $' + p.toFixed(2).toString();
      this.setState({ result: mortgage });
    } else {
      const mortgage = 'Your monthly mortgage rate is: $' + (p * ((r*Math.pow((1+r),n)) / (Math.pow((1+r),n) - 1))).toFixed(2).toString();
      this.setState({ result: mortgage });
    }
  }

  render() {
    return (
      <div style={allStyle}>
        <h1> Mortgage Calculator </h1>
        <Loan balance={this.state.loanBalance} onChange={this.changeLoanBalance} />
        <Interest rate={this.state.interestRate} onChange={this.changeInterestRate} />
        <Term term={this.state.loanTerm} onChange={this.changeLoanTerm} />
        <Calculate onClick={this.calculate}/>
        <p>{this.state.result}</p>
        {/*<p> Loan Balance = {this.state.loanBalance}, Interest Rate = {this.state.interestRate}, Loan Term = {this.state.loanTerm} </p>*/}
      </div>
    );
  }
};
