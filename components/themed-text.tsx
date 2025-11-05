import React from 'react';
import { Text, TextProps } from 'react-native';

type ThemedTextProps = TextProps & {
  type?: 'title' | 'defaultSemiBold' | 'link';
};

export const ThemedText: React.FC<ThemedTextProps> = ({ type, style, children, ...props }) => {
  let textStyle = {};
  if (type === 'title') textStyle = { fontSize: 24, fontWeight: 'bold' };
  if (type === 'defaultSemiBold') textStyle = { fontWeight: '600' };
  if (type === 'link') textStyle = { color: '#1e90ff' };

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};