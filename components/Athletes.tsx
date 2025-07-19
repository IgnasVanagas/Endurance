'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function Athletes() {
  const { t, tArray } = useLanguage()
  
  const athletes = [
    {
      id: 1,
      name: t('athlete.1.name'),
      sport: t('athlete.1.sport'),
      achievements: tArray('athlete.1.achievements'),
      age: 28,
      experience: t('athlete.1.experience'),
      image: '/athlete-hero.jpg',
      quote: t('athlete.1.quote')
    },
    {
      id: 2,
      name: t('athlete.2.name'),
      sport: t('athlete.2.sport'),
      achievements: tArray('athlete.2.achievements'),
      age: 24,
      experience: t('athlete.2.experience'),
      image: '/image.png',
      quote: t('athlete.2.quote')
    },
    {
      id: 3,
      name: t('athlete.3.name'),
      sport: t('athlete.3.sport'),
      achievements: tArray('athlete.3.achievements'),
      age: 31,
      experience: t('athlete.3.experience'),
      image: '/athlete-hero.jpg',
      quote: t('athlete.3.quote')
    }
  ]
  
  return (
    <section id="athletes" className="py-24 bg-[#272936]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t('athletes.title')} <span className="gradient-text">{t('athletes.title.highlight')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('athletes.subtitle')}
          </p>
        </div>

        <div className="space-y-24">
          {athletes.map((athlete, index) => (
            <motion.div
              key={athlete.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div 
                  className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Sport Badge */}
                  <motion.div 
                    className="absolute top-8 right-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="px-4 py-2 bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black rounded-full text-sm font-bold backdrop-blur-sm shadow-lg">
                      {athlete.sport}
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{athlete.name}</h3>
                  <div className="flex flex-wrap gap-6 text-lg text-gray-400 mb-6">
                    <span>{t('athletes.age')}: {athlete.age}</span>
                    <span>{t('athletes.experience')}: {athlete.experience}</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl italic text-gray-300 border-l-4 border-[#DFBD69] pl-6 leading-relaxed">
                  "{athlete.quote}"
                </blockquote>

                {/* Achievements */}
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-6 text-[#DFBD69]">{t('athletes.achievements')}</h4>
                  <div className="space-y-4">
                    {athlete.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-[#DFBD69] to-[#926F34] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-lg">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-24 text-center bg-gradient-to-br from-[#DFBD69]/10 to-[#926F34]/10 rounded-3xl p-16 border border-[#DFBD69]/30 backdrop-blur-sm">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {t('athletes.join')} <span className="gradient-text">{t('athletes.join.highlight')}</span>
          </h3>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
            {t('athletes.join.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black px-12 py-5 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              {t('hero.learn')}
            </Link>
            <Link
              href="/"
              className="inline-block bg-white/10 text-white px-10 py-5 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              {t('nav.home')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
