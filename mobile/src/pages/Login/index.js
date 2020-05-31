import React, { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import {
  Image,
  StatusBar,
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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleLogIn = async () => {
    //console.log('|' + email + '|', '|' + password + '|')

    try {
      await signIn({
        email,
        password,
      });

      navigation.push('dashboard');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container colors={['#F99D1C', '#F47920']}>
      <StatusBar backgroundColor="#F99D1C" />
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
            placeholder="Insira sua senha"
            onChangeText={(text) => setPassword(text.trim())}
          />
        </InputView>

        <SignInButtonContainer>
          <SignInButton onPress={handleLogIn}>
            <SignInButtonText>ENTRAR</SignInButtonText>
          </SignInButton>
        </SignInButtonContainer>
      </FormView>

      <SingUpButton>
        <SingUpButtonText>Cadastre-se</SingUpButtonText>
      </SingUpButton>
    </Container>
  );
};

export default Login;
