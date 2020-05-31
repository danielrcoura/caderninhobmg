import React from 'react';
import { StatusBar } from 'react-native';
import Header from '../../components/Header';

import { Container } from './styles';

const Help = ({ navigation }) => {
  return (
    <Container>
      <StatusBar backgroundColor="#f47a20" />
      <Header navigator={navigation} />
    </Container>
  );
};

export default Help;
