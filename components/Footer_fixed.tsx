'use client'

import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white py-16 font-jost relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#DFBD69]/5 to-transparent opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/faster-vektoriniai-08.png" 
              alt="Faster Endurance" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md font-jost">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-all duration-300 hover:scale-110">
                <span className="sr-only">Facebook</span>
                <div className="w-10 h-10 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center hover:from-[#DFBD69]/30 hover:to-[#926F34]/30 transition-all duration-300">
                  📘
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-all duration-300 hover:scale-110">
                <span className="sr-only">Instagram</span>
                <div className="w-10 h-10 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center hover:from-[#DFBD69]/30 hover:to-[#926F34]/30 transition-all duration-300">
                  📷
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-all duration-300 hover:scale-110">
                <span className="sr-only">YouTube</span>
                <div className="w-10 h-10 bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 rounded-full flex items-center justify-center hover:from-[#DFBD69]/30 hover:to-[#926F34]/30 transition-all duration-300">
                  📺
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#DFBD69] mb-4 font-jost">{t('footer.quick.links')}</h3>
            <ul className="space-y-2 font-jost">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors font-jost">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors font-jost">{t('nav.services')}</a></li>
              <li><a href="#calendar" className="text-gray-400 hover:text-white transition-colors font-jost">{t('nav.calendar')}</a></li>
              <li><a href="#athletes" className="text-gray-400 hover:text-white transition-colors font-jost">{t('nav.athletes')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#DFBD69] mb-4 font-jost">{t('footer.contact')}</h3>
            <ul className="space-y-4 text-gray-400 font-jost">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-[#DFBD69] text-lg">📍</span>
                <div className="flex flex-col">
                  <span className="text-white font-medium mb-1 font-jost">Adresas</span>
                  <span className="text-sm leading-relaxed font-jost">Didžioji g. 13-9</span>
                  <span className="text-sm font-jost">LT-01128 Vilnius</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-[#DFBD69] text-lg">📞</span>
                <div className="flex flex-col">
                  <span className="text-white font-medium mb-1 font-jost">Telefonas</span>
                  <span className="text-sm font-jost">+37060505649</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-[#DFBD69] text-lg">📧</span>
                <div className="flex flex-col">
                  <span className="text-white font-medium mb-1 font-jost">El. paštas</span>
                  <span className="text-sm font-jost">info@faster.fitness</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="font-jost">&copy; 2025 Faster Endurance. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
