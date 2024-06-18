import React from 'react';
import {IButtonProps} from './interface';
import {Container} from './styles';

export function Button({
  children,
  background,
  borderColor,
  borderRadius,
  borderWidth,
  height,
  padding,
  width,
}: IButtonProps) {
  return (
    <Container
      background={background}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      height={height}
      width={width}
      padding={padding}>
      {children}
    </Container>
  );
}
