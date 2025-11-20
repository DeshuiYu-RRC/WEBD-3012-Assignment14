import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  padding: 4px 8px;
  margin-bottom: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const RequiredStar = styled.span`
  color: red;
  margin-left: 4px;
`;

export const Label: React.FC<LabelProps> = ({
  text = 'Label',
  htmlFor,
  backgroundColor,
  disabled = false,
  required = false,
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="label-component"
    >
      {text}
      {required && <RequiredStar>*</RequiredStar>}
    </StyledLabel>
  );
};
