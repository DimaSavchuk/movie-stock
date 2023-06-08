import React from 'react';

import { LoadingStyled, Spinner, Text } from './Loading.styled';

const Loading = () => {
  return (
    <LoadingStyled>
      <Spinner />
      <Text>Loading...</Text>
    </LoadingStyled>
  );
};

export default Loading;
