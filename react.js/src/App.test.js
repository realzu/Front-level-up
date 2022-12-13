import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  
});

test('button turns blue when clicked', () => {

})

/*
test('renders learn react link', () => {
  render(<App />); // render: JSX(=> App)에 관한 가상 DOM 생성
  // const linkElement = screen.getByText(/Learn React/i); // getByText: 표시되는 모든텍스트 기반으로 DOM에서 요소찾음 (인자는 정규식 or 'learn react')
  const linkElement = screen.getByRole('link', { name: /Learn react/i }); // ('역할자체', 옵션(test should be))
  expect(linkElement).toBeInTheDocument();
});
*/