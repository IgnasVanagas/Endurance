'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#DFBD69] mb-8">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl text-[#DFBD69] mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold mb-4">{t('about.trainers')}</h3>
            <p className="text-gray-300">
              {t('about.trainers.desc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl text-[#DFBD69] mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-4">{t('about.methodology')}</h3>
            <p className="text-gray-300">
              {t('about.methodology.desc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl text-[#DFBD69] mb-4">👥</div>
            <h3 className="text-xl font-bold mb-4">{t('about.community')}</h3>
            <p className="text-gray-300">
              {t('about.community.desc')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
