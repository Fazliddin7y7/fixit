import React from 'react';
import { Linking, Text, TouchableOpacity, TextProps } from 'react-native';

type ExternalLinkProps = TextProps & {
  url: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ url, children, ...props }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text {...props}>{children}</Text>
    </TouchableOpacity>
  );
};