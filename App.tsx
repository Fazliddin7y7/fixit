import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { SignupScreen } from './components/SignupScreen';
import { HomeScreen } from './components/HomeScreen';
import { SearchFilterScreen } from './components/SearchFilterScreen';
import { UstaProfileScreen } from './components/UstaProfileScreen';
import { ChatScreen } from './components/ChatScreen';
import { UserDashboard } from './components/UserDashboard';
import { UstaDashboard } from './components/UstaDashboard';
import { CustomerProfileScreen } from './components/CustomerProfileScreen';

type Screen = 
  | 'welcome' 
  | 'login' 
  | 'signup' 
  | 'home' 
  | 'search' 
  | 'ustaProfile'
  | 'chat' 
  | 'userDashboard' 
  | 'customerProfile'
  | 'ustaDashboard';

type UserRole = 'customer' | 'professional' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleSignup = (role: UserRole) => {
    setUserRole(role);
    if (role === 'professional') {
      setCurrentScreen('ustaDashboard');
    } else {
      setCurrentScreen('home');
    }
  };

  const handleLogin = () => {
    // For demo, default to customer role
    setUserRole('customer');
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen 
            onGetStarted={() => setCurrentScreen('signup')}
          />
        );
      
      case 'login':
        return (
          <LoginScreen 
            onBack={() => setCurrentScreen('welcome')}
            onLogin={handleLogin}
            onSignup={() => setCurrentScreen('signup')}
          />
        );
      
      case 'signup':
        return (
          <SignupScreen 
            onBack={() => setCurrentScreen('login')}
            onSignup={handleSignup}
          />
        );
      
      case 'home':
        return (
          <HomeScreen 
            onCategoryClick={(category) => setCurrentScreen('search')}
            onSearchClick={() => setCurrentScreen('search')}
            onOrdersClick={() => setCurrentScreen('userDashboard')}
            onProfileClick={() => setCurrentScreen('customerProfile')}
            currentTab="home"
          />
        );
      
      case 'search':
        return (
          <SearchFilterScreen 
            onBack={() => setCurrentScreen('home')}
            onSelectUsta={(id) => setCurrentScreen('ustaProfile')}
            onHomeClick={() => setCurrentScreen('home')}
            onOrdersClick={() => setCurrentScreen('userDashboard')}
            onProfileClick={() => setCurrentScreen('customerProfile')}
          />
        );
      
      case 'ustaProfile':
        return (
          <UstaProfileScreen 
            onBack={() => setCurrentScreen('search')}
            onBooking={() => setCurrentScreen('userDashboard')}
            onChat={() => setCurrentScreen('chat')}
          />
        );
      
      case 'chat':
        return (
          <ChatScreen 
            onBack={() => setCurrentScreen('ustaProfile')}
          />
        );
      
      case 'userDashboard':
        return (
          <UserDashboard 
            onBack={() => setCurrentScreen('home')}
            onHomeClick={() => setCurrentScreen('home')}
            onSearchClick={() => setCurrentScreen('search')}
            onProfileClick={() => setCurrentScreen('customerProfile')}
          />
        );
      
      case 'customerProfile':
        return (
          <CustomerProfileScreen 
            onBack={() => setCurrentScreen('home')}
            onHomeClick={() => setCurrentScreen('home')}
            onSearchClick={() => setCurrentScreen('search')}
            onOrdersClick={() => setCurrentScreen('userDashboard')}
            onLogout={() => {
              setUserRole(null);
              setCurrentScreen('welcome');
            }}
          />
        );
      
      case 'ustaDashboard':
        return (
          <UstaDashboard 
            onBack={() => setCurrentScreen('welcome')}
          />
        );
      
      default:
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('signup')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-[#1a1f2e] min-h-screen relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
