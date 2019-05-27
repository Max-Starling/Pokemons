import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Sidebar from 'components/Sidebar';
import backIcon from 'assets/back4.png';
import menuIcon from 'assets/menu5.png';
import {
  fetchPokemon,
} from 'resources/pokemon';
import {
  Container,
  HeaderContainer,
  Title,
  Icon,
} from './Header.styled';

const tabs = [
  {
    path: '/pokemons',
    title: 'Pokemons',
  },
];

const ConditionalLink = ({ children, to }) => to
  ? <Link to={to} style={{ height: '100%' }}>{children}</Link>
  : <>{children}</>;

const Header = ({
  location,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tabTitle, setTabTitle] = useState('');
  const [backPath, setBackPath] = useState('');
  const [isPathChecked, setIsPathChecked] = useState(false);

  const checkPath = () => {    const currentTab = tabs.find(item => item.path === location.pathname);
    setTabTitle(currentTab ? currentTab.title : tabs[0].title);
    if (/\/[0-9]+/.test(location.pathname)) {
      setBackPath(location.pathname.replace(/\/[0-9]+/, ''));
    } else {
      setBackPath('');
    }
    setIsPathChecked(true);
  }

  useEffect(() => {
    // setTabTitle(getTabTitle(location.pathname));
    checkPath();
  }, [checkPath]);

  const toggleSidebarVisibility = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container>
      <HeaderContainer>
        {
          isPathChecked &&
            <ConditionalLink to={backPath}>
              <Icon
                role="presentation"
                onClick={backPath ? null : toggleSidebarVisibility}
                src={backPath ? backIcon : menuIcon}
              />
            </ConditionalLink>
        }
        <Title>
          {tabTitle}
        </Title>
        <Icon />
      </HeaderContainer>
      <Sidebar
        toggleVisibility={toggleSidebarVisibility}
        isVisible={isSidebarOpen}
      />
    </Container>
  )
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchPokemon,
};

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux, withRouter)(Header);
