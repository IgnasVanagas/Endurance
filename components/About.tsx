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
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const leftSlideVariants = {
    hidden: { 
      opacity: 0, 
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const rightSlideVariants = {
    hidden: { 
      opacity: 0, 
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.2
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
      
      <section id="about" className="py-4 md:py-16 bg-gradient-to-br from-[#272936] via-[#272936] to-[#272936] text-white relative overflow-hidden">
        {/* Enhanced background pattern with parallax */}
        <div className="absolute inset-0 opacity-5 hidden md:block">
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
            viewport={{ once: true, margin: "-150px" }}
            className="text-center mb-12 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {t('about.title')}
              </motion.span>
            </h2>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-300 max-w-6xl mx-auto leading-loose md:leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {t('about.description')}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-200px" }}
            className="space-y-16 md:space-y-32"
          >
            {/* Science and Innovation */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-center"
            >
              <motion.div 
                variants={leftSlideVariants}
                className="text-center lg:text-left"
              >
                <h3 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text leading-tight overflow-visible">{t('about.innovation')}</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-loose md:leading-relaxed">
                  {t('about.innovation.desc')}
                </p>
              </motion.div>
              <div className="flex justify-center lg:justify-end">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 1,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl md:text-8xl lg:text-9xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    🔬
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* History */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-center"
            >
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: -2,
                    rotateX: 1,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl md:text-8xl lg:text-9xl"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                  >
                    🏆
                  </motion.div>
                </motion.div>
              </div>
              <motion.div 
                variants={rightSlideVariants}
                className="text-center lg:text-left order-1 lg:order-2"
              >
                <h3 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text leading-tight overflow-visible">{t('about.history')}</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-loose md:leading-relaxed">
                  {t('about.history.desc')}
                </p>
              </motion.div>
            </motion.div>

            {/* Access */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-center"
            >
              <motion.div 
                variants={leftSlideVariants}
                className="text-center lg:text-left"
              >
                <h3 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text leading-tight overflow-visible">{t('about.access')}</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-loose md:leading-relaxed">
                  {t('about.access.desc')}
                </p>
              </motion.div>
              <div className="flex justify-center lg:justify-end">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 1,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl md:text-8xl lg:text-9xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    ⚡
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-center"
            >
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <motion.div 
                  variants={iconVariants}
                  className="glass-card hover-lift w-20 h-20 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center magnetic-hover"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: -2,
                    rotateX: 1,
                    boxShadow: "0 25px 50px rgba(223, 189, 105, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-3xl md:text-8xl lg:text-9xl"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                  >
                    🎯
                  </motion.div>
                </motion.div>
              </div>
              <motion.div 
                variants={rightSlideVariants}
                className="text-center lg:text-left order-1 lg:order-2"
              >
                <h3 className="text-lg md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text leading-tight overflow-visible">{t('about.philosophy')}</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-loose md:leading-relaxed">
                  {t('about.philosophy.desc')}
                </p>
              </motion.div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              variants={cardVariants}
              className="text-center glass-card hover-lift p-6 md:p-16 relative overflow-hidden magnetic-hover"
              whileHover={{ 
                scale: 1.005,
                boxShadow: "0 30px 60px rgba(223, 189, 105, 0.2)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#DFBD69]/3 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 gradient-text leading-tight overflow-visible"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {t('about.conclusion')}
                </motion.h3>
                <motion.p 
                  className="text-base md:text-lg lg:text-xl text-gray-300 mb-3 md:mb-12 max-w-5xl mx-auto leading-loose md:leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
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
