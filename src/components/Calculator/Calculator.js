import React, { Component } from 'react';
//import css file for styling
import './Calculator.css';

export default class Calculator extends Component {

  constructor() {
      super();
      this.state = {
          num1: '',
          num2: '',
          operation: ''
      }
  }

  changeNum1(num1) {
    this.setState({num1: `${this.state.num1}${num1}`});
  }

  changeNum2(num2) {
    this.setState({num2: `${this.state.num2}${num2}`});
  }

  clearInput(e) {
    e.preventDefault();

    const { num1, num2 } = this.state;

    if(num1 && !num2) {
      this.setState({num1: ''})
    } else {
      this.setState({num1: '', num2: '', operation: ''})
    }
  }

  equal() {
    const { operation, num1, num2 } = this.state;

    if (operation === 'add') {
      // Use a return statement to retour out the function
      return this.setState({num1: +num1 + +num2, num2: '', operation: '' });
    }
  }

  add() {
    const { num1, num2 } = this.state;
    this.setState({operation: 'add'})
  }

  render() {
    const { num1, num2, operation } = this.state;

    return (
    <div className='container'>
        <div className='wrapper'>
            <input value={operation ? num2 : num1} />
            <button onClick={(e) => this.clearInput(e)} className='btn'>CE</button>
            <button className='btn'>% Remainder</button>
        </div>
        <div className='wrapper'>
            <button onClick={(e) => operation ? this.changeNum2('7') : this.changeNum1('7')} className='btn'>7</button>
            <button onClick={(e) => operation ? this.changeNum2('8') : this.changeNum1('8')} className='btn'>8</button>
            <button onClick={(e) => operation ? this.changeNum2('9') : this.changeNum1('9')} className='btn'>9</button>
            <button className='btn'>/</button>
        </div>
        <div className='wrapper'>
            <button onClick={(e) => operation ? this.changeNum2('4') : this.changeNum1('4')} className='btn'>4</button>
            <button onClick={(e) => operation ? this.changeNum2('5') : this.changeNum1('5')} className='btn'>5</button>
            <button onClick={(e) => operation ? this.changeNum2('6') : this.changeNum1('6')} className='btn'>6</button>
            <button className='btn'>x</button>
        </div>
        <div className='wrapper'>
            <button onClick={(e) => operation ? this.changeNum2('1') : this.changeNum1('1')} className='btn'>1</button>
            <button onClick={(e) => operation ? this.changeNum2('2') : this.changeNum1('2')} className='btn'>2</button>
            <button onClick={(e) => operation ? this.changeNum2('3') : this.changeNum1('3')} className='btn'>3</button>
            <button className='btn'>-</button>
        </div>
        <div className='wrapper'>
            <button onClick={(e) => operation ? this.changeNum2('.') : this.changeNum1('.')} className='btn'>.</button>
            <button onClick={(e) => operation ? this.changeNum2('0') : this.changeNum1('0')} className='btn'>0</button>
            <button onClick={() => this.equal()} className='btn'>=</button>
            <button onClick={() => this.add()} className='btn'>+</button>
        </div>
    </div>
);
  }
}
