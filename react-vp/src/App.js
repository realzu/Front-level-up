import React, { Component } from 'react';
import Box from './Box';

export default class App extends Component {
  render() {
    return (
      <div>
        <Box ref={(ref) => (this.bbooxx = ref)} />
        <button onClick={() => this.bbooxx.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}
