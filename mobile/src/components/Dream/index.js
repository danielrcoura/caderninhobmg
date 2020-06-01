import React, { useState } from 'react';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, DreamBackground, DreamText } from './styles';

const Dream = ({ onPress, icon, name, dreamDescription, iconSize = 40 }) => {
  return (
    <Container>
      <DreamText>{name}</DreamText>
      <DreamBackground onPress={onPress}>
        <Icon name={icon} size={iconSize} color="#979797" />
      </DreamBackground>
    </Container>
  )
}

export default Dream;
