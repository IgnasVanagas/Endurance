'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const leftSlideVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const rightSlideVariants = {
    hidden: { 
      opacity: 0, 
      x: 80,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.3
      }
    }
  }
  
  return (
    <>
      {/* Section divider */}
      <motion.div 
        className="section-divider"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
      />
      
      <section id="about" className="py-32 bg-gradient-to-br from-[#272936] via-[#272936] to-[#272936] text-white relative overflow-hidden">
        {/* Enhanced background pattern with parallax */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-[#DFBD69] rounded-full blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#926F34] rounded-full blur-3xl"
            animate={{ 
              y: [0, 40, 0],
              x: [0, -25, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t('about.title')}
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-6xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('about.description')}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-32"
          >
            {/* Science and Innovation */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div 
                variants={leftSlideVariants}
                className="text-center lg:text-left"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.innovation')}</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t('about.innovation.desc')}
                </p>
              </motion.div>
              <div className="flex justify-center lg:justify-end">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 15,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-8xl md:text-9xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    🔬
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* History */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: -15,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-8xl md:text-9xl"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    🏆
                  </motion.div>
                </motion.div>
              </div>
              <motion.div 
                variants={rightSlideVariants}
                className="text-center lg:text-left order-1 lg:order-2"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.history')}</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t('about.history.desc')}
                </p>
              </motion.div>
            </motion.div>

            {/* Access */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div 
                variants={leftSlideVariants}
                className="text-center lg:text-left"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.access')}</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t('about.access.desc')}
                </p>
              </motion.div>
              <div className="flex justify-center lg:justify-end">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 15,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-8xl md:text-9xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    ⚡
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: -15,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-8xl md:text-9xl"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    🎯
                  </motion.div>
                </motion.div>
              </div>
              <motion.div 
                variants={rightSlideVariants}
                className="text-center lg:text-left order-1 lg:order-2"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight overflow-visible">{t('about.philosophy')}</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t('about.philosophy.desc')}
                </p>
              </motion.div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              variants={cardVariants}
              className="text-center glass-card hover-lift p-16 relative overflow-hidden magnetic-hover"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(223, 189, 105, 0.2)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#DFBD69]/3 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-8 gradient-text leading-tight overflow-visible"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t('about.conclusion')}
                </motion.h3>
                <motion.p 
                  className="text-lg md:text-xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t('about.conclusion.desc')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
