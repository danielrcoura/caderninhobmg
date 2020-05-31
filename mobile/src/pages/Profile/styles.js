import styled from 'styled-components/native';

export const ListItensContainer = styled.ScrollView`
  flex: 1;
  background: #fff;
`;
export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Title = styled.Text`
  color: #000;
  font-family: 'Comfortaa-Regular';
  font-size: 22px;
`;
export const TitleContainer = styled.View`
  margin: 20px 30px;
`;
export const CostSplit = styled.View`
  margin: 10px 12px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  elevation: 5;
`;
export const ItemTitle = styled.Text`
  color: #f47a20;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
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
  background: #fff;
  elevation: 10;
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
  font-family: 'Roboto';
  color: #1a1a1a;
`;
export const LegendItemValue = styled.Text`
  font-size: 16px;
  font-family: 'Roboto';
  color: #fff;
  margin-left: auto;
`;
export const ChartContainer = styled.View`
  margin: 20px 0;
`;
export const ChartText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto';
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
export const LastCostList = styled.View`
  margin: 10px 12px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  elevation: 5;
`;
export const CostListItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
  background: #f47a20;
  padding: 7px 10px;
  border-radius: 5px;
`;
export const CostListItemDesc = styled.Text`
  color: #fcdfca;
  font-family: 'Roboto';
  font-size: 14px;
`;
export const CostListItemValue = styled.Text`
  color: #fff;
  font-family: 'Roboto';
  font-size: 14px;
`;
export const CostListContent = styled.View`
  display: flex;
  margin: 10px 20px;
`;
export const BtnEdit = styled.TouchableOpacity`
  background: #f47a20;
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
`;
export const BtnText = styled.Text`
  color: #fff;
  font-family: 'Roboto';
  font-size: 14px;
  letter-spacing: 3px;
`;
