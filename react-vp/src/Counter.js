import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>고정: {fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log('Hi');
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
