import React from 'react';
import { Text, TextStyle } from 'react-native';

type IconSymbolProps = {
  name: string; // ikon nomi
  size?: number;
  color?: string;
  style?: TextStyle;
};

// Oddiy map orqali nomlarni emoji yoki belgilar bilan bog'lash
const iconMap: Record<string, string> = {
  'house.fill': '🏠',
  'paperplane.fill': '📤',
  'search': '🔍',
  'wrench': '🔧',
  'user': '👤',
  'bell': '🔔',
  'shield': '🛡️',
  'logout': '🚪',
};

export const IconSymbol: React.FC<IconSymbolProps> = ({
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  const iconChar = iconMap[name] || '❓';
  return (
    <Text style={[{ fontSize: size, color }, style]}>
      {iconChar}
    </Text>
  );
};