import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

// Styled component - this is our CSS
const StyledButton = styled.button<ButtonProps & { variant?: string }>`
  padding: ${({ size }) =>
    size === 'small'
      ? '8px 16px'
      : size === 'large'
        ? '16px 32px'
        : '12px 24px'};
  font-size: ${({ size }) =>
    size === 'small' ? '14px' : size === 'large' ? '18px' : '16px'};
  background-color: ${({ backgroundColor, disabled, variant }) => {
    if (disabled) return '#cccccc';
    if (backgroundColor) return backgroundColor;
    if (variant === 'primary') return '#3498db';
    if (variant === 'secondary') return '#e74c3c';
    if (variant === 'success') return '#27ae60';
    return '#3498db';
  }};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-weight: 500;

  &:hover {
    background-color: ${({ disabled, backgroundColor, variant }) => {
      if (disabled) return '#cccccc';
      if (backgroundColor) return `${backgroundColor}dd`;
      if (variant === 'primary') return '#2980b9';
      if (variant === 'secondary') return '#c0392b';
      if (variant === 'success') return '#229954';
      return '#2980b9';
    }};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
export const Button: React.FC<
  ButtonProps & { children?: React.ReactNode; variant?: string }
> = ({
  text,
  backgroundColor,
  disabled = false,
  onClick,
  size = 'medium',
  children,
  variant,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      size={size}
      data-testid="button-component"
    >
      {children !== undefined ? children : text || 'Click me'}
    </StyledButton>
  );
};
