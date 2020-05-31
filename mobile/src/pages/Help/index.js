import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Help = ({ navigation }) => {
  return (
    <Container>
      <Header navigator={navigation} />
    </Container>
  );
};

export default Help;
