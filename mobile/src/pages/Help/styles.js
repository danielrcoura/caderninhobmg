import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
  background: #f99d1c;
  flex: 1;
`;
export const CollapsedHeader = styled.View`
  background: #fff;
  padding: 10px;
`;
export const CollapsedContent = styled.View``;
export const HeaderText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
export const ItensContainer = styled.View`
  padding: 10px;
`;
export const ItemHeader = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemColapsed = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
`;
export const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #f47a20;
`;
export const ItemContent = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const GifTuto = styled.Image`
  width: 130px;
  height: 265px;
`;
export const TextTutoContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 10px;
`;
export const TextTutoItem = styled.Text`
  font-size: 14px;
  color: #4f4f4f;
  margin: 10px 0;
`;
