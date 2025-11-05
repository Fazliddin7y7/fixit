import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle, XCircle, MapPin, Calendar, Home, Search, Wrench } from 'lucide-react';
import { useState } from 'react';

interface UserDashboardProps {
  onBack: () => void;
  onHomeClick: () => void;
  onSearchClick: () => void;
  onProfileClick: () => void;
}

export function UserDashboard({ onBack, onHomeClick, onSearchClick, onProfileClick }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

  const activeBookings = [
    { 
      id: 1, 
      usta: 'Ahmadjon Karimov', 
      skill: 'Elektrik', 
      date: '2025-11-06', 
      time: '10:00',
      status: 'confirmed',
      location: 'Yunusobod tumani',
      price: '80,000'
    },
    { 
      id: 2, 
      usta: 'Sardor Yusupov', 
      skill: 'Santexnik', 
      date: '2025-11-08', 
      time: '14:00',
      status: 'pending',
      location: 'Mirzo Ulug\'bek tumani',
      price: '70,000'
    },
  ];

  const historyBookings = [
    { 
      id: 3, 
      usta: 'Odiljon Toshmatov', 
      skill: "Bo'yoqchi", 
      date: '2025-10-28', 
      time: '09:00',
      status: 'completed',
      location: 'Chilonzor tumani',
      price: '60,000',
      rated: true
    },
    { 
      id: 4, 
      usta: 'Jasur Abdullayev', 
      skill: 'Konditsioner', 
      date: '2025-10-15', 
      time: '11:00',
      status: 'completed',
      location: 'Shayxontohur tumani',
      price: '90,000',
      rated: false
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'completed':
        return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      default:
        return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Tasdiqlangan';
      case 'pending':
        return 'Kutilmoqda';
      case 'completed':
        return 'Bajarildi';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4 mb-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
          >
            <ArrowLeft className="w-6 h-6 text-gray-400" />
          </motion.button>
          <h2>Buyurtmalarim</h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center ${
              activeTab === 'active'
                ? 'bg-blue-500 text-white'
                : 'bg-[#252b3b] text-gray-400 border border-gray-700'
            }`}
          >
            Faol buyurtmalar
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center ${
              activeTab === 'history'
                ? 'bg-blue-500 text-white'
                : 'bg-[#252b3b] text-gray-400 border border-gray-700'
            }`}
          >
            Tarix
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 space-y-4">
        {activeTab === 'active' ? (
          activeBookings.length > 0 ? (
            activeBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <span>{booking.usta.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4>{booking.usta}</h4>
                      <p className="text-gray-400 text-sm">{booking.skill}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs border ${getStatusColor(booking.status)}`}>
                    {getStatusText(booking.status)}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.date} • {booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-gray-400 text-sm">Jami narx</p>
                    <p className="text-orange-500">{booking.price} so&apos;m</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-[#1a1f2e] border border-gray-700 rounded-xl text-sm flex items-center justify-center"
                    >
                      Bekor qilish
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-blue-500 rounded-xl text-sm flex items-center justify-center"
                    >
                      Xabar yuborish
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <Clock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Faol buyurtmalar yo&apos;q</p>
            </div>
          )
        ) : (
          historyBookings.length > 0 ? (
            historyBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <span>{booking.usta.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4>{booking.usta}</h4>
                      <p className="text-gray-400 text-sm">{booking.skill}</p>
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.date} • {booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-gray-400 text-sm">To&apos;langan</p>
                    <p className="text-orange-500">{booking.price} so&apos;m</p>
                  </div>
                  {!booking.rated && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-yellow-500 rounded-xl text-sm text-black flex items-center justify-center"
                    >
                      Baho berish
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Tarix bo&apos;sh</p>
            </div>
          )
        )}
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
            onClick={() => {}}
            className="flex flex-col items-center justify-center gap-1 text-blue-500"
          >
            <Wrench className="w-6 h-6" />
            <span className="text-xs">Buyurtmalar</span>
          </button>
          <button 
            onClick={onProfileClick}
            className="flex flex-col items-center justify-center gap-1 text-gray-500"
          >
            <div className="w-6 h-6 rounded-full bg-gray-500"></div>
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
