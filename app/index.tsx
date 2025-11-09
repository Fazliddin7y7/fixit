// index.tsx
import { registerRootComponent } from 'expo';
import App from './(tabs)/App';
import 'nativewind';

// Expo web va native uchun root componentni ro'yxatdan o'tkazamiz
registerRootComponent(App);