import styled from 'styled-components/native';
import theme from '../../theme';
import {ILabelProps} from './interface';

export const Container = styled.Text<ILabelProps>`
  color: ${(props: any) => (props.color ? props?.color : theme?.colors?.dark)};
  font-size: ${(props: any) => (props.fontSize ? props?.fontSize : '18px')};
  font-family: ${(props: any) =>
    props.fontFamily ? props?.fontFamily : theme.fonts.Regular};
`;
