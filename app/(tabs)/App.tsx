// App.tsx
import React, { useState, useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

// LinearGradient
import { LinearGradient } from 'expo-linear-gradient';

// Barcha ekranlar import qilinadi (katta harf bilan)
import { WelcomeScreen } from './../../components/WelcomeScreen';
import { LoginScreen } from './../../components/LoginScreen';
import { SignupScreen } from './../../components/SignupScreen';
import { HomeScreen } from './../../components/HomeScreen';
import { SearchFilterScreen } from './../../components/SearchFilterScreen';
import { UstaProfileScreen } from './../../components/UstaProfileScreen';
import { ChatScreen } from './../../components/ChatScreen';
import { UserDashboard } from './../../components/UserDashboard';
import { UstaDashboard } from './../../components/UstaDashboard';
import { CustomerProfileScreen } from './../../components/CustomerProfileScreen';

// Ekran turlari
type Screen =
  | 'Welcome'
  | 'Login'
  | 'Signup'
  | 'Home'
  | 'Search'
  | 'UstaProfile'
  | 'Chat'
  | 'UserDashboard'
  | 'CustomerProfile'
  | 'UstaDashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('Welcome');

  // Animatsiya
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(20);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Welcome':
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('Signup')} />;

      case 'Login':
        return (
          <LoginScreen
            onBack={() => setCurrentScreen('Welcome')}
            onLogin={() => setCurrentScreen('Home')}
            onSignup={() => setCurrentScreen('Signup')}
          />
        );

      case 'Signup':
        return (
          <SignupScreen
            onBack={() => setCurrentScreen('Login')}
            onSignup={(role) => setCurrentScreen('Home')}
          />
        );

      case 'Home':
        return (
          <HomeScreen
            onCategoryClick={(category) => setCurrentScreen('Search')}
            onSearchClick={() => setCurrentScreen('Search')}
            onOrdersClick={() => setCurrentScreen('UserDashboard')}
            onProfileClick={() => setCurrentScreen('CustomerProfile')}
            currentTab="home"
          />
        );

      case 'Search':
        return (
          <SearchFilterScreen
            onBack={() => setCurrentScreen('Home')}
            onSelectUsta={(id) => setCurrentScreen('UstaProfile')}
            onHomeClick={() => setCurrentScreen('Home')}
            onOrdersClick={() => setCurrentScreen('UserDashboard')}
            onProfileClick={() => setCurrentScreen('CustomerProfile')}
          />
        );

      case 'UstaProfile':
        return (
          <UstaProfileScreen
            onBack={() => setCurrentScreen('Search')}
            onChat={() => setCurrentScreen('Chat')}
            onBooking={() => alert('Booking clicked!')}
          />
        );

      case 'Chat':
        return <ChatScreen onBack={() => setCurrentScreen('UstaProfile')} />;

      case 'UserDashboard':
        return (
          <UserDashboard
            onBack={() => setCurrentScreen('Home')}
            onHomeClick={() => setCurrentScreen('Home')}
            onSearchClick={() => setCurrentScreen('Search')}
            onProfileClick={() => setCurrentScreen('CustomerProfile')}
          />
        );

      case 'CustomerProfile':
        return (
          <CustomerProfileScreen
            onBack={() => setCurrentScreen('Home')}
            onHomeClick={() => setCurrentScreen('Home')}
            onSearchClick={() => setCurrentScreen('Search')}
            onOrdersClick={() => setCurrentScreen('UserDashboard')}
            onLogout={() => setCurrentScreen('Welcome')}
          />
        );

      case 'UstaDashboard':
        return <UstaDashboard onBack={() => setCurrentScreen('Welcome')} />;

      default:
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('Signup')} />;
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ flex: 1, opacity, transform: [{ translateY }] }}>
        {renderScreen()}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419',
  },
});
