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
  font-family: 'Montserrat-Bold';
  color: #fff;
`;
export const LogoContainer = styled.View`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  width: 177px;
  height: 61px;
`;
