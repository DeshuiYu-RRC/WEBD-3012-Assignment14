import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  user-select: none;
  padding: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'transparent' : '#f8f9fa'};
  }
`;

const StyledRadio = styled.input<RadioButtonProps>`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  accent-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#cccccc' : backgroundColor || '#007bff'};

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const RadioLabel = styled.span<{ disabled?: boolean }>`
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Radio option',
  name = 'radio-group',
  value = 'option',
  backgroundColor,
  disabled = false,
  checked = false,
  onChange,
}) => {
  return (
    <RadioContainer disabled={disabled} data-testid="radio-container">
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        backgroundColor={backgroundColor}
        disabled={disabled}
        {...(onChange ? { checked } : { defaultChecked: checked })}
        onChange={onChange}
        data-testid="radio-component"
      />
      <RadioLabel disabled={disabled}>{label}</RadioLabel>
    </RadioContainer>
  );
};
