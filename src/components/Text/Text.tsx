import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }) => {
    if (size === 'small') return '14px';
    if (size === 'large') return '20px';
    if (size === 'xl') return '32px';
    return '16px';
  }};
  font-weight: ${({ weight }) => (weight === 'bold' ? 700 : 400)};
  color: ${({ color, disabled }) => (disabled ? '#999' : color || '#333')};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#f0f0f0' : backgroundColor || 'transparent'};
  padding: ${({ size }) => (size === 'xl' ? '0' : '4px 8px')};
  margin: ${({ size }) => (size === 'xl' ? '0 0 1.5rem 0' : '0')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  line-height: ${({ size }) => (size === 'xl' ? '1.2' : '1.6')};

  @media (max-width: 768px) {
    font-size: ${({ size }) => {
      if (size === 'small') return '12px';
      if (size === 'large') return '18px';
      if (size === 'xl') return '24px';
      return '14px';
    }};
  }
`;

export const Text: React.FC<TextProps & { children?: React.ReactNode }> = ({
  text,
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  weight = 'normal',
  children,
}) => {
  return (
    <StyledText
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      size={size}
      weight={weight}
      data-testid="text-component"
    >
      {children !== undefined ? children : text || 'Text content'}
    </StyledText>
  );
};
