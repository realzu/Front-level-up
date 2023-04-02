import React, { useState } from 'react';

const EventCheck = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = (e) => {
    alert(username + ',' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventCheck;
