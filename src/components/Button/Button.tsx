import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

// Styled component - this is our CSS
const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) =>
    size === 'small'
      ? '8px 16px'
      : size === 'large'
        ? '16px 32px'
        : '12px 24px'};
  font-size: ${({ size }) =>
    size === 'small' ? '14px' : size === 'large' ? '18px' : '16px'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#cccccc' : backgroundColor || '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${({ disabled, backgroundColor }) =>
      disabled
        ? '#cccccc'
        : backgroundColor
          ? `${backgroundColor}dd`
          : '#0056b3'};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
  }

  /* Responsive design for mobile */
  @media (max-width: 768px) {
    padding: ${({ size }) =>
      size === 'small'
        ? '6px 12px'
        : size === 'large'
          ? '12px 24px'
          : '10px 20px'};
    font-size: ${({ size }) =>
      size === 'small' ? '12px' : size === 'large' ? '16px' : '14px'};
  }
`;

// The actual Button component
export const Button: React.FC<ButtonProps> = ({
  text = 'Click me',
  backgroundColor,
  disabled = false,
  onClick,
  size = 'medium',
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      size={size}
      data-testid="button-component"
    >
      {text}
    </StyledButton>
  );
};
