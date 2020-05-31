import React, {useState } from 'react';
import {
  Image,
  StatusBar,
  View,
  Text
} from 'react-native';

import {
  Container,
  FormView,
  SignInButton,
  SignInButtonContainer,
  SignInButtonText,
  SingUpButton,
  SingUpButtonText,
  InputView,
  InputLabel
} from './styles';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container colors={['#F99D1C', '#F47920']}>
      <StatusBar backgroundColor="#F99D1C" barStyle="dark-content" translucent={false} />

      <Image source={logoImg} />

      <FormView>
      <InputView>
        <InputLabel>EMAIL</InputLabel>
        <Input
          icon="mail"
          placeholder="Insira seu email"
          onChangeText={(text) => setEmail(text.trim())}
        />
      </InputView>

      <InputView>
        <InputLabel>SENHA</InputLabel>
        <Input
          icon="lock"
          secureTextEntry
          placeholder="Insira seu email"
          onChangeText={(text) => setPassword(text.trim())}
        />
      </InputView>

      <SignInButtonContainer>
        <SignInButton>
          <SignInButtonText>ENTRAR</SignInButtonText>
        </SignInButton>
      </SignInButtonContainer>
      </FormView>

      <SingUpButton><SingUpButtonText>Cadastre-se</SingUpButtonText></SingUpButton>
    </Container>
  );
};

export default Login;
