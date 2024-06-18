import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../../theme';
import {IButtonProps} from './interface';

export const Container = styled(RectButton)<IButtonProps>`
  width: ${(props: any) => (props.width ? props?.width : '100%')};
  height: ${(props: any) => (props.height ? props?.height : '54px')};
  background: ${(props: any) =>
    props.background ? props?.background : theme?.colors?.dark_300};
  border-width: 1px;
  border-radius: ${(props: any) =>
    props.borderRadius ? props?.borderRadius : '50px'};
  border-color: ${(props: any) =>
    props.borderColor ? props?.borderColor : theme?.colors?.gray_300};
  padding: ${(props: any) =>
    props.fontFpaddingamily ? props?.padding : '0px 0px 0px 0px'};
`;
