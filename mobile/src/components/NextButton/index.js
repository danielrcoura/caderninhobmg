import React from 'react';

import { Container, ButtonText } from './styles';

const NextButton = ({ navigator, to }) => {
  return (
    <Container>
      <ButtonText onPress={() => navigator.navigate(to)}>PRÓXIMO</ButtonText>
    </Container>
  );
};

export default NextButton;
