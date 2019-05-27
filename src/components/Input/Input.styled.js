import styled from '@emotion/styled';

export const Container = styled.input`
  height: 46px;
  width: 100%;
  padding: 12px 18px;
  border: 1px solid #679fd5;
  border-radius: 4px;
  font-family: 'Open Sans';
  font-size: 17px;
  line-height: 18px;
  color: #3f58a8;
  background: rgba(255, 255, 255, 0.5);
  text-align: left;
  outline: none;
  font-weight: 500;
  margin-bottom: 8px;
  max-width: 400px;

  &::placeholder {
    color: #99c3e8;
    font-family: 'Open Sans';
    font-weight: 500;
  }
`;
