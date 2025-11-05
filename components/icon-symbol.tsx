import React from 'react';
import { Text } from 'react-native';

type IconSymbolProps = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
};

export const IconSymbol: React.FC<IconSymbolProps> = ({ name, size = 24, color = '#000', style }) => {
  return (
    <Text style={[{ fontSize: size, color }, style]}>
      {name}
    </Text>
  );
};