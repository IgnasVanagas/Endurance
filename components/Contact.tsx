'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">{t('footer.contact')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center border border-[#DFBD69]/30 backdrop-blur-sm mx-auto mb-6 group-hover:scale-110 group-hover:border-[#DFBD69]/50 transition-all duration-300">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold text-[#DFBD69] mb-4">{t('contact.address')}</h3>
                <p className="text-xl text-gray-300">K. Kalinausko 2B-100</p>
                <p className="text-xl text-gray-300">Vilnius</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center border border-[#DFBD69]/30 backdrop-blur-sm mx-auto mb-6">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="text-2xl font-bold text-[#DFBD69] mb-4">{t('contact.phone')}</h3>
                <p className="text-xl text-gray-300">+37060505649</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center border border-[#DFBD69]/30 backdrop-blur-sm mx-auto mb-6">
                  <span className="text-3xl">📧</span>
                </div>
                <h3 className="text-2xl font-bold text-[#DFBD69] mb-4">{t('contact.email')}</h3>
                <p className="text-xl text-gray-300">info@faster.fitness</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
