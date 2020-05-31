import React from 'react';
import {StatusBar} from 'react-native';

import {Container} from './styles';
import Header from '../../components/Header';

const Profile = ({navigator}) => {
  return (
    <Container>
      <StatusBar backgroundColor="#E3711D" />
      <Header navigator={navigator} />
    </Container>
  );
};

export default Profile;
