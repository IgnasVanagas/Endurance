'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#DFBD69]/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Faster</span>
                <br />
                <span className="text-white">Endurance</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black px-24 py-5 rounded-xl font-semibold text-lg hover:from-[#926F34] hover:to-[#DFBD69] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#DFBD69]/20"
                >
                  {t('hero.learn')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
