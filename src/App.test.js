import { render, screen } from '@testing-library/react';
import App from './App';

test('renders selector checker heading', () => {
  render(<App />);
  const heading = screen.getByText(/CSS Selector Checker/i);
  expect(heading).toBeInTheDocument();
});

test('renders login page', () => {
  render(<App />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});
