import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container, BackButton, BackText} from './styles';

const Header = ({navigator}) => {
  return (
    <Container>
      <BackButton>
        <Icon name="arrowleft" color="#fff" size={25} />
        <BackText>Voltar</BackText>
      </BackButton>
    </Container>
  );
};

export default Header;
