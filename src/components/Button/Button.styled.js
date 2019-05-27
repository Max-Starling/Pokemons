import styled from '@emotion/styled';

export const Container = styled.button`
  height: 46px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 12px 18px;
  border: none;
  border-radius: 4px;
  font-family: 'Open Sans';
  font-size: 17px;
  line-height: 18px;
  color: #fff;
  background: rgb(104, 137, 197, 0.8);
  text-align: center;
  outline: none;
  font-weight: 500;
  margin: 8px 0;
  max-width: 400px;

  &:hover {
    background: rgb(91, 115, 184, 0.8);
    cursor: pointer;
  }

  &[disabled] {
    background: rgb(176, 191, 226, 0.8);
    cursor: default;
  }
`;
