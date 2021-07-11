import React, { Component } from 'react';
import './Count.css';
class Count extends Component {
  state = {
    count: 0,
    step: ''
  }
  setCount = (val) => {
    if (val === 'C') {
      alert('歸零')
      this.setState({
        count: 0
      })
      return
    }
    if (this.state.step === "") {
      alert('請選擇+-*/')
      return
    }
    if (this.state.step === "+") {
      this.count('+', val);
    }
    if (this.state.step === "-") {
      this.count('-', val);
    }
    if (this.state.step === "x") {
      this.count('x', val);
    }
    if (this.state.step === "/") {
      this.count('/', val);
    }
    this.setState({
      step: ''
    })
  }
  count = (mod, val) => {
    let number = this.state.count
    let total = val
    switch (mod) {
      case '+':
        this.setState({
          count: number + total
        })
        break;
      case '-':
        this.setState({
          count: number - total
        })
        break;
      case 'x':
        this.setState({
          count: number * total
        })
        break;
      case '/':
        this.setState({
          count: number / total
        })
        break;
      default:
        break;
    }
  }
  setStep = (val) => {
    this.setState({
      step: val
    })
  }
  render() {
    return (
      <div className="count">
        <p>{this.state.step}</p>
        <input type="text" placeholder="請輸入數字" readOnly value={this.state.count} />
        <div className="btn_func">
          <button onClick={() => this.setStep('+')}>+</button>
          <button onClick={() => this.setStep('-')}>-</button>
          <button onClick={() => this.setStep('x')}>x</button>
          <button onClick={() => this.setStep('/')}>/</button>
        </div>
        <div className="btn_number">
          <button onClick={() => this.setCount(7)}>7</button>
          <button onClick={() => this.setCount(8)}>8</button>
          <button onClick={() => this.setCount(9)}>9</button>
          <button onClick={() => this.setCount(4)}>4</button>
          <button onClick={() => this.setCount(5)}>5</button>
          <button onClick={() => this.setCount(6)}>6</button>
          <button onClick={() => this.setCount(1)}>1</button>
          <button onClick={() => this.setCount(2)}>2</button>
          <button onClick={() => this.setCount(3)}>3</button>
          <button onClick={() => this.setCount(0)} className="reset">0</button>
          <button onClick={() => this.setCount('C')}>C</button>
        </div>
      </div>
    );
  }
}

export default Count;