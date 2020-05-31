import styled from 'styled-components/native';

export const Container = styled.View`
  height: 75px;
  width: 100%;
  background: #f47a20;
  z-index: 5;
`;
export const IconBMG = styled.Image`
  width: 68px;
  height: 26px;
`;
export const Content = styled.View`
  margin: 0 10px;
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HelloText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Montserrat-Medium';
`;
export const BtnText = styled.Text`
  color: #fff;
  font-family: 'Montserrat-Medium';
`;
export const ProfileBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;
