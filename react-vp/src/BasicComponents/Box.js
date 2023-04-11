import React, { Component } from 'react';

export default class Box extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight; // 세로 스크롤바 위치 = 전체높이(div) - 보여지는높이
    // 현재까지 내려온 높이 + 보여지는 높이 = 전체 높이 (= 스크롤 끝까지 내린 것)
  };

  render() {
    const style = {
      border: '1px solid red',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
