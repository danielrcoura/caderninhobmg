import styled from 'styled-components/native';

export const ItemsListArea = styled.ScrollView`
  flex: 1;
  background: #fff;
`;
export const ItemTitle = styled.Text`
  color: #f47a20;
  font-family: 'Montserrat-Medium';
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;
export const ItemContainer = styled.View`
  margin: 10px 12px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  elevation: 5;
`;
export const ChartContainer = styled.View`
  margin: 20px 0;
`;
export const ChartText = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: #f47a20;
`;
export const ChartContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: 0 auto;
`;
export const LegendContainer = styled.View`
  display: flex;
  margin: 10px 20px;
`;
export const LegendItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
  background: #f47a20;
  padding: 7px 10px;
  border-radius: 5px;
`;
export const LegendItemColor = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background: ${(props) => props.color};
`;
export const LegendItemDesc = styled.Text`
  margin-left: 13px;
  font-size: 16px;
  font-family: 'Montserrat-Medium';
  color: #fff;
`;
export const LegendItemValue = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: #fff;
  margin-left: auto;
`;
export const TextAproximation = styled.Text`
  margin: 0 20px;
  font-size: 16px;
  text-align: center;
  color: #f47a20;
  font-family: 'Montserrat-Medium';
`;
export const TextAproximationValue = styled.Text`
  margin: 15px auto;
  color: #f47a20;
  font-size: 20px;
  font-family: 'Montserrat-Bold';
`;

export const Container = styled.View`
  flex: 1;
`;
