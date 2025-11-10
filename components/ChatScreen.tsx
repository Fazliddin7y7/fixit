import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import { ArrowLeft, Send, Paperclip, Phone, Video } from 'lucide-react-native';

interface ChatScreenProps {
  onBack: () => void;
}

export function ChatScreen({ onBack }: ChatScreenProps) {
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, sender: 'usta', text: 'Assalomu alaykum! Sizga qanday yordam bera olaman?', time: '14:30' },
    { id: 2, sender: 'user', text: 'Uyimda elektr simlarini almashtirishim kerak', time: '14:32' },
    { id: 3, sender: 'usta', text: 'Tushundim. Nechta xona borligini aytib bera olasizmi?', time: '14:33' },
    { id: 4, sender: 'user', text: '3 xonali kvartira', time: '14:34' },
    { id: 5, sender: 'usta', text: 'Yaxshi, ertaga ertalab 10:00 da kelishim mumkin. Qulaylik qiladimi?', time: '14:35' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Pressable onPress={onBack} style={styles.iconButton}>
            <ArrowLeft size={24} color="#9ca3af" />
          </Pressable>
          <View style={styles.avatar}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>AK</Text>
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Ahmadjon Karimov</Text>
            <Text style={styles.headerSubtitle}>Onlayn</Text>
          </View>
          <View style={styles.headerActions}>
            <Pressable style={styles.actionButton}>
              <Phone size={20} color="#3b82f6" />
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Video size={20} color="#3b82f6" />
            </Pressable>
          </View>
        </View>
      </View>
      {/* Messages */}
      <ScrollView
        style={styles.messages}
        contentContainerStyle={{ paddingVertical: 8 }}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageRow,
              msg.sender === 'user' ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                msg.sender === 'user'
                  ? styles.messageBubbleUser
                  : styles.messageBubbleUsta
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
              <Text style={styles.messageTime}>{msg.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Input */}
      <View style={styles.inputBar}>
        <View style={styles.inputRow}>
          <Pressable style={styles.inputIconButton}>
            <Paperclip size={20} color="#9ca3af" />
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="Yangi xabar yozing..."
            placeholderTextColor="#6b7280"
            value={message}
            onChangeText={setMessage}
          />
          <Pressable style={styles.sendButton}>
            <Send size={20} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1f2e',
  },
  header: {
    backgroundColor: '#252b3b',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // Gradient imitation: fallback to a solid color
    backgroundColor: '#3b82f6',
    // for a real gradient, use a LinearGradient component
  },
  headerInfo: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#9ca3af',
    fontSize: 13,
    marginTop: 2,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1f2e',
    borderWidth: 1,
    borderColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  messages: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageRow: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  messageBubble: {
    maxWidth: '75%',
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  messageBubbleUser: {
    backgroundColor: '#2563eb',
  },
  messageBubbleUsta: {
    backgroundColor: '#252b3b',
    borderWidth: 1,
    borderColor: '#374151',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 6,
  },
  messageTime: {
    color: '#d1d5db',
    fontSize: 12,
    textAlign: 'right',
  },
  inputBar: {
    backgroundColor: '#252b3b',
    borderTopWidth: 1,
    borderTopColor: '#374151',
    padding: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inputIconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1f2e',
    borderWidth: 1,
    borderColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1f2e',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 4,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // Gradient imitation: fallback
    backgroundColor: '#2563eb',
  },
});
