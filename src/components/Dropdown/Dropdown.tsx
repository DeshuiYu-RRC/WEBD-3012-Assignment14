import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<DropdownProps>`
  padding: 10px 12px;
  font-size: 14px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e0e0e0' : backgroundColor || '#ffffff'};
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  border: 1px solid ${({ disabled }) => (disabled ? '#ccc' : '#ced4da')};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  min-width: 200px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ disabled }) => (disabled ? '#ccc' : '#80bdff')};
  }

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 12px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  backgroundColor,
  disabled = false,
  placeholder = 'Select an option',
  onChange,
  defaultValue,
}) => {
  return (
    <StyledSelect
      backgroundColor={backgroundColor}
      disabled={disabled}
      onChange={(value: string) => onChange?.(value)}
      defaultValue={defaultValue}
      data-testid="dropdown-component"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
