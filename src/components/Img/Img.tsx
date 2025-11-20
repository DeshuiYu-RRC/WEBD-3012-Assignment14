import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const ImgContainer = styled.div<ImgProps>`
  display: inline-block;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.4 : 0.9)};
  }
`;

const StyledImg = styled.img<ImgProps>`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  display: block;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src = 'https://placehold.co/300x200?text=Hello+World',
  alt = 'Placeholder image',
  backgroundColor,
  disabled = false,
  width,
  height,
  borderRadius,
}) => {
  return (
    <ImgContainer
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="img-container"
    >
      <StyledImg
        src={src}
        alt={alt}
        width={width}
        height={height}
        borderRadius={borderRadius}
        data-testid="img-component"
      />
    </ImgContainer>
  );
};
