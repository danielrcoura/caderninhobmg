import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const JourneymanContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const JourneymanText = styled.Text`
  text-align: center;
  font-family: 'Roboto';
  font-size: 24px;
  color: #fff;
  width: 56%;
`;

export const JourneymanSubText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Montserrat-Bold';
  margin: 5px 0;
`;

export const TextWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DreamsContainer = styled.View`
  margin-bottom: 40px;
`;

export const DreamRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const NextButtonContainer = styled.View`
  margin: 0 10px;
`;
