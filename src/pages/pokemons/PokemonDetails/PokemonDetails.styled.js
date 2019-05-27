import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const Containter = styled.div`
  margin: 4px;
  /* width: 516px; */
  width: fit-content;
  /* height: 200px; */
  z-index: 0;
  /* height: 211px; */
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
  width: 100%;
  min-width: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 500;
  padding: 16px 32px;
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
  height: ${({ isSmall }) => isSmall ? 100 : 150}px;
  opacity: 0;
  animation: ${imageAppering} 400ms forwards;
  width: ${({ isSmall }) => isSmall ? 100 : 150}px;
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
  margin: -10px 0 4px;
  font-size: ${({ isSmall }) => isSmall ? '15px' : '17px'};
  text-align: center;
  opacity: 0;
  text-transform: capitalize;
  animation: ${titleAppering} 400ms forwards;
  animation-delay: ${({ index }) => (index  % 20) * 200}ms;
  /* background: linear-gradient(140deg,rgba(103,159,213,1) 36%,rgba(255,203,5,0.9) 85%,rgba(103,159,213,1) 90%); */
  background: linear-gradient(310deg, rgba(103,159,213,1) 26%, rgba(255,203,5,0.9) 52%, rgba(103,159,213,1) 76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  line-height: 1.46;
  padding: 4px;
`;

export const BlockTitle = styled.p`
  color: rgba(255,203,5,1);
  margin-bottom: 0;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-width: fit-content; */
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StatName = styled.p`
  line-height: 1.6;
  margin-bottom: 2px;
  margin-top: -4px;
  font-size: 14px;
  text-transform: capitalize;
`;

export const StatValue = styled.p`
  line-height: 1.6;
  margin-bottom: 2px;
  margin-top: -4px;
  font-size: 14px;
  text-transform: capitalize;
  color: rgba(255, 203, 5, 1);
  min-width: 22px;
  max-width: 180px;
  text-align: right;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;

const progressFill = finalWidth => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${finalWidth}%;
  }
`;

export const Progress = styled.div`
  width: ${({ value }) => (value > 100 ? 100 : value) || 0}%;
  height: 100%;
  background: linear-gradient(340deg,rgba(103,159,213,1) 20%,rgba(255,203,5,1) 50%,rgba(103,159,213,1) 90%);
  background-size: 240px;
  animation: ${({ width }) => progressFill(width)} 400ms ease-in-out;
  border-radius: 3px;
`;

export const ProgressBar = styled.div`
  width: 140px;
  height: 8px;
  border: 1px solid #679fd5;
  border-radius: 4px;
  margin-right: 8px;
`;

export const EvolutionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EvolutionRow = styled.div`
  display: flex;
  flex-direction: row;
`;
