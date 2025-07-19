'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <>
      {/* Section divider */}
      <div className="section-divider"></div>
      
      <footer className="bg-black/95 text-white py-12 font-jost relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFBD69]/5 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {/* Logo and Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2"
            >
              <motion.img 
                src="/faster-vektoriniai-08.png" 
                alt="Faster Endurance Studio" 
                className="h-12 w-auto mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <p className="text-gray-400 mb-4 max-w-md font-jost leading-relaxed">
                {t('footer.description')}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#DFBD69] mb-6 font-jost">{t('footer.quick.links')}</h3>
              <ul className="space-y-3 font-jost">
                <li>
                  <motion.a 
                    href="/" 
                    className="text-gray-400 hover:text-[#DFBD69] transition-all duration-300 font-jost flex items-center group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {t('nav.home')}
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#about" 
                    className="text-gray-400 hover:text-[#DFBD69] transition-all duration-300 font-jost flex items-center group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {t('nav.about')}
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#contact" 
                    className="text-gray-400 hover:text-[#DFBD69] transition-all duration-300 font-jost flex items-center group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {t('nav.contact')}
                  </motion.a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#DFBD69] mb-6 font-jost">{t('footer.contact')}</h3>
              <ul className="space-y-5 text-gray-400 font-jost">
                <motion.li 
                  className="flex items-start space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="flex-shrink-0 text-[#DFBD69] text-lg group-hover:scale-110 transition-transform duration-300">📍</span>
                  <div className="flex flex-col">
                    <span className="text-white font-medium mb-1 font-jost">{t('contact.address')}</span>
                    <span className="text-sm leading-relaxed font-jost">K. Kalinausko 2B-100</span>
                    <span className="text-sm font-jost">Vilnius</span>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="flex-shrink-0 text-[#DFBD69] text-lg group-hover:scale-110 transition-transform duration-300">📞</span>
                  <div className="flex flex-col">
                    <span className="text-white font-medium mb-1 font-jost">{t('contact.phone')}</span>
                    <motion.a 
                      href="tel:+37060505649"
                      className="text-sm font-jost hover:text-[#DFBD69] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      +370 605 05649
                    </motion.a>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="flex-shrink-0 text-[#DFBD69] text-lg group-hover:scale-110 transition-transform duration-300">📧</span>
                  <div className="flex flex-col">
                    <span className="text-white font-medium mb-1 font-jost">{t('contact.email')}</span>
                    <motion.a 
                      href="mailto:info@faster.fitness"
                      className="text-sm font-jost hover:text-[#DFBD69] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      info@faster.fitness
                    </motion.a>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-12 pt-8 text-center"
          >
            <p className="text-gray-500 text-sm font-jost">
              © 2025 Faster Endurance Studio. {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
