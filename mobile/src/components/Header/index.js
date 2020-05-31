import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container, BackButton, BackText, LogoContainer, Logo} from './styles';
import logo from '../../assets/images/logoHeaderWhite.png';

const Header = ({ navigator }) => {
  return (
    <Container>
      <BackButton onPress={() => navigator.goBack()}>
        <Icon name="arrowleft" color="#fff" size={25} />
        <BackText>Voltar</BackText>
      </BackButton>
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
    </Container>
  );
};

export default Header;
