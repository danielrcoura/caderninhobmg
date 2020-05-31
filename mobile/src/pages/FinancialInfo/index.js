import React, {useState} from 'react';

import {StatusBar} from 'react-native';

import {
  Container,
  FormView,
  InputView,
  InputLabel,
  SubmitButton,
  SubmitButtonContainer,
  SubmitButtonText,
} from './styles';
import Input from '../../components/Input';

import Header from '../../components/Header';

const FinancialInfo = ({navigation}) => {
  function handleSubmit() {}

  return (
    <Container colors={['#F99D1C', '#F47920']}>
      <Header pageTitle="JORNADA" navigator={navigation} />
      <StatusBar backgroundColor="#F99D1C" />
      <FormView>
        <InputView>
          <InputLabel>Quanto você ganha por mês?</InputLabel>
          <Input
            icon="mail"
            placeholder="Diga-nos quanto"
            onChangeText={(text) => setEmail(text.trim())}
          />
        </InputView>

        <InputView>
          <InputLabel>E quanto pretende poupar?</InputLabel>
          <Input
            icon="lock"
            secureTextEntry
            placeholder="Insira um valor"
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

export default FinancialInfo;
