import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container, BackButton, BackText, TitleContainer, PageTitle} from './styles';

const Header = ({ navigator, pageTitle }) => {
  return (
    <Container>
      <BackButton onPress={() => navigator.goBack()}>
        <Icon name="arrowleft" color="#fff" size={25} />
        <BackText>Voltar</BackText>
      </BackButton>
      <TitleContainer>
        <PageTitle>{pageTitle}</PageTitle>
      </TitleContainer>
    </Container>
  );
};

export default Header;
