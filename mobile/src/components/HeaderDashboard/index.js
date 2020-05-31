import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  IconBMG,
  Content,
  HelloText,
  BtnText,
  ProfileBtn,
} from './styles';
import logoBMG from '../../assets/images/bmgLogo.png';

const HeaderDashboard = ({name, navigator}) => {
  return (
    <Container>
      <Content>
        <IconBMG source={logoBMG} />
        <HelloText>Olá {name}</HelloText>
        <ProfileBtn onPress={() => navigator.push('profile')}>
          <Icon name="user" size={30} color="#fff" />
          <BtnText>Perfil</BtnText>
        </ProfileBtn>
      </Content>
    </Container>
  );
};

export default HeaderDashboard;
