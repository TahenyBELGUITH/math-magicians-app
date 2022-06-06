import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="calculator-container">
          <span>Tahtouha</span>
          <div className="output">
            <div className="operation">
              {total}

              {operation}

              {' '}
              {next}
            </div>
          </div>
          <div className="buttons">
            <div className="group1">
              <button onClick={this.clickHandler} name="AC" type="button">
                AC
              </button>
              <button onClick={this.clickHandler} name="+/-" type="button">
                +/-
              </button>
              <button onClick={this.clickHandler} name="%" type="button">
                %
              </button>
              <button onClick={this.clickHandler} name="+" type="button">
                +
              </button>
            </div>
            <div className="group2">
              <button onClick={this.clickHandler} name="7" type="button">
                7
              </button>
              <button onClick={this.clickHandler} name="8" type="button">
                8
              </button>
              <button onClick={this.clickHandler} name="9" type="button">
                9
              </button>
              <button onClick={this.clickHandler} name="÷" type="button">
                ÷
              </button>
            </div>

            <div className="group3">
              <button onClick={this.clickHandler} name="4" type="button">
                4
              </button>
              <button onClick={this.clickHandler} name="5" type="button">
                5
              </button>
              <button onClick={this.clickHandler} name="6" type="button">
                6
              </button>
              <button onClick={this.clickHandler} name="x" type="button">
                x
              </button>
            </div>
            <div className="group4">
              <button onClick={this.clickHandler} name="1" type="button">
                1
              </button>
              <button onClick={this.clickHandler} name="2" type="button">
                2
              </button>
              <button onClick={this.clickHandler} name="3" type="button">
                3
              </button>
              <button onClick={this.clickHandler} name="-" type="button">
                -
              </button>
            </div>
            <div className="group5">
              <button
                onClick={this.clickHandler}
                name="0"
                type="button"
                className="span2"
              >
                0
              </button>
              <button onClick={this.clickHandler} name="." type="button">
                .
              </button>
              <button onClick={this.clickHandler} name="=" type="button">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
