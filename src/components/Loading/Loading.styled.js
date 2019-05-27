import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const rotation  = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  animation: ${rotation} 1000ms linear infinite;
`;
