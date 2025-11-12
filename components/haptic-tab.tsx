import React from 'react';
import { Pressable, ViewStyle, StyleProp, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

type HapticTabProps = {
  onPress?: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const HapticTab: React.FC<HapticTabProps> = ({ onPress, children, style }) => {
  const handlePress = async () => {
    // Haptic faqat Android yoki iOS da ishlaydi, webda emas
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (e) {
        console.log('Haptic feedback not supported:', e);
      }
    }

    if (onPress) onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};
