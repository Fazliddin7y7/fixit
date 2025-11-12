import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      {/* Asosiy tabs guruhi */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      {/* Modal sahifa */}
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          title: 'Modal',
        }}
      />
    </Stack>
  );
}
