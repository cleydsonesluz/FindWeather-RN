import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background: ${theme?.colors?.dark};
`;

export const Text = styled.Text`
  font-size: 90px;
  font-family: ${theme?.fonts?.Regular};
`;

export const Session = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
