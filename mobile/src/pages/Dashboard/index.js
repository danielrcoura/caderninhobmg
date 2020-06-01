import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {BarChart, ProgressCircle, Grid} from 'react-native-svg-charts';
import {useAuth} from '../../hooks/auth';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
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

const Dashboard = ({navigation}) => {
  const {name, token} = useAuth();

  const [planExp, setPlanExp] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [progressData, setProgressData] = useState(0);

  async function loadData() {
    const response = await api.get('/journey', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if(!response.data) {
      navigation.navigate('financial');
    }

    setPlanExp(response.data.plannedExpenses);
    setIncome(response.data.income);
    setExpenses(response.data.currentExpenses);
    setProgressData((response.data.dreamSaved * 100) / response.data.dreamCost);
    setChartData([
      {
        value: response.data.income,
        svg: {
          fill: '#FABA62',
        },
      },
      {
        value: response.data.plannedExpenses,
        svg: {
          fill: '#54F078',
        },
      },
      {
        value: response.data.plannedExpenses,
        svg: {
          fill: '#705CA7',
        },
      },
    ]);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#f47a20" />
      <Header name={name} navigator={navigation} pageTitle="Dashboard" />
      <ItemsListArea>
        <ItemContainer>
          <ItemTitle>Seus Gastos</ItemTitle>
          <ChartContainer>
            <BarChart
              style={{height: 150}}
              data={chartData}
              gridMin={2}
              svg={{fill: 'rgba(134, 65, 244, 0.8)'}}
              yAccessor={({item}) => item.value}
              spacingInner={0.4}
              spacingOuter={0.4}
              contentInset={{top: 20, bottom: 20}}>
              <Grid />
            </BarChart>
          </ChartContainer>
          <LegendContainer>
            <LegendItem>
              <LegendItemColor color="#54F078" />
              <LegendItemDesc>Meta de gastos:</LegendItemDesc>
              <LegendItemValue>{formatValue(planExp)}</LegendItemValue>
            </LegendItem>
            <LegendItem>
              <LegendItemColor color="#705CA7" />
              <LegendItemDesc>Gasto no mês:</LegendItemDesc>
              <LegendItemValue>{formatValue(expenses)}</LegendItemValue>
            </LegendItem>
            <LegendItem>
              <LegendItemColor color="#FABA62" />
              <LegendItemDesc>Total disponível</LegendItemDesc>
              <LegendItemValue>{formatValue(income)}</LegendItemValue>
            </LegendItem>
          </LegendContainer>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Seu Progresso</ItemTitle>
          <ChartContainer>
            <ProgressCircle
              style={{height: 150}}
              progressColor="#F47A20"
              progress={progressData / 100}
              innerRadius="90%">
              <ChartContent>
                <ChartText>{progressData}% Concluído</ChartText>
              </ChartContent>
            </ProgressCircle>
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
