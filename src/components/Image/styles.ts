import styled from 'styled-components/native';
import {IImageProps} from './interface';

export const Container = styled.Image<IImageProps>`
  width: ${(props: IImageProps) => props?.width || 10}px;
  height: ${(props: IImageProps) => props?.height || 10}px;
  padding-top: ${(props: IImageProps) => props?.marginTop || 0}px;
  margin-bottom: ${(props: IImageProps) => props?.marginBottom || 0}px;
  margin-right: ${(props: IImageProps) => props?.marginRight || 0}px;
  margin-left: ${(props: IImageProps) => props?.marginLeft || 0}px;
`;
