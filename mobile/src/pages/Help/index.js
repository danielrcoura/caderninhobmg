import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import gifExample from '../../assets/images/1.jpg';

import {
  Container,
  ScrollContainer,
  ItensContainer,
  ItemHeader,
  ItemColapsed,
  ItemTitle,
  ItemContent,
  GifTuto,
  TextTutoContainer,
  TextTutoItem,
} from './styles';

const Help = ({navigation}) => {
  const [usedSection, setUsedSection] = useState({});
  return (
    <Container>
      <StatusBar backgroundColor="#f47a20" />
      <Header
        name={name}
        navigator={navigation}
        pageTitle="Ajuda"
      />
      <ScrollContainer>
        <ItensContainer>
          <ItemColapsed>
            <ItemHeader onPress={() => setUsedSection({id: 1})}>
              <ItemTitle>Como vejo minhas jornadas ?</ItemTitle>
              <Icon name="plus" size={25} color="#f47a20" />
            </ItemHeader>
            <Collapsible collapsed={usedSection.id !== 1}>
              <ItemContent>
                <GifTuto source={gifExample} />
                <TextTutoContainer>
                  <TextTutoItem>
                    1- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                  <TextTutoItem>
                    2- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                  <TextTutoItem>
                    3- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                </TextTutoContainer>
              </ItemContent>
            </Collapsible>
          </ItemColapsed>
          <ItemColapsed>
            <ItemHeader onPress={() => setUsedSection({id: 2})}>
              <ItemTitle>Como vejo minhas jornadas ?</ItemTitle>
              <Icon name="plus" size={25} color="#f47a20" />
            </ItemHeader>
            <Collapsible collapsed={usedSection.id !== 2}>
              <ItemContent>
                <GifTuto source={gifExample} />
                <TextTutoContainer>
                  <TextTutoItem>
                    1- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                  <TextTutoItem>
                    2- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                  <TextTutoItem>
                    3- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                </TextTutoContainer>
              </ItemContent>
            </Collapsible>
          </ItemColapsed>
          <ItemColapsed>
            <ItemHeader onPress={() => setUsedSection({id: 3})}>
              <ItemTitle>Como vejo minhas jornadas ?</ItemTitle>
              <Icon name="plus" size={25} color="#f47a20" />
            </ItemHeader>
            <Collapsible collapsed={usedSection.id !== 3}>
              <ItemContent>
                <GifTuto source={gifExample} />
                <TextTutoContainer>
                  <TextTutoItem>
                    1- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                  <TextTutoItem>
                    2- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                  <TextTutoItem>
                    3- Clique em perfil na parte de cima do menu
                  </TextTutoItem>
                </TextTutoContainer>
              </ItemContent>
            </Collapsible>
          </ItemColapsed>
        </ItensContainer>
      </ScrollContainer>
    </Container>
  );
};

export default Help;
