import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextInput } from './styles';

const Input = ({ icon, ...props }) => {
  return (
    <Container>
      <TextInput
        placeholderTextColor="#ffffff"
        {...props}
      />

      <Icon name={icon} size={20} color="#ffffff" />
    </Container>
  )
};

export default Input;
