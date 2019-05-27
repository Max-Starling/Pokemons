import React, { useState } from 'react';

import arrowIcon from 'assets/arrow.png';
import Option from '../option';
import {
  SelectContainer,
  SelectOverlay,
  Dropdown,
  OptionsContainer,
  Options,
  OptionContainer,
  Arrow,
  DefaultOptionContainer,
  DefaultOption,
  DefaultOptionText,
} from './Select.styled';

const Select = ({
  options,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClick = (option) => {
    toggleVisibility();
    onChange(option);
  };

  const renderOption = (option, index) => (
    <OptionContainer key={option.id || index}>
      <Option
        {...option}
        index={index}
        onClick={onOptionClick}
        isLastChild={options.length - 1 === index}
      />
    </OptionContainer>
  );

  const option = options.find(item => item.id === value) || options[value];

  return (
    <SelectContainer>
      <Dropdown
        role="button"
        tabIndex={0}
        onKeyPress={toggleVisibility}
        onClick={toggleVisibility}
      >
        <DefaultOptionContainer>
          <DefaultOption onClick={toggleVisibility}>
            <DefaultOptionText>
              {option ? option.name : ''}
            </DefaultOptionText>
          </DefaultOption>
          <Arrow
            alt="arrow"
            isOpen={isOpen}
            src={arrowIcon}
            // onClick={this.onOptionClick}
          />
        </DefaultOptionContainer>
      </Dropdown>
      {
        isOpen && (
          <>
            <OptionsContainer>
              <Options>
                {options.map(renderOption)}
              </Options>
            </OptionsContainer>
            <SelectOverlay
              role="button"
              tabIndex={0}
              onKeyPress={toggleVisibility}
              onClick={toggleVisibility}
            />
          </>
        )
      }
    </SelectContainer>
  );
};

export default Select;
