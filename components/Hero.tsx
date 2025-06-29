'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <img 
                src="/faster-vektoriniai-07.png" 
                alt="Faster Endurance" 
                className="h-24 md:h-32 w-auto"
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#DFBD69] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#DFBD69]/90 transition-colors"
              >
                {t('hero.start')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#DFBD69] text-[#DFBD69] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#DFBD69] hover:text-black transition-colors"
              >
                {t('hero.learn')}
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFBD69] mb-2">500+</div>
              <div className="text-gray-300">{t('hero.members')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFBD69] mb-2">15+</div>
              <div className="text-gray-300">{t('hero.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFBD69] mb-2">50+</div>
              <div className="text-gray-300">{t('hero.medals')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#DFBD69] mb-2">95%</div>
              <div className="text-gray-300">{t('hero.success')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
