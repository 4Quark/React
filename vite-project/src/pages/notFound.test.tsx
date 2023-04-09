import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './notFound';

it('NotFound page', () => {
  render(<NotFound />);
  expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
});
