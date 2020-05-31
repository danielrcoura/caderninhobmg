import React from 'react';
import { StatusBar, Image, View, Text } from 'react-native';

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
import NextButton from '../../components/NextButton'

const Journey = ({ navigation }) => {
  return (
    <Container colors={['#f99d1c', '#f47920']}>
      <StatusBar backgroundColor="#f47a20" />
      <Header navigator={navigation} />

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
            dreamDescription="Carro Novo"
          />
          <Dream
            name="Casa"
            icon="home"
            iconSize={50}
            dreamDescription="Um Novo Lar"
          />
          <Dream
            name="Viagem"
            icon="plane"
            iconSize={50}
            dreamDescription="Viagem"
          />
        </DreamRow>

        <DreamRow>
          <Dream
            name="Compras"
            icon="shopping-cart"
            iconSize={48}
            dreamDescription="Fazer Compras"
          />
          <Dream
            name="Computador"
            icon="laptop"
            iconSize={50}
            dreamDescription="Computador Novo"
          />
          <Dream
            name="Celular"
            icon="mobile-phone"
            iconSize={65}
            dreamDescription="Celular Novo"
          />
        </DreamRow>
      </DreamsContainer>
    </Container>
  );
};

export default Journey;
