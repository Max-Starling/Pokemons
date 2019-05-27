import React from 'react';
import PropTypes from 'prop-types';

import {
  OptionContainer,
  Text,
} from './Option.styled';

const Option = ({
  index,
  id,
  name,
  onClick,
  isLastChild,
}) => {
  const onClickHandler = () => {
    onClick({
      id,
      index,
      name,
    });
  };

  return (
    <OptionContainer
      role="button"
      tabIndex={0}
      onKeyPress={onClickHandler}
      onClick={onClickHandler}
      isLastChild={isLastChild}
    >
      <Text>
        {name}
      </Text>
    </OptionContainer>
  );
};

Option.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isLastChild: PropTypes.bool,
};

Option.defaultProps = {
  id: '',
  index: 0,
  name: '',
  isLastChild: false,
};

export default Option;
