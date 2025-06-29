'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '../context/LanguageContext'

interface AthletesProps {
  scrollToSection: (sectionId: string) => void
}

export default function Athletes({ scrollToSection }: AthletesProps) {
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
      quote: t('athlete.1.quote'),
      stats: {
        competitions: 45,
        wins: 32,
        records: 3
      }
    },
    {
      id: 2,
      name: t('athlete.2.name'),
      sport: t('athlete.2.sport'),
      achievements: tArray('athlete.2.achievements'),
      age: 24,
      experience: t('athlete.2.experience'),
      image: '/image.png',
      quote: t('athlete.2.quote'),
      stats: {
        competitions: 38,
        wins: 28,
        records: 5
      }
    },
    {
      id: 3,
      name: t('athlete.3.name'),
      sport: t('athlete.3.sport'),
      achievements: tArray('athlete.3.achievements'),
      age: 31,
      experience: t('athlete.3.experience'),
      image: '/athlete-hero.jpg',
      quote: t('athlete.3.quote'),
      stats: {
        competitions: 52,
        wins: 35,
        records: 2
      }
    }
  ]
  
  return (
    <section id="athletes" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">
            {t('athletes.title')} <span className="gradient-text">{t('athletes.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('athletes.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {athletes.map((athlete, index) => (
            <motion.div
              key={athlete.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#DFBD69]">{athlete.stats.competitions}</div>
                        <div className="text-xs text-gray-300">{t('athletes.competitions')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#DFBD69]">{athlete.stats.wins}</div>
                        <div className="text-xs text-gray-300">{t('athletes.wins')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#DFBD69]">{athlete.stats.records}</div>
                        <div className="text-xs text-gray-300">{t('athletes.records')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-3xl font-bold text-white">{athlete.name}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black rounded-full text-sm font-bold">
                      {athlete.sport}
                    </span>
                  </div>
                  <div className="flex space-x-6 text-sm text-gray-400">
                    <span>{t('athletes.age')}: {athlete.age}</span>
                    <span>{t('athletes.experience')}: {athlete.experience}</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg italic text-gray-300 border-l-4 border-[#DFBD69] pl-4">
                  "{athlete.quote}"
                </blockquote>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#DFBD69]">{t('athletes.achievements')}</h4>
                  <div className="space-y-2">
                    {athlete.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#DFBD69] to-[#926F34] rounded-full"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#DFBD69]/10 to-[#926F34]/10 rounded-2xl p-12 border border-[#DFBD69]/30">
          <h3 className="text-3xl font-bold mb-4">
            {t('athletes.join')} <span className="gradient-text">{t('athletes.join.highlight')}</span>
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            {t('athletes.join.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="inline-block bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
            >
              {t('athletes.start.training')}
            </button>
            <button
              onClick={() => scrollToSection('calendar')}
              className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              {t('athletes.book.time')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
