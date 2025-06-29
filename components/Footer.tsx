'use client'

import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/faster-vektoriniai-08.png" 
              alt="Faster Endurance" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#DFBD69] mb-4">{t('footer.quick.links')}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#calendar" className="text-gray-400 hover:text-white transition-colors">{t('nav.calendar')}</a></li>
              <li><a href="#athletes" className="text-gray-400 hover:text-white transition-colors">{t('nav.athletes')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#DFBD69] mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@fasterendurance.lt</li>
              <li>📞 +370 600 12345</li>
              <li>📍 Vilnius, Lietuva</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Faster Endurance. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
