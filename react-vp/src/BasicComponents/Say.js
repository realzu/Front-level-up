import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  const onClickEnter = () => setMessage('Hi');
  const onClickLeave = () => setMessage('Bye');

  return (
    <div>
      <button onClick={onClickEnter}>입</button>
      <button onClick={onClickLeave}>퇴</button>

      <h1 style={{ color: color }}>{message}</h1>

      <button style={{ color: 'pink' }} onClick={() => setColor('pink')}>
        핑크
      </button>
      <button style={{ color: 'skyblue' }} onClick={() => setColor('skyblue')}>
        하늘
      </button>
    </div>
  );
};

export default Say;
