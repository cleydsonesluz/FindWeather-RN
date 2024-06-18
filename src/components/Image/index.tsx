import React from 'react';
import {IImageProps} from './interface';
import {Container} from './styles';

export function Image({src, height, width}: IImageProps) {
  return <Container source={src} height={height} width={width} />;
}
