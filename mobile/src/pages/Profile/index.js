import React from 'react';

import {Container} from './styles';
import Header from '../../components/Header';

const Profile = ({navigator}) => {
  return (
    <Container>
      <Header navigator={navigator} />
    </Container>
  );
};

export default Profile;
