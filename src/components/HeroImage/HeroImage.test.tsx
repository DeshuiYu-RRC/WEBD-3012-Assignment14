import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image and is visible', () => {
    render(<HeroImage title="Test Hero" />);
    const heroElement = screen.getByTestId('hero-component');
    expect(heroElement).toBeInTheDocument();
    expect(heroElement).toBeVisible();
  });

  test('changes appearance when disabled', () => {
    const { rerender } = render(<HeroImage title="Test" disabled={false} />);
    const heroElement = screen.getByTestId('hero-component');
    const enabledStyle = window.getComputedStyle(heroElement);

    rerender(<HeroImage title="Test" disabled={true} />);
    const disabledStyle = window.getComputedStyle(heroElement);

    expect(enabledStyle.opacity).not.toBe(disabledStyle.opacity);
    expect(heroElement).toHaveStyle('cursor: not-allowed');
  });
});
