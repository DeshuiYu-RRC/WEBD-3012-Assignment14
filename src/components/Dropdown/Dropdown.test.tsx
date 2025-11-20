import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  test('renders dropdown and is visible', () => {
    render(<Dropdown />);
    const dropdownElement = screen.getByTestId('dropdown-component');
    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    const { rerender } = render(<Dropdown disabled={false} />);
    const dropdownElement = screen.getByTestId('dropdown-component');
    const enabledStyle = window.getComputedStyle(dropdownElement);

    rerender(<Dropdown disabled={true} />);
    const disabledStyle = window.getComputedStyle(dropdownElement);

    expect(enabledStyle.backgroundColor).not.toBe(
      disabledStyle.backgroundColor,
    );
    expect(dropdownElement).toHaveStyle('cursor: not-allowed');
  });
});
