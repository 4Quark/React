import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect } from 'vitest';
import Homepage from './homepage';

describe('Homepage  page', () => {
  it('Search input testing', async () => {
    render(<Homepage />);
    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('id', 'search');
    expect(element).toHaveAttribute('type', 'text');
    expect(element).toHaveAttribute('class', 'searchInput');
  });

  it('Home searching', async () => {
    render(<Homepage />);
    const search = screen.getByRole('textbox') as HTMLInputElement;
    expect(screen.getByText(/There is nothing here/i)).toBeInTheDocument();
    await waitFor(async () => fireEvent.change(search, { target: { value: 'rick' } }));
    expect(search.value).toEqual('rick');
  });
});
