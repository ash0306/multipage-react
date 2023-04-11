import React, { Component } from 'react'
import './CalculatorComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent';

export default class CalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }
  handleClick = (e) => {
    this.setState({
      result: this.state.result.concat(e.target.name)
    });
  }
  clear = () => {
    this.setState({
      result: ''
    });
  }
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result).toString()
      });
    } catch (error) {
      this.setState({
        result: 'Error'
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent/>
        <div className='calc-container'>
          <div className='calculator'>
            <form className='display'>
              <input type="text" value={this.state.result} />
            </form>
            <div className='operators'>
              <button name="/" onClick={this.handleClick}>/</button>
              <button name='*' onClick={this.handleClick}>*</button>
              <button name='+' onClick={this.handleClick}>+</button>
              <button name='-' onClick={this.handleClick}>-</button>
              <button onClick={this.clear} id="clear">CE</button>
              <button onClick={this.backspace} id="backspace">DEL</button>
            </div>
            <div className='digits'>
              <button name="1" onClick={this.handleClick}>1</button>
              <button name="2" onClick={this.handleClick}>2</button>
              <button name="3" onClick={this.handleClick}>3</button>
              <button name="4" onClick={this.handleClick}>4</button>
              <button name="5" onClick={this.handleClick}>5</button>
              <button name="6" onClick={this.handleClick}>6</button>
              <button name="7" onClick={this.handleClick}>7</button>
              <button name="8" onClick={this.handleClick}>8</button>
              <button name="9" onClick={this.handleClick}>9</button>
              <button name="0" onClick={this.handleClick}>0</button>
              <button name="." onClick={this.handleClick}>.</button>
              <button onClick={this.calculate} id="result">=</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
