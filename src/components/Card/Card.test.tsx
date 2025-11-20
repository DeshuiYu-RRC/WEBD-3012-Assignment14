import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders card and is visible', () => {
    render(<Card title="Test Card" content="Test content" />);
    const cardElement = screen.getByTestId('card-component');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    const { rerender } = render(<Card title="Test" disabled={false} />);
    const cardElement = screen.getByTestId('card-component');
    const enabledStyle = window.getComputedStyle(cardElement);

    rerender(<Card title="Test" disabled={true} />);
    const disabledStyle = window.getComputedStyle(cardElement);

    expect(enabledStyle.backgroundColor).not.toBe(
      disabledStyle.backgroundColor,
    );
    expect(cardElement).toHaveStyle('cursor: not-allowed');
  });
});
