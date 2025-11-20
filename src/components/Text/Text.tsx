import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'large' ? '20px' : '16px'};
  font-weight: ${({ weight }) => (weight === 'bold' ? 700 : 400)};
  color: ${({ color, disabled }) => (disabled ? '#999' : color || '#333')};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#f0f0f0' : backgroundColor || 'transparent'};
  padding: 8px;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${({ size }) =>
      size === 'small' ? '10px' : size === 'large' ? '18px' : '14px'};
  }
`;

export const Text: React.FC<TextProps> = ({
  text = 'Text content',
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  weight = 'normal',
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
      {text}
    </StyledText>
  );
};
