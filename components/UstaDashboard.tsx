import { motion } from 'motion/react';
import { ArrowLeft, DollarSign, TrendingUp, Users, Calendar, CheckCircle, Clock, Settings, ClipboardList, User, Phone } from 'lucide-react';
import { useState } from 'react';

interface UstaDashboardProps {
  onBack: () => void;
}

export function UstaDashboard({ onBack }: UstaDashboardProps) {
  const [activeTab, setActiveTab] = useState<'bookings' | 'profile'>('bookings');

  const bookings = [
    { 
      id: 1, 
      client: 'Dilshod Mirzayev', 
      phone: '+998 90 123 45 67',
      service: 'Elektr simlarini almashtirish',
      date: '2025-11-06', 
      time: '10:00',
      status: 'confirmed',
      location: 'Yunusobod tumani',
      price: '80,000'
    },
    { 
      id: 2, 
      client: 'Kamola Akbarova', 
      phone: '+998 91 234 56 78',
      service: 'Rozetkalar o\'rnatish',
      date: '2025-11-08', 
      time: '14:00',
      status: 'pending',
      location: 'Mirzo Ulug\'bek tumani',
      price: '50,000'
    },
  ];

  const stats = [
    { label: 'Kunlik daromad', value: '450,000', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { label: 'Bajarilgan', value: '28', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { label: 'Mijozlar', value: '156', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'O\'sish', value: '+23%', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white pb-20">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
            >
              <ArrowLeft className="w-6 h-6 text-gray-400" />
            </motion.button>
            <h2>Usta paneli</h2>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-xl">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('bookings')}
            className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'bookings'
                ? 'bg-orange-500 text-white'
                : 'bg-[#252b3b] text-gray-400 border border-gray-700'
            }`}
          >
            <ClipboardList className="w-5 h-5" />
            <span>Buyurtmalarim</span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'profile'
                ? 'bg-orange-500 text-white'
                : 'bg-[#252b3b] text-gray-400 border border-gray-700'
            }`}
          >
            <User className="w-5 h-5" />
            <span>Ma'lumotlarim</span>
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        {activeTab === 'bookings' ? (
          <div className="space-y-4">
            {bookings.map((booking, index) => (
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
                      <span>{booking.client.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4>{booking.client}</h4>
                      <p className="text-gray-400 text-sm">{booking.service}</p>
                    </div>
                  </div>
                  {booking.status === 'confirmed' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Clock className="w-5 h-5 text-yellow-500" />
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>{booking.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.date} • {booking.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <motion.div className="w-4 h-4" />
                    <span>{booking.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-gray-400 text-sm">Narx</p>
                    <p className="text-orange-500">{booking.price} so'm</p>
                  </div>
                  <div className="flex gap-2">
                    {booking.status === 'pending' ? (
                      <>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-500 rounded-xl text-sm flex items-center justify-center"
                        >
                          Rad etish
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-green-500 rounded-xl text-sm flex items-center justify-center"
                        >
                          Qabul qilish
                        </motion.button>
                      </>
                    ) : (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-blue-500 rounded-xl text-sm flex items-center justify-center"
                      >
                        Xabar yuborish
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#252b3b] border border-gray-700 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3>Profil ma'lumotlari</h3>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#1a1f2e] border border-gray-700 rounded-xl flex items-center justify-center"
                >
                  <Settings className="w-5 h-5 text-gray-400" />
                </motion.button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Ism</label>
                  <input
                    type="text"
                    value="Ahmadjon Karimov"
                    className="w-full bg-[#1a1f2e] border border-gray-700 rounded-xl py-3 px-4 text-white"
                    readOnly
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Mutaxassislik</label>
                  <input
                    type="text"
                    value="Elektrik"
                    className="w-full bg-[#1a1f2e] border border-gray-700 rounded-xl py-3 px-4 text-white"
                    readOnly
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Soatlik narx</label>
                  <input
                    type="text"
                    value="80,000 so'm"
                    className="w-full bg-[#1a1f2e] border border-gray-700 rounded-xl py-3 px-4 text-white"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Telefon</label>
                  <input
                    type="text"
                    value="+998 90 123 45 67"
                    className="w-full bg-[#1a1f2e] border border-gray-700 rounded-xl py-3 px-4 text-white"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Manzil</label>
                  <input
                    type="text"
                    value="Toshkent, Yunusobod tumani"
                    className="w-full bg-[#1a1f2e] border border-gray-700 rounded-xl py-3 px-4 text-white"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl mt-6 flex items-center justify-center"
                >
                  Ma'lumotlarni yangilash
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
