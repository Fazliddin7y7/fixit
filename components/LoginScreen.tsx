import { motion } from 'motion/react';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { useState } from 'react';

interface LoginScreenProps {
  onBack: () => void;
  onLogin: () => void;
  onSignup: () => void;
}

export function LoginScreen({ onBack, onLogin, onSignup }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      <div className="p-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="mb-8"
        >
          <ArrowLeft className="w-6 h-6 text-gray-400" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2">Kirish</h1>
          <p className="text-gray-400 mb-8">Akkauntingizga kiring</p>

          <div className="space-y-4 mb-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="Email manzilingiz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="password"
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex justify-end mb-6">
            <button className="text-blue-500 text-sm">Parolni unutdingizmi?</button>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl shadow-lg mb-6 flex items-center justify-center"
          >
            Kirish
          </motion.button>

          <div className="text-center">
            <span className="text-gray-400">Akkauntingiz yo'qmi? </span>
            <button onClick={onSignup} className="text-blue-500">
              Ro'yxatdan o'tish
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
