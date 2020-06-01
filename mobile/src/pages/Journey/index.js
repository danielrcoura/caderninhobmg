import React from 'react';
import { StatusBar, Image } from 'react-native';

import api from '../../services/api'

import {
  Container,
  JourneymanContainer,
  JourneymanText,
  JourneymanSubText,
  TextWrapper,
  DreamsContainer,
  DreamRow
} from './styles';

import journeymanImg from '../../assets/images/career.png';

import Header from '../../components/Header';
import Dream from '../../components/Dream';

const Journey = ({ route, navigation }) => {
  async function handleDreamSelection(dreamDescription) {
    navigation.navigate('cost', { dreamDescription, ...route.params});
  }

  return (
    <Container colors={['#f99d1c', '#f47920']}>
      <StatusBar backgroundColor="#f47920" />
      <Header
        navigator={navigation}
        pageTitle="Jornada"
      />

      <JourneymanContainer>
        <Image source={journeymanImg} />
        <JourneymanText>Nos conte um pouco sobre a sua jornada</JourneymanText>
      </JourneymanContainer>

      <JourneymanSubText>O que você deseja?</JourneymanSubText>

      <DreamsContainer>
        <DreamRow>
          <Dream
            name="Veículo"
            icon="car"
            onPress={() => handleDreamSelection("Carro Novo")}
          />
          <Dream
            name="Casa"
            icon="home"
            iconSize={50}
            onPress={() => handleDreamSelection("Um Novo Lar")}
          />
          <Dream
            name="Viagem"
            icon="plane"
            iconSize={50}
            onPress={() => handleDreamSelection("Viagem")}
          />
        </DreamRow>

        <DreamRow>
          <Dream
            name="Compras"
            icon="shopping-cart"
            iconSize={48}
            onPress={() => handleDreamSelection("Fazer Compras")}
          />
          <Dream
            name="Computador"
            icon="laptop"
            iconSize={50}
            onPress={() => handleDreamSelection("Computador Novo")}
          />
          <Dream
            name="Celular"
            icon="mobile-phone"
            iconSize={65}
            onPress={() => handleDreamSelection("Celular Novo")}
          />
        </DreamRow>
      </DreamsContainer>
    </Container>
  );
};

export default Journey;
