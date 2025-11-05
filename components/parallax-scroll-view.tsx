import React from 'react';
import { ScrollView, ViewProps } from 'react-native';

type ParallaxScrollViewProps = ViewProps & {
  headerBackgroundColor?: { light: string; dark: string };
  headerImage?: React.ReactNode;
  children: React.ReactNode;
};

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  headerBackgroundColor,
  headerImage,
  children,
  ...props
}) => {
  return (
    <ScrollView {...props} style={{ flex: 1 }}>
      {headerImage}
      {children}
    </ScrollView>
  );
};

export default ParallaxScrollView;