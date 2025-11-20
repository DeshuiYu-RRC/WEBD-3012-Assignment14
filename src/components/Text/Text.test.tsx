import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders text and is visible', () => {
    render(<Text text="Test Text" />);
    const textElement = screen.getByTestId('text-component');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    const { rerender } = render(<Text text="Test" disabled={false} />);
    const textElement = screen.getByTestId('text-component');
    const enabledStyle = window.getComputedStyle(textElement);

    rerender(<Text text="Test" disabled={true} />);
    const disabledStyle = window.getComputedStyle(textElement);

    expect(enabledStyle.backgroundColor).not.toBe(
      disabledStyle.backgroundColor,
    );
    expect(textElement).toHaveStyle('cursor: not-allowed');
  });
});
