import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
  /* z-index: 5000; */
`;

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100vw;
  background-color: #fff;
  /* box-shadow: 0 0 10px rgba(0,0,0,0.5), inset -20px -19px 5em 0px #eeeeee; */
  box-shadow: 0 0 6px rgba(29, 109, 187, 0.76), inset -20px -19px 5em 0px #eeeeee;
`;

export const Title = styled.p`
  margin-top: 15px;
  font-size: 26px;
  color: #679fd5;
  background: linear-gradient(140deg,rgba(103,159,213,1) 36%,rgba(255,203,5,0.9) 85%);
  /* background: linear-gradient(310deg, rgba(103,159,213,1) 26%, rgba(255,203,5,1) 52%, rgba(103,159,213,1) 86%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 82px;
  height: 100%;
  padding: 16px 30px 16px 24px;
  visibility: ${({ src }) => src ? 'unset' : 'hidden'}
`;
