import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '400px'};
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  background-color: ${({ backgroundColor }) => backgroundColor || '#000'};

  @media (max-width: 768px) {
    height: ${({ height }) => (height ? `calc(${height} * 0.6)` : '240px')};
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin: 0 0 16px 0;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src = 'https://via.placeholder.com/1200x400',
  alt = 'Hero image',
  title = 'Welcome',
  subtitle = 'This is a hero section',
  backgroundColor,
  disabled = false,
  height,
}) => {
  return (
    <HeroContainer
      backgroundColor={backgroundColor}
      disabled={disabled}
      height={height}
      data-testid="hero-component"
    >
      <HeroImg src={src} alt={alt} />
      <HeroOverlay disabled={disabled}>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroOverlay>
    </HeroContainer>
  );
};
