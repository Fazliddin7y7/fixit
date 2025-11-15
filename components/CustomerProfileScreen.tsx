import React from 'react';
import { View, Text, Pressable, StyleSheet, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, User, Mail, Phone, MapPin, Settings, LogOut, Bell, Shield, HelpCircle, ChevronRight, Home, Search, Wrench } from 'lucide-react-native';

interface CustomerProfileScreenProps {
  onBack: () => void;
  onHomeClick: () => void;
  onSearchClick: () => void;
  onOrdersClick: () => void;
  onLogout: () => void;
}

export function CustomerProfileScreen({ onBack, onHomeClick, onSearchClick, onOrdersClick, onLogout }: CustomerProfileScreenProps) {
  const animatedOpacity = React.useRef(new Animated.Value(0)).current;
  const animatedTranslateY = React.useRef(new Animated.Value(20)).current;

  React.useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedOpacity, animatedTranslateY]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Pressable onPress={onBack} style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}>
              <ArrowLeft color="#9ca3af" size={24} />
            </Pressable>
            <Text style={styles.headerTitle}>Profilim</Text>
          </View>

          {/* Profile Info */}
          <Animated.View
            style={[
              styles.profileInfo,
              {
                opacity: animatedOpacity,
                transform: [{ translateY: animatedTranslateY }],
              },
            ]}
          >
            <View style={styles.profileHeader}>
              <LinearGradient colors={['#3B82F6', '#F97316']} style={styles.avatar}>
                <Text style={styles.avatarText}>AF</Text>
              </LinearGradient>
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>Aziz foydalanuvchi</Text>
                <Text style={styles.profileRole}>Mijoz</Text>
              </View>
              <Pressable style={({ pressed }) => [styles.settingsButton, pressed && styles.pressed]}>
                <Settings color="#9ca3af" size={20} />
              </Pressable>
            </View>

            <View style={styles.contactInfo}>
              <View style={styles.contactRow}>
                <Mail color="#9ca3af" size={20} />
                <Text style={styles.contactText}>aziz@example.com</Text>
              </View>
              <View style={styles.contactRow}>
                <Phone color="#9ca3af" size={20} />
                <Text style={styles.contactText}>+998 90 123 45 67</Text>
              </View>
              <View style={styles.contactRow}>
                <MapPin color="#9ca3af" size={20} />
                <Text style={styles.contactText}>Toshkent, Yunusobod tumani</Text>
              </View>
            </View>
          </Animated.View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <Animated.View style={[styles.statBox, { opacity: animatedOpacity, transform: [{ scale: 1 }] }]}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Buyurtmalar</Text>
            </Animated.View>
            <Animated.View style={[styles.statBox, { opacity: animatedOpacity, transform: [{ scale: 1 }] }]}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Bajarildi</Text>
            </Animated.View>
            <Animated.View style={[styles.statBox, { opacity: animatedOpacity, transform: [{ scale: 1 }] }]}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Sevimlilar</Text>
            </Animated.View>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            <Pressable style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}>
              <View style={styles.menuItemContent}>
                <View style={[styles.menuIconContainer, { backgroundColor: 'rgba(59, 130, 246, 0.2)' }]}>
                  <User color="#3b82f6" size={20} />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>Shaxsiy ma&apos;lumotlar</Text>
                  <Text style={styles.menuSubtitle}>Ma&apos;lumotlarni tahrirlash</Text>
                </View>
              </View>
              <ChevronRight color="#9ca3af" size={20} />
            </Pressable>

            <Pressable style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}>
              <View style={styles.menuItemContent}>
                <View style={[styles.menuIconContainer, { backgroundColor: 'rgba(249, 115, 22, 0.2)' }]}>
                  <Bell color="#f97316" size={20} />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>Bildirishnomalar</Text>
                  <Text style={styles.menuSubtitle}>Xabarnomalarni boshqarish</Text>
                </View>
              </View>
              <ChevronRight color="#9ca3af" size={20} />
            </Pressable>

            <Pressable style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}>
              <View style={styles.menuItemContent}>
                <View style={[styles.menuIconContainer, { backgroundColor: 'rgba(139, 92, 246, 0.2)' }]}>
                  <Shield color="#8b5cf6" size={20} />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>Xavfsizlik</Text>
                  <Text style={styles.menuSubtitle}>Parol va xavfsizlik</Text>
                </View>
              </View>
              <ChevronRight color="#9ca3af" size={20} />
            </Pressable>

            <Pressable style={({ pressed }) => [styles.menuItem, pressed && styles.pressed]}>
              <View style={styles.menuItemContent}>
                <View style={[styles.menuIconContainer, { backgroundColor: 'rgba(34, 197, 94, 0.2)' }]}>
                  <HelpCircle color="#22c55e" size={20} />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>Yordam</Text>
                  <Text style={styles.menuSubtitle}>FAQ va qo&apos;llab-quvvatlash</Text>
                </View>
              </View>
              <ChevronRight color="#9ca3af" size={20} />
            </Pressable>

            <Pressable onPress={onLogout} style={({ pressed }) => [styles.logoutButton, pressed && styles.pressed]}>
              <LogOut color="#ef4444" size={20} />
              <Text style={styles.logoutText}>Chiqish</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Pressable onPress={onHomeClick} style={({ pressed }) => [styles.bottomNavItem, pressed && styles.pressed]}>
          <Home color="#6b7280" size={24} />
          <Text style={styles.bottomNavText}>Bosh sahifa</Text>
        </Pressable>
        <Pressable onPress={onSearchClick} style={({ pressed }) => [styles.bottomNavItem, pressed && styles.pressed]}>
          <Search color="#6b7280" size={24} />
          <Text style={styles.bottomNavText}>Qidiruv</Text>
        </Pressable>
        <Pressable onPress={onOrdersClick} style={({ pressed }) => [styles.bottomNavItem, pressed && styles.pressed]}>
          <Wrench color="#6b7280" size={24} />
          <Text style={styles.bottomNavText}>Buyurtmalar</Text>
        </Pressable>
        <Pressable style={styles.bottomNavItem}>
  <View style={styles.bottomNavActiveCircle} />
  <Text style={[styles.bottomNavText, styles.bottomNavActiveText]}>Profil</Text>
</Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1f2e',
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  header: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  iconButton: {
    padding: 8,
    borderRadius: 6,
  },
  pressed: {
    opacity: 0.6,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  profileInfo: {
    backgroundColor: '#252b3b',
    borderColor: '#374151',
    borderWidth: 1,
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'transparent',
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  profileRole: {
    color: '#9ca3af',
    fontSize: 14,
  },
  settingsButton: {
    width: 40,
    height: 40,
    backgroundColor: '#1a1f2e',
    borderColor: '#374151',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactInfo: {
    gap: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactText: {
    color: '#d1d5db',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#252b3b',
    borderColor: '#374151',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    color: 'white',
    marginBottom: 4,
    fontWeight: '600',
  },
  statLabel: {
    color: '#9ca3af',
    fontSize: 14,
  },
  menuContainer: {
    gap: 12,
  },
  menuItem: {
    backgroundColor: '#252b3b',
    borderColor: '#374151',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTextContainer: {
    flexShrink: 1,
  },
  menuTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  menuSubtitle: {
    color: '#9ca3af',
    fontSize: 12,
  },
  logoutButton: {
    marginTop: 24,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  logoutText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#252b3b',
    borderTopColor: '#374151',
    borderTopWidth: 1,
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  bottomNavText: {
    fontSize: 10,
    color: '#6b7280',
  },
  bottomNavActive: {
    color: '#3b82f6',
  },
  bottomNavActiveText: {
    color: '#3b82f6',
  },
  bottomNavActiveCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3b82f6',
    marginBottom: 4,
  },
});
