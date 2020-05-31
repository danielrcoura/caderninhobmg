import React from 'react';
import {StatusBar} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {
  Container,
  ItemContainer,
  ChartContainer,
  ChartContent,
  ChartText,
  ItemTitle,
  LegendContainer,
  LegendItemColor,
  LegendItem,
  LegendItemDesc,
  LegendItemValue,
  TextAproximation,
  TextAproximationValue,
  ItemsListArea,
} from './styles';

import Header from '../../components/HeaderDashboard';
import HelpButton from '../../components/HelpButton';

const dataAPI = {
  pieData: [
    {
      value: 40,
      key: 1,
      svg: {
        fill: '#54F078',
      },
    },

    {
      value: 45,
      key: 2,
      svg: {
        fill: '#705CA7',
      },
    },
    {
      value: 30,
      key: 3,
      svg: {
        fill: '#FABA62',
      },
    },
  ],
  progressData: [
    {
      value: 65,
      key: 2,
      svg: {
        fill: '#F47A20',
      },
    },
    {
      value: 35,
      key: 3,
      svg: {
        fill: '#FEF2E9',
      },
    },
  ],
};
const Dashboard = ({ navigation }) => {
  return (
    <Container>
      <StatusBar backgroundColor="#f47a20" />
      <Header name="João Victor" navigator={navigation} />
      <ItemsListArea>
        <ItemContainer>
          <ItemTitle>Seus Gastos</ItemTitle>
          <ChartContainer>
            <PieChart
              style={{height: 150}}
              data={dataAPI.pieData}
              innerRadius="90%"
              padAngle={0}>
              <ChartContent>
                <ChartText>R$ 1.000,00</ChartText>
              </ChartContent>
            </PieChart>
          </ChartContainer>
          <LegendContainer>
            <LegendItem>
              <LegendItemColor color="#54F078" />
              <LegendItemDesc>Meta de gastos:</LegendItemDesc>
              <LegendItemValue>R$ 700,00</LegendItemValue>
            </LegendItem>
            <LegendItem>
              <LegendItemColor color="#705CA7" />
              <LegendItemDesc>Gasto no mês:</LegendItemDesc>
              <LegendItemValue>R$ 450,00</LegendItemValue>
            </LegendItem>
            <LegendItem>
              <LegendItemColor color="#FABA62" />
              <LegendItemDesc>Total disponível</LegendItemDesc>
              <LegendItemValue>R$ 1000,00</LegendItemValue>
            </LegendItem>
          </LegendContainer>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Seu Progresso</ItemTitle>
          <ChartContainer>
            <PieChart
              style={{height: 150}}
              data={dataAPI.progressData}
              innerRadius="90%"
              padAngle={0}>
              <ChartContent>
                <ChartText>65% Concluído</ChartText>
              </ChartContent>
            </PieChart>
          </ChartContainer>
          <TextAproximation>
            Viagem para Porto Seguro estará disponível em aproximadamente:
          </TextAproximation>
          <TextAproximationValue>3 MÊSES</TextAproximationValue>
        </ItemContainer>
      </ItemsListArea>
      <HelpButton navigator={navigation} />
    </Container>
  );
};

export default Dashboard;
