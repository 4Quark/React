import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './counter';

it('Counter heading', () => {
  render(<Counter />);
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});
