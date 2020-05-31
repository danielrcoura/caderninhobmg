import React from 'react';

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

const UserInfo = () => {
  function handleSubmit() {

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
            onChangeText={(text) => setEmail(text.trim())}
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
            <SubmitButtonText>SUBMETER</SubmitButtonText>
          </SubmitButton>
        </SubmitButtonContainer>
      </FormView>
    </Container>
  );
};

export default UserInfo;
