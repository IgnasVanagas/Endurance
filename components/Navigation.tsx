'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-black/95 backdrop-blur-md fixed w-full top-0 z-50 border-b border-[#DFBD69]/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <motion.img 
                src="/faster-vektoriniai-08.png" 
                alt="Faster Endurance Studio" 
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <Link 
                href="/" 
                className={`px-4 py-2 text-lg font-medium transition-all duration-300 relative group ${
                  isActive('/') ? 'text-[#DFBD69]' : 'text-gray-300 hover:text-[#DFBD69]'
                }`}
              >
                {t('nav.home')}
                <motion.span 
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#DFBD69] to-[#926F34]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              
              <motion.a
                href="#about"
                className="px-4 py-2 text-lg font-medium transition-all duration-300 relative group text-gray-300 hover:text-[#DFBD69]"
                whileHover={{ y: -2 }}
              >
                {t('nav.about')}
                <motion.span 
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#DFBD69] to-[#926F34]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-4 py-2 text-lg font-medium transition-all duration-300 relative group text-gray-300 hover:text-[#DFBD69]"
                whileHover={{ y: -2 }}
              >
                {t('nav.contact')}
                <motion.span 
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#DFBD69] to-[#926F34]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              {/* Language Toggle */}
              <div className="flex items-center space-x-3 ml-8 glass-card px-4 py-2 rounded-full">
                <motion.button
                  onClick={() => setLanguage('lt')}
                  className={`px-3 py-1 text-lg font-medium transition-all duration-300 rounded-full ${
                    language === 'lt' ? 'text-[#DFBD69] bg-[#DFBD69]/10' : 'text-gray-400 hover:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LT
                </motion.button>
                <span className="text-gray-500">|</span>
                <motion.button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-lg font-medium transition-all duration-300 rounded-full ${
                    language === 'en' ? 'text-[#DFBD69] bg-[#DFBD69]/10' : 'text-gray-400 hover:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EN
                </motion.button>
              </div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(223, 189, 105, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link 
                  href="#contact"
                  className="text-black px-10 py-3 rounded-xl font-semibold text-lg transition-all duration-500 bg-gradient-to-r from-[#DFBD69] to-[#926F34] hover:from-[#926F34] hover:to-[#DFBD69] shadow-lg backdrop-blur-sm border border-[#DFBD69]/20"
                >
                  {t('hero.learn')}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
