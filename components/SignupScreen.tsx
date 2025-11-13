import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface SignupScreenProps {
  onBack: () => void;
  onSignup: (role: 'customer' | 'professional') => void;
}

export  function SignupScreen({ onBack, onSignup }: SignupScreenProps) {
  const [role, setRole] = useState<'customer' | 'professional'>('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        <Animated.View style={[styles.content, { opacity, transform: [{ translateY }] }]}>
          <Text style={styles.title}>Ro‘yxatdan o‘tish</Text>
          <Text style={styles.subtitle}>Yangi akkaunt yaratish uchun ma’lumotlarni kiriting</Text>

          <View style={styles.roleContainer}>
            <TouchableOpacity
              onPress={() => setRole('customer')}
              style={[
                styles.roleButton,
                role === 'customer' ? styles.customerRoleActive : styles.roleInactive,
              ]}
            >
              <Text style={role === 'customer' ? styles.roleTextActive : styles.roleTextInactive}>
                Mijoz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRole('professional')}
              style={[
                styles.roleButton,
                role === 'professional' ? styles.professionalRoleActive : styles.roleInactive,
              ]}
            >
              <Text
                style={role === 'professional' ? styles.roleTextActive : styles.roleTextInactive}
              >
                Usta
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputsContainer}>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="account" size={20} color="#6b7280" style={styles.icon} />
              <TextInput
                placeholder="To‘liq ismingiz"
                placeholderTextColor="#6b7280"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="email" size={20} color="#6b7280" style={styles.icon} />
              <TextInput
                placeholder="Email manzilingiz"
                placeholderTextColor="#6b7280"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="phone" size={20} color="#6b7280" style={styles.icon} />
              <TextInput
                placeholder="Telefon raqamingiz"
                placeholderTextColor="#6b7280"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="lock" size={20} color="#6b7280" style={styles.icon} />
              <TextInput
                placeholder="Parol"
                placeholderTextColor="#6b7280"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onSignup(role)}
            style={[
              styles.signupButton,
              role === 'customer' ? styles.customerButton : styles.professionalButton,
            ]}
          >
            <Text style={styles.signupButtonText}>Ro‘yxatdan o‘tish</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Akkauntingiz bormi? </Text>
            <TouchableOpacity onPress={onBack}>
              <Text style={styles.loginText}>Kirish</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 8,
    zIndex: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 24,
    textAlign: 'center',
  },
  roleContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerRoleActive: {
    backgroundColor: '#3b82f6',
  },
  professionalRoleActive: {
    backgroundColor: '#f97316',
  },
  roleInactive: {
    backgroundColor: '#252b3b',
    borderWidth: 1,
    borderColor: '#374151',
  },
  roleTextActive: {
    color: 'white',
    fontWeight: '600',
  },
  roleTextInactive: {
    color: '#9ca3af',
    fontWeight: '600',
  },
  inputsContainer: {
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252b3b',
    borderColor: '#374151',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    padding: 0,
  },
  signupButton: {
    paddingVertical: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerButton: {
    backgroundColor: '#3b82f6',
  },
  professionalButton: {
    backgroundColor: '#f97316',
  },
  signupButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  loginText: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
  },
});
