import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  padding: 60px 0 60px 0;
  flex: 1;
  align-items: center;
  justify-content: space-between;
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

export const SignInButtonContainer = styled.View`
  margin: 40px 10px 12px 10px;
`;

export const SignInButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 55px;
  background: #fff;
  border-radius: 10px;
  elevation: 5;
`;

export const SignInButtonText = styled.Text`
  font-family: 'Roboto';
  letter-spacing: 2px;
  color: #F5801F;
  margin: auto;
  font-size: 20px;
`;

export const SingUpButton = styled.TouchableOpacity``;

export const SingUpButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Roboto'
`;
