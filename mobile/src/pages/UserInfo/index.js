import React, { useState } from 'react';
import api from '../../services/api';
import { StatusBar } from 'react-native'

import {
  Container,
  FormView,
  InputView,
  InputLabel,
  SubmitButton,
  SubmitButtonContainer,
  SubmitButtonText
} from './styles'
import Input from '../../components/Input';

const UserInfo = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    try{
      await api.post('/users', {
        name,
        email,
        password
      })
      navigation.navigate('login')
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <Container colors={['#F99D1C', '#F47920']}>
      <StatusBar backgroundColor="#F99D1C" />
      <FormView>
        <InputView>
          <InputLabel>Nos diga seu nome</InputLabel>
          <Input
            icon="mail"
            placeholder="Digite seu nome"
            onChangeText={(text) => setName(text.trim())}
          />
        </InputView>

        <InputView>
          <InputLabel>Seu e-mail...</InputLabel>
          <Input
            icon="mail"
            placeholder="Insira seu email"
            onChangeText={(text) => setEmail(text.trim())}
          />
        </InputView>

        <InputView>
          <InputLabel>E agora a senha</InputLabel>
          <Input
            icon="lock"
            secureTextEntry
            placeholder="Insira uma senha"
            onChangeText={(text) => setPassword(text.trim())}
          />
        </InputView>

        <SubmitButtonContainer>
          <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>CADASTRAR-SE</SubmitButtonText>
          </SubmitButton>
        </SubmitButtonContainer>
      </FormView>
    </Container>
  );
};

export default UserInfo;
