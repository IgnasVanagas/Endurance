'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Science and Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.innovation')}</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('about.innovation.desc')}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center border border-[#DFBD69]/30 backdrop-blur-sm">
                <div className="text-8xl md:text-9xl">🔬</div>
              </div>
            </div>
          </motion.div>

          {/* History */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center border border-[#DFBD69]/30 backdrop-blur-sm">
                <div className="text-8xl md:text-9xl">🏆</div>
              </div>
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.history')}</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('about.history.desc')}
              </p>
            </div>
          </motion.div>

          {/* Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.access')}</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('about.access.desc')}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center border border-[#DFBD69]/30 backdrop-blur-sm">
                <div className="text-8xl md:text-9xl">⚡</div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center border border-[#DFBD69]/30 backdrop-blur-sm">
                <div className="text-8xl md:text-9xl">🎯</div>
              </div>
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.philosophy')}</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('about.philosophy.desc')}
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-[#DFBD69]/5 to-[#926F34]/5 rounded-3xl p-16 border border-[#DFBD69]/10 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#DFBD69]/5 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 gradient-text leading-tight overflow-visible">{t('about.conclusion')}</h3>
              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                {t('about.conclusion.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
