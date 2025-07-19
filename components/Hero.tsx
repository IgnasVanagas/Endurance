'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }
  
  return (
    <section className="relative bg-[#272936] text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Video with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
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
      </motion.div>

      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 z-5">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-[#DFBD69]/5 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-32 h-32 bg-[#926F34]/5 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#DFBD69]/3 rounded-full blur-xl"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear",
            delay: 4
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={titleVariants} className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <motion.span 
                  className="gradient-text inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  Faster Endurance
                </motion.span>
                <br />
                <motion.span 
                  className="text-white hero-endurance inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  Studio
                </motion.span>
              </h1>
            </motion.div>
            <motion.p 
              variants={subtitleVariants}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div 
              variants={buttonVariants}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -6,
                  boxShadow: "0 25px 50px rgba(223, 189, 105, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }}
                className="magnetic-hover"
              >
                <Link
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black px-24 py-5 rounded-2xl font-semibold text-lg hover:from-[#926F34] hover:to-[#DFBD69] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#DFBD69]/30 backdrop-blur-sm border border-[#DFBD69]/20"
                >
                  {t('hero.learn')}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
