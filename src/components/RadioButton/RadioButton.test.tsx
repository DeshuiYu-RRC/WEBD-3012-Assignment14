import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button and is visible', () => {
    render(<RadioButton label="Test Radio" />);
    const radioElement = screen.getByTestId('radio-component');
    expect(radioElement).toBeInTheDocument();
    expect(radioElement).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(<RadioButton label="Test" disabled={false} />);
    const radioElement = screen.getByTestId('radio-component');

    rerender(<RadioButton label="Test" disabled={true} />);

    expect(radioElement).toHaveStyle('cursor: not-allowed');
    expect(radioElement).toBeDisabled();
  });
});
