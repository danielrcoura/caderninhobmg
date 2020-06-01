import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  padding: 60px 0;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FormView = styled.View`
  align-items: center;
`;

export const InputView = styled.View`
  margin: 0 10px 12px 10px;
`;

export const InputLabel = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 6px;
  margin-left: 11px;
`;

export const SubmitButtonContainer = styled.View`
  margin: 40px 10px 12px 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 55px;
  background: #fff;
  border-radius: 10px;
  elevation: 5;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'Roboto';
  letter-spacing: 2px;
  color: #f5801f;
  margin: auto;
  font-size: 20px;
`;
