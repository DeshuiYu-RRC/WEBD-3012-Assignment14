import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  // Test 1: Component is visible
  test('renders button and is visible', () => {
    render(<Button text="Test Button" />);
    const buttonElement = screen.getByTestId('button-component');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  // Test 2: Background color changes when disabled
  test('changes background color when disabled', () => {
    const { rerender } = render(<Button text="Test Button" disabled={false} />);
    const buttonElement = screen.getByTestId('button-component');

    // Get initial background color
    const enabledStyle = window.getComputedStyle(buttonElement);
    const enabledBackground = enabledStyle.backgroundColor;

    // Rerender with disabled state
    rerender(<Button text="Test Button" disabled={true} />);
    const disabledStyle = window.getComputedStyle(buttonElement);
    const disabledBackground = disabledStyle.backgroundColor;

    // Check that background colors are different
    expect(enabledBackground).not.toBe(disabledBackground);
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });

  // Additional test: displays correct text
  test('displays correct text', () => {
    render(<Button text="Custom Text" />);
    expect(screen.getByText('Custom Text')).toBeInTheDocument();
  });
});
