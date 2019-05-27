import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const Containter = styled.div`
  margin: 4px;
  width: 150px;
  height: 200px;
  z-index: 0;
  width: 154px;
  height: 211px;
  background: linear-gradient(340deg, rgba(103,159,213,1) 20%, rgba(255,203,5,1) 50%, rgba(103,159,213,1) 90%);
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pokemon = styled.div`
  position: relative;
  min-height: fit-content;
  height: 100%;
  width: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: ${({ isCollecting }) => isCollecting ? 2000 : 500};
  padding-top: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
`;

const imageAppering  = keyframes`
  from {
    opacity: 0;
    transform: scale(0.3) rotate(270deg);
  }
  60% {
    opacity: 0.3;
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
`;

export const PokemonImg = styled.img`
  width: 150px;
  height: 150px;
  opacity: 0;
  animation: ${imageAppering} 400ms forwards;
  animation-delay: ${({ index }) => (index  % 20) * 200}ms;
`;

const titleAppering  = keyframes`
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  70% {
    /* opacity: 0.3; */
    transform: scale(1.3);
  }
  to {
    opacity: 0.85;
    transform: scale(1);
  }
`;

export const Title = styled.p`
  margin: -8px 0 8px;
  font-size: ${({ size }) => size === 'small' ? '15px' : '17px'};
  text-align: center;
  opacity: 0;
  text-transform: capitalize;
  animation: ${titleAppering} 400ms forwards;
  animation-delay: ${({ index }) => (index  % 20) * 200}ms;
  /* background: linear-gradient(140deg,rgba(103,159,213,1) 36%,rgba(255,203,5,0.9) 85%,rgba(103,159,213,1) 90%); */
  background: linear-gradient(310deg, rgba(103,159,213,1) 26%, rgba(255,203,5,0.9) 52%, rgba(103,159,213,1) 76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
  line-height: 1.46;
  /* opacity: 0.8; */
  /* color: rgba(103,159,213,1); */
`;
