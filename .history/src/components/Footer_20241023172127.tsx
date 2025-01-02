import React from 'react';
import styled, { keyframes } from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Marquee = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;

  p {
    display: inline-block;
    animation: ${marqueeAnimation} 10s linear infinite;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Marquee>
        <p>هذا نص متحرك يتحرك من اليسار إلى اليمين.</p>
      </Marquee>
    </FooterContainer>
  );
};

export default Footer;
