import React from 'react';
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { Container } from './styles';

const HelpButton = ({ navigator }) => {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => navigator.navigate('help')} >
        <Icon name="help" size={30} color="#F47A20" />
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default HelpButton;
