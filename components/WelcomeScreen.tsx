import { motion } from 'motion/react';
import { Wrench } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f2e] to-[#0f1419] flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
          <Wrench className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-white mb-4 text-center"
      >
        FixIt
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-400 text-center mb-12 max-w-sm"
      >
        Ishonchli ustalarni yaqin atrofingizdan toping
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-sm space-y-4"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl shadow-lg flex items-center justify-center"
        >
          Boshlash
        </motion.button>

        <div className="flex items-center gap-4 px-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-500 text-sm">yoki</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onGetStarted}
          className="w-full border border-gray-700 text-gray-300 py-4 rounded-2xl flex items-center justify-center"
        >
          Akkauntga kirish
        </motion.button>
      </motion.div>

      <div className="mt-12 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === 0 ? 1 : 0.3 }}
            className="w-2 h-2 rounded-full bg-blue-500"
          />
        ))}
      </div>
    </div>
  );
}
