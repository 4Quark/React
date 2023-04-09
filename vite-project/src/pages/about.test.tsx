import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './about';

describe('About  page', () => {
  it('About heading', () => {
    render(<About />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('About text', () => {
    render(<About />);
    expect(screen.getByText(/Lorem Ipsum is simply dummy text/i)).toBeInTheDocument();
  });
});
