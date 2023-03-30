// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
import { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LiftCycleSample from './LiftCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777216).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LiftCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
