import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, DreamBackground, DreamText } from './styles';

const Dream = ({ icon, name }) => {
  return (
    <Container>
      <DreamText>{name}</DreamText>
      <DreamBackground>
        <Icon name={icon} size={40} color="#979797" />
      </DreamBackground>
    </Container>
  )
}

export default Dream;
