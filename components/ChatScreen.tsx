import { motion } from 'motion/react';
import { ArrowLeft, Send, Paperclip, Phone, Video } from 'lucide-react';
import { useState } from 'react';

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
    <div className="min-h-screen bg-[#1a1f2e] text-white flex flex-col">
      {/* Header */}
      <div className="bg-[#252b3b] border-b border-gray-700 p-4">
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
          >
            <ArrowLeft className="w-6 h-6 text-gray-400" />
          </motion.button>
          
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
            <span>AK</span>
          </div>
          
          <div className="flex-1">
            <h3>Ahmadjon Karimov</h3>
            <p className="text-gray-400 text-sm">Onlayn</p>
          </div>

          <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-[#1a1f2e] border border-gray-700 rounded-full flex items-center justify-center"
            >
              <Phone className="w-5 h-5 text-blue-500" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-[#1a1f2e] border border-gray-700 rounded-full flex items-center justify-center"
            >
              <Video className="w-5 h-5 text-blue-500" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${
              msg.sender === 'user' 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                : 'bg-[#252b3b] border border-gray-700'
            } rounded-2xl p-4`}>
              <p className="mb-1">{msg.text}</p>
              <p className="text-xs text-gray-300 text-right">{msg.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-[#252b3b] border-t border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-[#1a1f2e] border border-gray-700 rounded-full flex items-center justify-center"
          >
            <Paperclip className="w-5 h-5 text-gray-400" />
          </motion.button>
          
          <input
            type="text"
            placeholder="Yangi xabar yozing..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-[#1a1f2e] border border-gray-700 rounded-2xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
