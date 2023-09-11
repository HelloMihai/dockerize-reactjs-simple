import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render button', () => {
  const { container } = render(<App />);
  const myButtonElement = container.querySelector('button.my-button');
  expect(myButtonElement).toBeInTheDocument();
})
