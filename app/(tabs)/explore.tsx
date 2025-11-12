import { Platform, StyleSheet } from 'react-native';
import { Collapsible } from '../../components/ui/collapsible';
import { ExternalLink } from '../../components/external-link';
import ParallaxScrollView from '../../components/parallax-scroll-view';
import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';
import { IconSymbol } from '../../components/icon-symbol';
import { Fonts } from '../../constants/theme';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Explore
        </ThemedText>
      </ThemedView>

      <ThemedText>
        Bu sahifa misol tariqasida yaratilgan. Keyinchalik o‘zing o‘zgartirishing mumkin.
      </ThemedText>

      <Collapsible title="About project">
        <ThemedText>
          Expo Router sizga fayl asosida navigatsiya qilish imkonini beradi.
        </ThemedText>
        <ExternalLink url="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Batafsil o‘qish</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
