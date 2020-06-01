import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { StatusBar } from 'react-native';
import api from '../../services/api';
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
import Header from '../../components/Header';

const DreamCost = ({ route, navigation }) => {
  const [price, setPrice] = useState();
  const { dreamDescription, ammountIncome, ammountSave } = route.params;
  const { token } = useAuth();

  console.log(token);

  async function beginJourney() {
    const response = await api.post('/journey', {
      dreamDescription,
      income: ammountIncome,
      plannedExpenses: ammountSave,
      dreamCost: price,
      dreamSaved: 0,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data)

    navigation.push('dashboard');
  }

  return (
    <>
      <Header pageTitle="JORNADA" navigator={navigation} />
      <Container colors={['#F99D1C', '#F47920']}>
        <StatusBar backgroundColor="#F47920" />
        <FormView>
          <InputView>
            <InputLabel>Quanto custaria esse sonho?</InputLabel>
            <Input
              icon="mail"
              placeholder="Informe o preço"
              onChangeText={(text) => setPrice(Number.parseInt(text.trim()))}
            />
          </InputView>

          <SubmitButtonContainer>
            <SubmitButton onPress={beginJourney}>
              <SubmitButtonText>INICIAR JORNADA</SubmitButtonText>
            </SubmitButton>
          </SubmitButtonContainer>
        </FormView>
      </Container>
    </>
  );
};

export default DreamCost;
