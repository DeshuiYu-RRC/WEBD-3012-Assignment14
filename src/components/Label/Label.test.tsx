import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders label and is visible', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByTestId('label-component');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(<Label text="Test" disabled={false} />);
    const labelElement = screen.getByTestId('label-component');
    const enabledStyle = window.getComputedStyle(labelElement);

    rerender(<Label text="Test" disabled={true} />);
    const disabledStyle = window.getComputedStyle(labelElement);

    expect(labelElement).toHaveStyle('cursor: not-allowed');
    expect(enabledStyle.color).not.toBe(disabledStyle.color);
  });
});
