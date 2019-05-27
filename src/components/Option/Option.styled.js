import styled from '@emotion/styled';

export const OptionContainer = styled.div`
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  outline: none;
  border-bottom: 1px solid #e6e8ea;
  cursor: pointer;
  height: 42px;
  padding-left: 20px;
  padding-right: 18px;

  &:hover {
    background-color: '#f8f8f8';
  }

  border-bottom: ${({ isLastChild }) => isLastChild ? 0 : '1px solid #e6e8ea'};
`;

export const Text = styled.span`
  font-size: 14px;
  color: rgba(103, 159, 213, 1);
  cursor: pointer;
  font-size: 14px;
  margin-top: -6px;

  &::selection {
    background-color: transparent;
  }
`;

/* @media only screen and (max-width: 425px) {
  .option {
    &--selected {
      width: 244px;
    }
  }
} */