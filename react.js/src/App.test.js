import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // render: JSX(=> App)에 관한 가상 DOM 생성
  // const linkElement = screen.getByText(/Learn React/i); // getByText: 표시되는 모든텍스트 기반으로 DOM에서 요소찾음 (인자는 정규식 or 'learn react'(App.js에 있음))
  const linkElement = screen.getByRole('link', { name: /Learn react/i }); // ('역할자체', 옵션(test should be))
  expect(linkElement).toBeInTheDocument();
});