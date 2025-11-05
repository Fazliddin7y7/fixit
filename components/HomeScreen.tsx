import { motion } from 'framer-motion';
import { Search, Zap, Wrench, Droplet, PaintBucket, Hammer, Wind, Home as HomeIcon } from 'lucide-react';

interface HomeScreenProps {
  onCategoryClick: (category: string) => void;
  onSearchClick: () => void;
  onOrdersClick: () => void;
  onProfileClick: () => void;
  currentTab?: 'home' | 'search' | 'orders' | 'profile';
}

const categories = [
  { id: 'elektrik', name: 'Elektrik', icon: Zap, color: 'from-yellow-500 to-orange-500' },
  { id: 'santexnik', name: 'Santexnik', icon: Droplet, color: 'from-blue-500 to-cyan-500' },
  { id: 'boyoqchi', name: "Bo'yoqchi", icon: PaintBucket, color: 'from-purple-500 to-pink-500' },
  { id: 'duradgor', name: 'Duradgor', icon: Hammer, color: 'from-amber-600 to-orange-600' },
  { id: 'konditsioner', name: 'Konditsioner', icon: Wind, color: 'from-teal-500 to-cyan-500' },
  { id: 'ta-mirlash', name: "Ta'mirlash", icon: Wrench, color: 'from-gray-500 to-gray-600' },
];

export function HomeScreen({ onCategoryClick, onSearchClick, onOrdersClick, onProfileClick, currentTab = 'home' }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white pb-20">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Assalomu alaykum,</p>
            <h2>Aziz foydalanuvchi</h2>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
            <span>AF</span>
          </div>
        </div>

      </div>

      {/* Categories */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Xizmatlar</h3>
          <button className="text-blue-500 text-sm">Barchasi</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryClick(category.id)}
                className="bg-[#252b3b] border border-gray-700 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-blue-500 transition-colors"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-white">{category.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Popular Professionals */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3>Mashhur ustalar</h3>
          <button className="text-blue-500 text-sm">Barchasi</button>
        </div>

        <div className="space-y-3">
          {[
            { name: "Ahmadjon Karimov", skill: "Elektrik", rating: 4.9, reviews: 127, price: "80,000" },
            { name: "Sardor Yusupov", skill: "Santexnik", rating: 4.8, reviews: 98, price: "70,000" },
            { name: "Odiljon Toshmatov", skill: "Bo'yoqchi", rating: 4.7, reviews: 156, price: "60,000" },
          ].map((usta, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:border-blue-500 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{usta.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="truncate">{usta.name}</h4>
                <p className="text-gray-400 text-sm">{usta.skill}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm">{usta.rating}</span>
                  </div>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400 text-sm">{usta.reviews} baho</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-orange-500">{usta.price}</p>
                <p className="text-gray-500 text-sm">soat/sum</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#252b3b] border-t border-gray-700">
        <div className="max-w-md mx-auto flex items-center justify-around py-3">
          <button 
            onClick={() => {}}
            className={`flex flex-col items-center justify-center gap-1 ${currentTab === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Bosh sahifa</span>
          </button>
          <button 
            onClick={onSearchClick}
            className={`flex flex-col items-center justify-center gap-1 ${currentTab === 'search' ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <Search className="w-6 h-6" />
            <span className="text-xs">Qidiruv</span>
          </button>
          <button 
            onClick={onOrdersClick}
            className={`flex flex-col items-center justify-center gap-1 ${currentTab === 'orders' ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <Wrench className="w-6 h-6" />
            <span className="text-xs">Buyurtmalar</span>
          </button>
          <button 
            onClick={onProfileClick}
            className={`flex flex-col items-center justify-center gap-1 ${currentTab === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <div className={`w-6 h-6 rounded-full ${currentTab === 'profile' ? 'bg-gradient-to-br from-blue-500 to-orange-500' : 'bg-gray-500'}`}></div>
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
