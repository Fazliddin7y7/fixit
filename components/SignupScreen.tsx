import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Lock, Phone } from 'lucide-react';
import { useState } from 'react';

interface SignupScreenProps {
  onBack: () => void;
  onSignup: (role: 'customer' | 'professional') => void;
}

export function SignupScreen({ onBack, onSignup }: SignupScreenProps) {
  const [role, setRole] = useState<'customer' | 'professional'>('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
          <h1 className="mb-2">Ro'yxatdan o'tish</h1>
          <p className="text-gray-400 mb-6">Yangi akkaunt yaratish</p>

          <div className="flex gap-3 mb-6">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setRole('customer')}
              className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center ${
                role === 'customer'
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#252b3b] text-gray-400 border border-gray-700'
              }`}
            >
              Mijoz
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setRole('professional')}
              className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center ${
                role === 'professional'
                  ? 'bg-orange-500 text-white'
                  : 'bg-[#252b3b] text-gray-400 border border-gray-700'
              }`}
            >
              Usta
            </motion.button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="To'liq ismingiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

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
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="tel"
                placeholder="Telefon raqamingiz"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => onSignup(role)}
            className={`w-full ${
              role === 'customer'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                : 'bg-gradient-to-r from-orange-500 to-orange-600'
            } text-white py-4 rounded-2xl shadow-lg mb-6 flex items-center justify-center`}
          >
            Ro'yxatdan o'tish
          </motion.button>

          <div className="text-center">
            <span className="text-gray-400">Akkauntingiz bormi? </span>
            <button onClick={onBack} className="text-blue-500">
              Kirish
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
