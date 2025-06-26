'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: '🧬',
      title: 'Scientific Methods',
      description: '15+ years of research-backed training protocols'
    },
    {
      icon: '🏆',
      title: 'Elite Standards',
      description: 'Only premium facility in Baltic States'
    },
    {
      icon: '📊',
      title: 'Data-Driven Results',
      description: '97% performance improvement guarantee'
    }
  ]

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="gradient-text">Faster Endurance</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Lithuania's exclusive premium performance center, combining cutting-edge sports science 
              with personalized coaching. Our evidence-based approach delivers measurable results 
              for serious athletes who understand that peak performance requires investment in the best.
              <span style={{ color: '#926F34' }} className="font-semibold"> Based in Vilnius, Lithuania.</span>
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="clean-card flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-full h-96 rounded-xl overflow-hidden relative"
                style={{ 
                  border: '1px solid rgba(223, 189, 105, 0.3)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/image.png"
                  alt="Elite endurance training facility and performance center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Elite Performance Excellence</p>
                  <p className="text-gray-300 text-sm">World-class training methods</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
