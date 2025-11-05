import React from 'react';
import { View, ViewProps } from 'react-native';

type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export const ThemedView: React.FC<ThemedViewProps> = ({
  lightColor = '#fff',
  darkColor = '#000',
  style,
  ...props
}) => {
  return <View style={[{ backgroundColor: lightColor }, style]} {...props} />;
};