'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { t, tArray } = useLanguage()

  const services = [
    {
      id: 1,
      name: t('service.1.name'),
      price: '45€',
      duration: t('service.1.duration'),
      description: t('service.1.description'),
      features: tArray('service.1.features'),
      popular: true
    },
    {
      id: 2,
      name: t('service.2.name'),
      price: '180€',
      duration: t('service.2.duration'),
      description: t('service.2.description'),
      features: tArray('service.2.features'),
      popular: false
    },
    {
      id: 3,
      name: t('service.3.name'),
      price: '60€',
      duration: t('service.3.duration'),
      description: t('service.3.description'),
      features: tArray('service.3.features'),
      popular: false
    }
  ]

  const handlePayment = (service: any) => {
    alert(`${t('services.payment')} ${service.name} - ${service.price}`)
  }

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">
            {t('services.title')} <span className="gradient-text">{t('services.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                service.popular 
                  ? 'border-[#DFBD69] bg-gradient-to-br from-[#DFBD69]/20 via-black/80 to-[#926F34]/20' 
                  : 'border-gray-700 bg-gradient-to-br from-gray-900/80 to-black/60'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black px-2 py-1 rounded-full text-xs font-bold">
                    {t('services.popular')}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6 pt-12">
                <div className="mb-4">
                  <div className="flex flex-col mb-3">
                    <h3 className="text-xl font-bold text-white mb-2 pr-20">{service.name}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${service.popular ? 'text-[#DFBD69]' : 'text-white'}`}>
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-400">{service.duration}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[#DFBD69]">{t('services.included')}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.popular ? 'bg-[#DFBD69]' : 'bg-gray-500'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handlePayment(service)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      service.popular 
                        ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black hover:shadow-lg hover:shadow-[#DFBD69]/30' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {t('services.order')}
                  </button>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Export services for use in Calendar component
export const getServices = () => {
  const { t, tArray } = useLanguage()
  return [
    {
      id: 1,
      name: t('service.1.name'),
      price: '45€',
      duration: t('service.1.duration'),
      description: t('service.1.description'),
      features: tArray('service.1.features'),
      popular: true
    },
    {
      id: 2,
      name: t('service.2.name'),
      price: '180€',
      duration: t('service.2.duration'),
      description: t('service.2.description'),
      features: tArray('service.2.features'),
      popular: false
    },
    {
      id: 3,
      name: t('service.3.name'),
      price: '60€',
      duration: t('service.3.duration'),
      description: t('service.3.description'),
      features: tArray('service.3.features'),
      popular: false
    }
  ]
}
