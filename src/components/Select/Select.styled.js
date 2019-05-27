import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  width: 100%;
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 42px;
  background: #fff;
  background: linear-gradient(340deg,rgba(103,159,213,1) 20%,rgba(255,203,5,1) 50%,rgba(103,159,213,1) 90%);
  padding: 2px;

  &:focus {
    outline: none;
  }
`;

export const OptionsContainer = styled.div`
  position: relative;
  height: 0;
  margin: 0;
`;

export const Options = styled.ul`
  position: absolute;
  margin: 10px auto;
  padding-left: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background: #fff;
  border-radius: inherit;
  border: 1px solid #eaeaea;
  border-bottom: 0;
  box-shadow: 0 2px 2px 0 rgba(150, 150, 150, 0.5);
  list-style: none;
  height: 256px;
  overflow-y: scroll;
`;

export const OptionContainer= styled.li``;

export const DefaultOptionContainer = styled.div`
  background: rgba(255,255,255,0.9);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const DefaultOption = styled.div`
  outline: none;
  background: transparent;
  width: 100%;
  border-radius: 3px;

  &:hover {
    background-color: transparent;
  }
`;

export const DefaultOptionText = styled.p`
  font-size: 14px;
  word-break: break-all;
  text-overflow: ellipsis;
  margin-top: -6px;
  margin-bottom: 0;
  color: rgba(103, 159, 213, 1);
`;

export const SelectOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 1000;
  outline: none;
`;

export const Arrow = styled.img`
  width: 9px;
  height: 5px;
  position: relative;
  transform: ${({ isOpen}) => isOpen ? 'rotate(180deg) ': 'unset'};
`;
