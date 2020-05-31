import React from 'react';
import {StatusBar} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {
  Container,
  Title,
  TitleContainer,
  CostSplit,
  ItemTitle,
  LastCostList,
  LegendContainer,
  LegendItem,
  LegendItemColor,
  LegendItemDesc,
  LegendItemValue,
  ChartContainer,
  ChartContent,
  ChartText,
  CostListItem,
  CostListItemDesc,
  CostListItemValue,
  CostListContent,
  BtnEdit,
  BtnText,
  ListItensContainer,
} from './styles';
import Header from '../../components/Header';

const dataAPI = {
  user: {
    name: 'João Victor',
  },
  lastCosts: [
    {
      id: 1,
      description: 'Padaria da ana',
      value: 'R$ 50',
    },
    {
      id: 2,
      description: 'Mercadinho da esquina',
      value: 'R$ 100',
    },
    {
      id: 3,
      description: 'Padaria da ana',
      value: 'R$ 50',
    },
    {
      id: 4,
      description: 'Mercadinho da esquina',
      value: 'R$ 50',
    },
    {
      id: 5,
      description: 'Padaria da ana',
      value: 'R$ 50',
    },
  ],
  pieData: [
    {
      value: 10,
      key: 1,
      svg: {
        fill: '#54F078',
      },
    },
    {
      value: 20,
      key: 2,
      svg: {
        fill: '#26C4E0',
      },
    },
    {
      value: 70,
      key: 3,
      svg: {
        fill: '#705CA7',
      },
    },
  ],
};

const Profile = ({navigation}) => {
  return (
    <Container>
      <StatusBar backgroundColor="#E3711D" />
      <Header navigator={navigation} />
      <ListItensContainer>
        <TitleContainer>
          <Title>Olá {dataAPI.user.name}, esta é a sua central de gastos</Title>
        </TitleContainer>
        <CostSplit>
          <ItemTitle>Divisão de gastos</ItemTitle>
          <ChartContainer>
            <PieChart
              style={{height: 150}}
              data={dataAPI.pieData}
              innerRadius="90%"
              padAngle={0}>
              <ChartContent>
                <ChartText>Viagem para Porto Seguro</ChartText>
              </ChartContent>
            </PieChart>
          </ChartContainer>
          <LegendContainer>
            <LegendItem>
              <LegendItemColor color="#54F078" />
              <LegendItemDesc>Sua Jornada:</LegendItemDesc>
              <LegendItemValue>10%</LegendItemValue>
            </LegendItem>
            <LegendItem>
              <LegendItemColor color="#26C4E0" />
              <LegendItemDesc>Fundo emergencial:</LegendItemDesc>
              <LegendItemValue>20%</LegendItemValue>
            </LegendItem>
            <LegendItem>
              <LegendItemColor color="#705CA7" />
              <LegendItemDesc>Custos fixos:</LegendItemDesc>
              <LegendItemValue>70%</LegendItemValue>
            </LegendItem>
          </LegendContainer>
          <BtnEdit>
            <BtnText>EDITAR</BtnText>
          </BtnEdit>
        </CostSplit>
        <LastCostList>
          <ItemTitle>Últimos gastos</ItemTitle>
          <CostListContent>
            {dataAPI.lastCosts.map((item) => (
              <CostListItem key={item.id}>
                <CostListItemDesc>{item.description}</CostListItemDesc>
                <CostListItemValue>{item.value}</CostListItemValue>
              </CostListItem>
            ))}
          </CostListContent>
        </LastCostList>
      </ListItensContainer>
    </Container>
  );
};

export default Profile;
