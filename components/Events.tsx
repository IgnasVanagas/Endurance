'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const events = [
    {
      day: '15',
      month: 'AUG',
      title: 'Elite Performance Summit',
      description: 'Exclusive gathering of Baltic elite athletes and sports scientists in Vilnius',
      location: 'Faster Endurance HQ, Vilnius',
      time: '9:00 AM',
      category: 'Elite',
      price: '€150'
    },
    {
      day: '28',
      month: 'AUG',
      title: 'Champion Masterclass',
      description: 'Advanced training methodologies with Olympic-level coaching expertise',
      location: 'Performance Lab',
      time: '2:00 PM',
      category: 'Masterclass',
      price: '€200'
    },
    {
      day: '10',
      month: 'SEP',
      title: 'Science & Victory Conference',
      description: 'Latest research in sports performance from leading Baltic scientists',
      location: 'Vilnius Convention Center',
      time: 'Full Day',
      category: 'Science',
      price: '€300'
    }
  ]

  return (
    <section id="events" className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Exclusive <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium gatherings for serious athletes and performance enthusiasts.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="clean-card flex flex-col lg:flex-row items-center gap-8 group"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-24 h-24 rounded-xl flex flex-col items-center justify-center text-black font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #DFBD69, #926F34)' }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl font-black">{event.day}</span>
                <span className="text-sm">{event.month}</span>
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-black">
                    {event.title}
                  </h3>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-sm font-bold text-black"
                    style={{ background: 'linear-gradient(to right, #DFBD69, #926F34)' }}
                  >
                    {event.category.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 text-gray-600">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-lg">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-lg">⏰</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-lg">💎</span>
                    <span className="font-bold" style={{ color: '#926F34' }}>{event.price}</span>
                  </div>
                </div>
              </div>

              <motion.button
                className="btn-gold flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Spot
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Training Showcase Section */}
        <motion.div
          className="mt-20 max-w-6xl mx-auto relative rounded-2xl overflow-hidden"
          style={{ 
            backgroundImage: 'url(/athlete-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/75"></div>
          
          <div className="relative z-10 p-12 lg:p-16 text-center">
            <div className="mb-12">
              <h3 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Elite Training in <span className="gradient-text">Action</span>
              </h3>
              <p 
                className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Experience the intensity and precision of world-class endurance training
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#DFBD69' }}></div>
                  <div>
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      Professional Training Environment
                    </h4>
                    <p 
                      className="text-white/80 text-lg"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      State-of-the-art facilities designed for elite performance
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#DFBD69' }}></div>
                  <div>
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      World-Class Athletes
                    </h4>
                    <p 
                      className="text-white/80 text-lg"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      Train alongside champions and Olympic-level competitors
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#DFBD69' }}></div>
                  <div>
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      Scientific Approach
                    </h4>
                    <p 
                      className="text-white/80 text-lg"
                      style={{ fontFamily: 'Oxanium, sans-serif' }}
                    >
                      Data-driven training protocols for maximum results
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                className="text-black px-10 py-4 rounded-lg font-bold text-lg shadow-lg"
                style={{ 
                  background: 'linear-gradient(to right, #DFBD69, #926F34)',
                  fontFamily: 'Oxanium, sans-serif'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience Elite Training
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
