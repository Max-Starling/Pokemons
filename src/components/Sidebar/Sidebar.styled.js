import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  position: relative;
  width: 0;
  height: 0;
  z-index: 3000;
`;

export const OverlayContainer = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;
  width: 0;
  height: 0;
`;

export const Overlay = styled.div`
  position: fixed;
  background: black;
  opacity: 0.3;
  visibility: visible;
  width: 100vw;
  height: 100vh;
  transition: visibility 200ms ease-in-out, opacity 200ms ease-in-out;
  opacity: ${({ isVisible }) => isVisible ? 0.5 : 0};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
`;

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 3000;
  height: 100vh;
  left: 0;
  top: 0;
  width: 320px;
  width: ${({ isVisible }) => isVisible ?  320 : 0}px;
  overflow: auto;
  background-color: #f9f9f9;
  transition: width 200ms ease-in-out;
`;

export const Header = styled.div`
  position: relative;
  height: 60px;
  /* box-shadow: 0 0 10px rgba(0,0,0,0.5), inset -20px -19px 5em 0px #eeeeee; */
  box-shadow: 0 0 6px rgba(29, 109, 187, 0.76), inset -20px -19px 5em 0px #eeeeee;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// export const CloseButton = styled.div`
//    position: absolute;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 80px;
//   cursor: pointer;
// `;

export const Icon = styled.img`
  cursor: pointer;
  width: 82px;
  height: 100%;
  padding: 16px 30px 16px 24px;
  visibility: ${({ src }) => src ? 'unset' : 'hidden'};
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

export const Menu = styled.div`
  width: 100%;
  padding: 16px 0;
`;

export const MenuItem = styled.div`
  padding: 14px 24px;
  font-size: 18px;
  /* border-bottom: 1px solid #e6e6e6; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
`;

export const MenuItemTitle = styled.span`
  line-height: 1.6;
  background: linear-gradient(140deg,rgba(103,159,213,1) 36%,rgba(255,203,5,0.9) 85%);
  /* background: linear-gradient(310deg, rgba(103,159,213,1) 26%, rgba(255,203,5,1) 52%, rgba(103,159,213,1) 86%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
