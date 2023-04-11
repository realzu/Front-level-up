import { Component } from 'react';

/*
const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      Hi, {name}
      <br />
      children: {children}!
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'Hj',
};
*/

class MyComponent extends Component {
  static defaultProps = {
    name: 'HJ',
  };
  render() {
    const { name, children } = this.props;
    return (
      <div>
        {name},{children}
      </div>
    );
  }
}

export default MyComponent;
