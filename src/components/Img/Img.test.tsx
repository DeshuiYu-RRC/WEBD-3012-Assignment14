import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders image and is visible', () => {
    render(
      <Img src="https://placehold.co/600x400?text=Hello+World" alt="Test" />,
    );
    const imgElement = screen.getByTestId('img-component');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(
      <Img
        src="https://placehold.co/600x400?text=Hello+World"
        disabled={false}
      />,
    );
    const containerElement = screen.getByTestId('img-container');
    const enabledStyle = window.getComputedStyle(containerElement);

    rerender(
      <Img
        src="https://placehold.co/600x400?text=Hello+World"
        disabled={true}
      />,
    );
    const disabledStyle = window.getComputedStyle(containerElement);

    expect(enabledStyle.opacity).not.toBe(disabledStyle.opacity);
    expect(containerElement).toHaveStyle('cursor: not-allowed');
  });
});
