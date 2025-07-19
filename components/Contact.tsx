'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }
  
  return (
    <>
      {/* Enhanced section divider */}
      <motion.div 
        className="section-divider"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
      />
      
      <section id="contact" className="py-4 md:py-16 bg-gradient-to-br from-[#272936] via-[#272936] to-[#272936] text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute top-32 right-32 w-96 h-96 bg-[#DFBD69] rounded-full blur-3xl"
            animate={{ 
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-32 w-96 h-96 bg-[#926F34] rounded-full blur-3xl"
            animate={{ 
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 14, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t('footer.contact')}
              </motion.span>
            </h2>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('contact.subtitle')}
            </motion.p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-4xl w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div 
                  variants={cardVariants}
                  className="text-center group"
                >
                  <motion.div 
                    className="glass-card hover-lift w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 magnetic-hover"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 2,
                      boxShadow: "0 20px 40px rgba(223, 189, 105, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      📍
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-[#DFBD69] mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('contact.address')}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl text-gray-300">K. Kalinausko 2B-100</p>
                    <p className="text-xl text-gray-300">Vilnius</p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  variants={cardVariants}
                  className="text-center group"
                >
                  <motion.div 
                    className="glass-card hover-lift w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 magnetic-hover"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: -2,
                      boxShadow: "0 20px 40px rgba(223, 189, 105, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ scale: 1.05, rotate: -2 }}
                    >
                      📞
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-[#DFBD69] mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('contact.phone')}
                  </motion.h3>
                  <motion.a 
                    href="tel:+37060505649"
                    className="text-xl text-gray-300 hover:text-[#DFBD69] transition-colors duration-300 block"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    +37060505649
                  </motion.a>
                </motion.div>

                <motion.div 
                  variants={cardVariants}
                  className="text-center group"
                >
                  <motion.div 
                    className="glass-card hover-lift w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 magnetic-hover"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 2,
                      boxShadow: "0 20px 40px rgba(223, 189, 105, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      📧
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-[#DFBD69] mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('contact.email')}
                  </motion.h3>
                  <motion.a 
                    href="mailto:info@faster.fitness"
                    className="text-xl text-gray-300 hover:text-[#DFBD69] transition-colors duration-300 block"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    info@faster.fitness
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
