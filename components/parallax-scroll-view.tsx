import React from 'react';
import { ScrollView, View, ViewProps, StyleSheet } from 'react-native';

type ParallaxScrollViewProps = ViewProps & {
  headerBackgroundColor?: { light: string; dark: string };
  headerImage?: React.ReactNode;
  children: React.ReactNode;
};

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  headerBackgroundColor,
  headerImage,
  children,
  style,
  ...props
}) => {
  const backgroundColor =
    headerBackgroundColor?.light || 'transparent';

  return (
    <ScrollView {...props} style={[styles.scrollView, style]}>
      {headerImage ? (
        <View style={[styles.header, { backgroundColor }]}>
          {headerImage}
        </View>
      ) : null}
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  header: {
    width: '100%',
  },
});

export default ParallaxScrollView;