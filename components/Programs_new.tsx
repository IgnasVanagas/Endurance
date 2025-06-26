'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const programs = [
    {
      icon: '🔥',
      title: 'Elite Performance',
      description: 'Science-driven protocols for competitive athletes targeting podium finishes',
      features: [
        'VO₂ Max optimization',
        'Lactate threshold training',
        'Power analysis protocols'
      ],
      price: '€350/month',
      exclusive: true
    },
    {
      icon: '⚡',
      title: 'Champion Track',
      description: 'Premium endurance coaching for serious athletes seeking measurable gains',
      features: [
        'Personalized training plans',
        'Weekly performance testing',
        'Nutrition optimization'
      ],
      price: '€250/month',
      exclusive: false
    },
    {
      icon: '🎯',
      title: 'Precision Training',
      description: 'Data-driven approach combining heart rate, power, and biomechanics',
      features: [
        'Advanced metrics analysis',
        'Recovery optimization',
        'Competition preparation'
      ],
      price: '€200/month',
      exclusive: false
    },
    {
      icon: '👑',
      title: 'Victory Protocol',
      description: 'Ultimate performance package for athletes demanding the absolute best',
      features: [
        'Full sports science support',
        '24/7 coach access',
        'Elite recovery suite'
      ],
      price: '€500/month',
      exclusive: true
    }
  ]

  return (
    <section id="programs" className="section-spacing bg-black">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-white mb-6">
            Elite <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive performance protocols designed for athletes who demand excellence.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="champion-card group cursor-pointer relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {program.exclusive && (
                <div 
                  className="absolute -top-3 -right-3 text-black px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: 'linear-gradient(to right, #DFBD69, #926F34)' }}
                >
                  EXCLUSIVE
                </div>
              )}

              <div className="flex flex-col flex-1">
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #DFBD69, #926F34)' }}
                  whileHover={{ rotate: 5 }}
                >
                  {program.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 + 0.8 }}
                    >
                      <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: '#DFBD69' }}></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="mb-6">
                  <p className="text-2xl font-bold mb-2" style={{ color: '#DFBD69' }}>
                    {program.price}
                  </p>
                </div>

                <div className="mt-auto">
                  <motion.button
                    className="w-full btn-gold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Begin Training
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="btn-ghost text-lg px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
