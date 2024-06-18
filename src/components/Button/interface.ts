import React from 'react';

export interface IButtonProps extends React.PropsWithChildren {
  width?: string;
  height?: string;
  background?: string;
  borderWidth?: string;
  borderRadius?: string;
  borderColor?: string;
  padding?: string;
}
