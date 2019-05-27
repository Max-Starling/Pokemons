import styled from '@emotion/styled';

export const Children = styled.div`
  margin-top: 60px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: fit-content;
  padding: 15px 24px 25px;
`;

export const Background= styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url('https://pp.userapi.com/c852124/v852124214/128b60/TNQfpqTb1o8.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  opacity: 0.5;
`;
