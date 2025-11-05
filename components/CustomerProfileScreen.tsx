import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Phone, MapPin, Settings, LogOut, Bell, Shield, HelpCircle, ChevronRight, Home, Search, Wrench } from 'lucide-react';

interface CustomerProfileScreenProps {
  onBack: () => void;
  onHomeClick: () => void;
  onSearchClick: () => void;
  onOrdersClick: () => void;
  onLogout: () => void;
}

export function CustomerProfileScreen({ onBack, onHomeClick, onSearchClick, onOrdersClick, onLogout }: CustomerProfileScreenProps) {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white pb-20">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
          >
            <ArrowLeft className="w-6 h-6 text-gray-400" />
          </motion.button>
          <h2>Profilim</h2>
        </div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#252b3b] border border-gray-700 rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
              AF
            </div>
            <div className="flex-1">
              <h3>Aziz foydalanuvchi</h3>
              <p className="text-gray-400 text-sm">Mijoz</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-[#1a1f2e] border border-gray-700 rounded-xl flex items-center justify-center"
            >
              <Settings className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">aziz@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">+998 90 123 45 67</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Toshkent, Yunusobod tumani</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 text-center"
          >
            <p className="text-2xl mb-1">12</p>
            <p className="text-gray-400 text-sm">Buyurtmalar</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 text-center"
          >
            <p className="text-2xl mb-1">8</p>
            <p className="text-gray-400 text-sm">Bajarildi</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 text-center"
          >
            <p className="text-2xl mb-1">5</p>
            <p className="text-gray-400 text-sm">Sevimlilar</p>
          </motion.div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-left">
                <p>Shaxsiy ma&apos;lumotlar</p>
                <p className="text-gray-400 text-sm">Ma&apos;lumotlarni tahrirlash</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-left">
                <p>Bildirishnomalar</p>
                <p className="text-gray-400 text-sm">Xabarnomalarni boshqarish</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-left">
                <p>Xavfsizlik</p>
                <p className="text-gray-400 text-sm">Parol va xavfsizlik</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-left">
                <p>Yordam</p>
                <p className="text-gray-400 text-sm">FAQ va qo&apos;llab-quvvatlash</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileTap={{ scale: 0.98 }}
            onClick={onLogout}
            className="w-full bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-center justify-center gap-3 text-red-500 mt-6"
          >
            <LogOut className="w-5 h-5" />
            <span>Chiqish</span>
          </motion.button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#252b3b] border-t border-gray-700">
        <div className="max-w-md mx-auto flex items-center justify-around py-3">
          <button 
            onClick={onHomeClick}
            className="flex flex-col items-center justify-center gap-1 text-gray-500"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Bosh sahifa</span>
          </button>
          <button 
            onClick={onSearchClick}
            className="flex flex-col items-center justify-center gap-1 text-gray-500"
          >
            <Search className="w-6 h-6" />
            <span className="text-xs">Qidiruv</span>
          </button>
          <button 
            onClick={onOrdersClick}
            className="flex flex-col items-center justify-center gap-1 text-gray-500"
          >
            <Wrench className="w-6 h-6" />
            <span className="text-xs">Buyurtmalar</span>
          </button>
          <button 
            onClick={() => {}}
            className="flex flex-col items-center justify-center gap-1 text-blue-500"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-orange-500"></div>
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
