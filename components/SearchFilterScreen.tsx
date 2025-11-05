import { motion } from 'framer-motion';
import { ArrowLeft, Search, SlidersHorizontal, Star, MapPin, Home, Wrench } from 'lucide-react';
import { useState } from 'react';

interface SearchFilterScreenProps {
  onBack: () => void;
  onSelectUsta: (id: number) => void;
  onHomeClick: () => void;
  onOrdersClick: () => void;
  onProfileClick: () => void;
}

const professionals = [
  { id: 1, name: "Ahmadjon Karimov", skill: "Elektrik", rating: 4.9, reviews: 127, price: "80,000", distance: "2.3 km" },
  { id: 2, name: "Sardor Yusupov", skill: "Santexnik", rating: 4.8, reviews: 98, price: "70,000", distance: "1.8 km" },
  { id: 3, name: "Odiljon Toshmatov", skill: "Bo'yoqchi", rating: 4.7, reviews: 156, price: "60,000", distance: "3.5 km" },
  { id: 4, name: "Bobur Rahimov", skill: "Duradgor", rating: 4.9, reviews: 203, price: "75,000", distance: "0.9 km" },
  { id: 5, name: "Jasur Abdullayev", skill: "Konditsioner", rating: 4.6, reviews: 84, price: "90,000", distance: "4.2 km" },
];

export function SearchFilterScreen({ onBack, onSelectUsta, onHomeClick, onOrdersClick, onProfileClick }: SearchFilterScreenProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('Barchasi');
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [minRating, setMinRating] = useState(0);

  const skills = ['Barchasi', 'Elektrik', 'Santexnik', "Bo'yoqchi", 'Duradgor', 'Konditsioner'];

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
          <h2>Qidiruv va filtr</h2>
        </div>

        {/* Search Bar */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Usta yoki xizmat qidiring..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#252b3b] border border-gray-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
              showFilters ? 'bg-blue-500' : 'bg-[#252b3b] border border-gray-700'
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 pb-4 space-y-4"
        >
          {/* Skill Filter */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Xizmat turi</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.button
                  key={skill}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-xl text-sm flex items-center justify-center ${
                    selectedSkill === skill
                      ? 'bg-blue-500 text-white'
                      : 'bg-[#252b3b] text-gray-400 border border-gray-700'
                  }`}
                >
                  {skill}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Minimal reyting</p>
            <div className="flex gap-2">
              {[3, 4, 4.5, 5].map((rating) => (
                <motion.button
                  key={rating}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMinRating(rating)}
                  className={`flex-1 px-4 py-2 rounded-xl text-sm flex items-center justify-center gap-2 ${
                    minRating === rating
                      ? 'bg-yellow-500 text-white'
                      : 'bg-[#252b3b] text-gray-400 border border-gray-700'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  <span>{rating}+</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Narx oralig&apos;i (soat/sum)</p>
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                className="flex-1 bg-[#252b3b] border border-gray-700 rounded-xl py-2 px-4 text-white"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="flex-1 bg-[#252b3b] border border-gray-700 rounded-xl py-2 px-4 text-white"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Results */}
      <div className="px-6 py-4">
        <p className="text-gray-400 text-sm mb-4">{professionals.length} ta usta topildi</p>
        
        <div className="space-y-3">
          {professionals.map((usta, index) => (
            <motion.div
              key={usta.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectUsta(usta.id)}
              className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 cursor-pointer hover:border-blue-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{usta.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="truncate">{usta.name}</h4>
                  <p className="text-gray-400 text-sm">{usta.skill}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm">{usta.rating}</span>
                      <span className="text-gray-500 text-sm">({usta.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{usta.distance}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-orange-500">{usta.price}</p>
                  <p className="text-gray-500 text-xs">soat/sum</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#252b3b] border-t border-gray-700 pb-20">
        <div className="max-w-md mx-auto flex items-center justify-around py-3">
          <button 
            onClick={onHomeClick}
            className="flex flex-col items-center justify-center gap-1 text-gray-500"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Bosh sahifa</span>
          </button>
          <button 
            onClick={() => {}}
            className="flex flex-col items-center justify-center gap-1 text-blue-500"
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
