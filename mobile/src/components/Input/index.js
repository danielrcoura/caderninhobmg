import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextInput } from './styles';

const Input = ({ icon, ...props }) => {
  return (
    <Container>
      <TextInput
        placeholderTextColor="#979797"
        {...props}
      />

      <Icon name={icon} size={26} color="#979797" />
    </Container>
  )
};

export default Input;
