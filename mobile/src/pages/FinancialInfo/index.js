import React, {useState} from 'react';

import {StatusBar, View} from 'react-native';

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

const FinancialInfo = ({ navigation }) => {
  const [ammountIncome, setAmmountIncome] = useState('');
  const [ammountSave, setAmmountSave] = useState('');

  function handleSubmit() {
    navigation.push('journey', { ammountIncome, ammountSave });
  }

  return (
    <View style={{flex: 1}}>
      <Header pageTitle="JORNADA" navigator={navigation} />
      <Container colors={['#F99D1C', '#F47920']}>
        <StatusBar backgroundColor="#F47920" />
        <FormView>
          <InputView>
            <InputLabel>Quanto você ganha por mês?</InputLabel>
            <Input
              icon="briefcase"
              placeholder="Diga-nos quanto"
              onChangeText={(text) => setAmmountIncome(text.trim())}
            />
          </InputView>

          <InputView>
            <InputLabel>E quanto pretende poupar?</InputLabel>
            <Input
              icon="archive"
              placeholder="Insira um valor"
              onChangeText={(text) => setAmmountSave(text.trim())}
            />
          </InputView>

          <SubmitButtonContainer>
            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>SUBMETER</SubmitButtonText>
            </SubmitButton>
          </SubmitButtonContainer>
        </FormView>
      </Container>
    </View>
  );
};

export default FinancialInfo;
