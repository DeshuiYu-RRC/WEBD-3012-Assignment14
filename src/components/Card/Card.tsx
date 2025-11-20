import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e0e0e0' : backgroundColor || '#ffffff'};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${({ elevation, disabled }) =>
    disabled
      ? 'none'
      : `0 ${elevation || 2}px ${(elevation || 2) * 4}px rgba(0,0,0,0.1)`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  max-width: 400px;

  &:hover {
    box-shadow: ${({ elevation, disabled }) =>
      disabled
        ? 'none'
        : `0 ${(elevation || 2) + 2}px ${((elevation || 2) + 2) * 4}px rgba(0,0,0,0.15)`};
  }

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 100%;
  }
`;

const CardTitle = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 12px 0;
  font-size: 20px;
  color: ${({ disabled }) => (disabled ? '#666' : '#333')};
`;

const CardContent = styled.p<{ disabled?: boolean }>`
  margin: 0;
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? '#999' : '#666')};
  line-height: 1.6;
`;

export const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  content = 'Card content goes here',
  backgroundColor,
  disabled = false,
  elevation = 2,
}) => {
  return (
    <StyledCard
      backgroundColor={backgroundColor}
      disabled={disabled}
      elevation={elevation}
      data-testid="card-component"
    >
      <CardTitle disabled={disabled}>{title}</CardTitle>
      <CardContent disabled={disabled}>{content}</CardContent>
    </StyledCard>
  );
};
