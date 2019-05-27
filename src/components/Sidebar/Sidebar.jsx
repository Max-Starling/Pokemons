// import React from 'react'
import { Link, withRouter } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import closeIcon from 'assets/close5.png';
// import CloseIcon from 'static/close-icon';
import {
  Container,
  Icon,
  Title,
  Menu,
  MenuItem,
  MenuItemTitle,
  OverlayContainer,
  Overlay,
  Header,
  SidebarContainer,
} from './Sidebar.styled';


const tabs = [
  {
    path: '/pokemons',
    title: 'Pokemons',
  },
];

const Sidebar = ({
  isVisible,
  toggleVisibility,
  location,
}) => {
  const renderTab = ({ path, title }, index) => (
    <Link
      to={path}
      onClick={toggleVisibility}
      key={index}
    >
      <MenuItem isActiveTab={path === location.pathname}>
        <MenuItemTitle>
          {title}
        </MenuItemTitle>
      </MenuItem>
    </Link>
  );

  return (
    <Container>
      <OverlayContainer>
        <Overlay
          role="presentation"
          onClick={isVisible ? toggleVisibility : null}
          isVisible={isVisible}
        />
      </OverlayContainer>
      <SidebarContainer isVisible={isVisible}>
        <Header>      
          <Icon
            role="presentation"
            onClick ={toggleVisibility}
            src={closeIcon}
          />
          <Title>Menu</Title>
          <Icon src={null} />
        </Header>
        <Menu>
          {tabs.map(renderTab)}
        </Menu>
      </SidebarContainer>
    </Container>
  )
};

export default withRouter(Sidebar);