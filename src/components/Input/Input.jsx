import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import {
  Container,
} from './Input.styled';

const Input = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  const onChangeValue = (e) => onChange(e.target.value);

  return (
    <Container
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      onChange={onChangeValue}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  type: 'Text',
  value: '',
};

export default Input;
