import React, { useState } from 'react';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, DreamBackground, DreamText } from './styles';

const Dream = ({ navigation, icon, name, dreamDescription, iconSize = 40 }) => {
  async function handleDreamSelection() {
    // await api.post('/journey', {

    // });
    // navigation.navigate('dashboard');
  }

  return (
    <Container>
      <DreamText>{name}</DreamText>
      <DreamBackground onPress={handleDreamSelection}>
        <Icon name={icon} size={iconSize} color="#979797" />
      </DreamBackground>
    </Container>
  )
}

export default Dream;
