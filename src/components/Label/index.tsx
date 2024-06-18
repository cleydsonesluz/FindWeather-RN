import React from 'react';
import {ILabelProps} from './interface';
import {Container} from './styles';

export function Label({color, fontFamily, fontSize, text}: ILabelProps) {
  return (
    <Container color={color} fontFamily={fontFamily} fontSize={fontSize}>
      {text}
    </Container>
  );
}
