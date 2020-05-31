import styled from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  width: 100%;
  background: #f47a20;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const BackButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-left: 10px;
`;
export const BackText = styled.Text`
  font-family: 'Roboto';
  color: #fff;
`;
export const TitleContainer = styled.View`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PageTitle = styled.Text`
  font-family: 'Roboto';
  color: #fff;
  font-size: 36px;
  font-weight: 700;
`;
