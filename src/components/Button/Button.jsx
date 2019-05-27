import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import {
  Container,
} from './Button.styled';

const Button = ({
  children,
  onClick,
  type,
  disabled,
}) => {
  return (
    <Container
      type={type}
      autoFocus
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  clildren: null,
  type: 'button',
  disabled: false,
};

export default Button;
