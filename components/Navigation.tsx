'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-black/95 backdrop-blur-md fixed w-full top-0 z-50 border-b border-[#DFBD69]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/faster-vektoriniai-08.png" 
                alt="Faster Endurance Studio" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
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
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#DFBD69] to-[#926F34] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              
              <a
                href="#about"
                className="px-4 py-2 text-lg font-medium transition-all duration-300 relative group text-gray-300 hover:text-[#DFBD69]"
              >
                {t('nav.about')}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#DFBD69] to-[#926F34] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              
              <a
                href="#contact"
                className="px-4 py-2 text-lg font-medium transition-colors text-gray-300 hover:text-[#DFBD69]"
              >
                {t('nav.contact')}
              </a>
              
              {/* Language Toggle */}
              <div className="flex items-center space-x-3 ml-8">
                <button
                  onClick={() => setLanguage('lt')}
                  className={`px-3 py-2 text-lg font-medium transition-colors ${
                    language === 'lt' ? 'text-[#DFBD69]' : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  LT
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-2 text-lg font-medium transition-colors ${
                    language === 'en' ? 'text-[#DFBD69]' : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  EN
                </button>
              </div>
              
              <Link 
                href="#contact"
                className="text-black px-10 py-3 rounded-xl font-semibold text-lg transition-all bg-gradient-to-r from-[#DFBD69] to-[#926F34] hover:from-[#926F34] hover:to-[#DFBD69] shadow-lg hover:scale-105"
              >
                {t('hero.learn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
