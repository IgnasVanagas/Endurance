'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { useServices } from '../utils/servicesData'

export default function Services() {
  const { t } = useLanguage()
  const services = useServices()

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">{t('services.title')} {t('services.title.highlight')}</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                service.popular 
                  ? 'bg-gradient-to-br from-[#DFBD69]/15 via-[#926F34]/8 to-black border-2 border-[#DFBD69] shadow-lg shadow-[#DFBD69]/20 hover:shadow-xl hover:shadow-[#DFBD69]/30' 
                  : 'bg-gradient-to-br from-gray-800/50 to-black border border-gray-700 hover:border-[#DFBD69]/50 hover:shadow-lg hover:shadow-[#DFBD69]/10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black px-3 py-1 rounded-full text-xs font-bold">
                    {t('services.popular')}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-2xl font-bold text-white mb-3 pr-20">{service.name}</h3>
                    <div className="flex justify-between items-end">
                      <div className="text-sm text-gray-400">{service.duration}</div>
                      <div className={`text-3xl font-bold ${service.popular ? 'gradient-text' : 'text-white'}`}>
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-[#DFBD69]">{t('services.included')}</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.popular ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34]' : 'bg-gray-500'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <Link
                  href={`/rezervacija?service=${encodeURIComponent(service.name)}&price=${encodeURIComponent(service.price)}`}
                  className={`block w-full py-4 rounded-xl font-semibold transition-all transform hover:scale-105 text-center ${
                    service.popular 
                      ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black hover:shadow-lg hover:shadow-[#DFBD69]/30' 
                      : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-600 hover:from-gray-600 hover:to-gray-700'
                  }`}
                >
                  {t('services.order')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
