
import React, { useState } from "react";
import { connect } from 'react-redux';

import Header from "components/Header";
import { Children, Background } from './Layout.styled';

const Layout = ({ children }) => {
  return(
    <>
      <Header />
      <Background />
      <Children>
        {children}
      </Children>
    </>
  );
}

export default Layout;