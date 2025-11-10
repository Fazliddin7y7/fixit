import React from 'react';
import { Pressable } from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';

type HapticTabProps = {
  onPress?: () => void;
  children: React.ReactNode;
  style?: any;
};

export const HapticTab: React.FC<HapticTabProps> = ({ onPress, children, style }) => {
  const handlePress = () => {
    // Haptic touch effekti
    HapticFeedback.trigger('impactLight');
    if (onPress) onPress();
  };

  return (
    <Pressable onPress={handlePress} style={style}>
      {children}
    </Pressable>
  );
};