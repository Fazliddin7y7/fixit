import { motion } from 'motion/react';
import { ArrowLeft, Star, MapPin, Clock, Award, MessageCircle, Phone } from 'lucide-react';

interface UstaProfileScreenProps {
  onBack: () => void;
  onBooking: () => void;
  onChat: () => void;
}

export function UstaProfileScreen({ onBack, onBooking, onChat }: UstaProfileScreenProps) {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white pb-24">
      {/* Header with Image */}
      <div className="relative h-64 bg-gradient-to-b from-blue-500 to-orange-500">
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Star className="w-5 h-5" />
          </motion.button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl flex items-center justify-center text-3xl translate-y-1/2 border-4 border-[#1a1f2e]">
            AK
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 pt-20">
        <div className="text-center mb-6">
          <h2 className="mb-1">Ahmadjon Karimov</h2>
          <p className="text-gray-400 mb-3">Elektrik mutaxassisi</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span>4.9</span>
              <span className="text-gray-500">(127 baho)</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>Toshkent, Yunusobod tumani</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 text-center">
            <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Tajriba</p>
            <p>8 yil</p>
          </div>
          <div className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 text-center">
            <Award className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Loyihalar</p>
            <p>350+</p>
          </div>
          <div className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4 text-center">
            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Reyting</p>
            <p>Top 5%</p>
          </div>
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="mb-3">Ma'lumot</h3>
          <p className="text-gray-400 leading-relaxed">
            8 yillik tajribaga ega professional elektrik. Uy va ofis elektr tarmog'ini 
            o'rnatish, ta'mirlash va xavfsizlik tekshiruvlarini amalga oshiraman. Sifatli 
            ish va mijoz mamnunligiga kafolat beraman.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="mb-3">Ko'nikmalar</h3>
          <div className="flex flex-wrap gap-2">
            {['Elektr tarmog\'i', 'LED yoritish', 'Avtomatika', 'Generatorlar', 'Solar panellar', 'Smart Home'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-[#252b3b] border border-gray-700 rounded-xl text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3>Fikrlar</h3>
            <button className="text-blue-500 text-sm">Barchasi</button>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "Dilshod M.", rating: 5, comment: "Juda professional usta! Ishini a'lo bajaradi.", date: "2 kun oldin" },
              { name: "Kamola A.", rating: 5, comment: "Tez va sifatli xizmat. Tavsiya qilaman.", date: "1 hafta oldin" },
            ].map((review, index) => (
              <div key={index} className="bg-[#252b3b] border border-gray-700 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p>{review.name}</p>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#252b3b] border-t border-gray-700 p-6">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <div className="text-center">
            <p className="text-orange-500 text-2xl">80,000</p>
            <p className="text-gray-400 text-sm">soat/sum</p>
          </div>
          <div className="flex-1 flex gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onChat}
              className="w-14 h-14 bg-[#1a1f2e] border border-gray-700 rounded-2xl flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 text-blue-500" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onBooking}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl flex items-center justify-center"
            >
              Buyurtma berish
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
