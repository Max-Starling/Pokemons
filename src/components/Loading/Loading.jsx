import React from 'react';
import spinnerImage from "assets/spinner.png";

import {
  LoadingContainer,
  Image,
} from './Loading.styled';

const Loading = () => {
  return (
    <LoadingContainer>
      <Image src={spinnerImage} />
    </LoadingContainer>
  );
};

export default Loading;
