import React from 'react';
import { Linking, Text, Pressable, TextProps } from 'react-native';

type ExternalLinkProps = TextProps & {
  url: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ url, children, ...props }) => {
  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.warn(`Don't know how to open URL: ${url}`);
      }
    } catch (error) {
      console.warn('An error occurred while trying to open the URL:', error);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Text {...props} style={[{ color: '#3B82F6' }, props.style]}>{children}</Text>
    </Pressable>
  );
};