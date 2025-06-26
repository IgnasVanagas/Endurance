'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    experience: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const consultationTypes = [
    {
      icon: '💎',
      title: 'Diamond Elite',
      subtitle: 'Individual Excellence',
      description: 'One-on-one consultation with world-class performance specialists',
      features: ['Personal assessment', 'Custom protocols', 'Elite methodology'],
      contact: 'elite@fasterendurance.lt',
      availability: '24/7 Priority',
      premium: true
    },
    {
      icon: '🏆',
      title: 'Champion Track',
      subtitle: 'Performance Mastery',
      description: 'Advanced training programs for competitive athletes',
      features: ['Competition prep', 'Advanced analytics', 'Peak performance'],
      contact: '+370 (5) 234-5678',
      availability: 'Mon-Fri: 6:00-22:00',
      premium: false
    },
    {
      icon: '⚡',
      title: 'Lightning Start',
      subtitle: 'Quick Assessment',
      description: 'Rapid evaluation and program recommendation',
      features: ['Quick analysis', 'Program matching', 'Fast results'],
      contact: 'Konstitucijos pr. 26',
      availability: 'Same Day',
      premium: false
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your elite consultation request! Our performance specialists will contact you within 24 hours.')
    setFormData({ name: '', email: '', program: '', experience: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-spacing bg-black">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-white mb-6">
            Elite <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join Lithuania's most exclusive performance center?
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Premium Contact Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Connect with <span className="gradient-text">Excellence</span>
              </h3>
              <p className="text-gray-300">
                Multiple ways to reach our elite performance team
              </p>
            </div>

            {/* Revolutionary Consultation Boxes */}
            <div className="grid grid-cols-1 gap-8">
              {consultationTypes.map((consultation, index) => (
                <motion.div
                  key={index}
                  className={`relative group overflow-hidden rounded-3xl ${
                    consultation.premium 
                      ? 'bg-gradient-to-br from-[#DFBD69]/20 via-black/80 to-[#926F34]/20' 
                      : 'bg-gradient-to-br from-gray-900/90 to-black/70'
                  } backdrop-blur-xl border-2 ${
                    consultation.premium 
                      ? 'border-[#DFBD69]/50' 
                      : 'border-gray-700/30'
                  } hover:border-[#DFBD69]/80 transition-all duration-500`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Premium Badge */}
                  {consultation.premium && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-[#DFBD69] to-[#926F34] rounded-full text-black text-xs font-bold">
                        PREMIUM
                      </div>
                    </div>
                  )}

                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    consultation.premium 
                      ? 'bg-gradient-to-br from-[#DFBD69]/10 to-[#926F34]/10' 
                      : 'bg-gradient-to-br from-gray-600/5 to-gray-800/5'
                  }`}></div>

                  {/* Main Content */}
                  <div className="relative p-8">
                    <div className="flex items-start space-x-6">
                      {/* Icon Section */}
                      <div className="flex-shrink-0">
                        <div 
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-2xl group-hover:scale-110 transition-all duration-300 ${
                            consultation.premium 
                              ? 'bg-gradient-to-br from-[#DFBD69] to-[#926F34] text-black' 
                              : 'bg-gradient-to-br from-gray-700 to-gray-900 text-white border-2 border-gray-600'
                          }`}
                        >
                          {consultation.icon}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="mb-4">
                          <h4 className={`text-2xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300 ${
                            consultation.premium ? 'text-[#DFBD69]' : 'text-white'
                          }`}>
                            {consultation.title}
                          </h4>
                          <p className="text-gray-400 text-sm font-medium">
                            {consultation.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                          {consultation.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {consultation.features.map((feature, fIndex) => (
                            <div 
                              key={fIndex}
                              className={`px-3 py-2 rounded-lg text-xs font-medium text-center transition-all duration-300 ${
                                consultation.premium 
                                  ? 'bg-[#DFBD69]/20 text-[#DFBD69] border border-[#DFBD69]/30' 
                                  : 'bg-gray-800/60 text-gray-300 border border-gray-600/30'
                              } hover:scale-105`}
                            >
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Contact Info */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`font-semibold text-lg ${
                              consultation.premium ? 'text-[#DFBD69]' : 'text-white'
                            }`}>
                              {consultation.contact}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {consultation.availability}
                            </p>
                          </div>
                          
                          {/* Action Button */}
                          <motion.button
                            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                              consultation.premium 
                                ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black hover:shadow-lg hover:shadow-[#DFBD69]/30' 
                                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Connect
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`h-1 w-full ${
                    consultation.premium 
                      ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34]' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-800'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Call to Action */}
            <motion.div
              className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black border-2 border-[#DFBD69]/30 p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23DFBD69' fill-opacity='0.1'%3E%3Cpath d='M20 20L10 10l10-10 10 10-10 10zm0 20L10 30l10-10 10 10-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black text-2xl font-bold mb-4">
                  🚀
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  Begin Your <span className="gradient-text">Elite Journey</span>
                </h4>
                <p className="text-gray-300 text-lg max-w-md mx-auto">
                  Join Lithuania's most exclusive circle of performance athletes
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-[#DFBD69] font-bold text-lg">24/7</div>
                    <div className="text-gray-400 text-xs">Support</div>
                  </div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-[#DFBD69] font-bold text-lg">Elite</div>
                    <div className="text-gray-400 text-xs">Methods</div>
                  </div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-[#DFBD69] font-bold text-lg">Proven</div>
                    <div className="text-gray-400 text-xs">Results</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="champion-card"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Request Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#DFBD69' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all focus:border-[#DFBD69] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#DFBD69' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all focus:border-[#DFBD69] focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold mb-2" style={{ color: '#DFBD69' }}>
                  Program Interest *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all focus:border-[#DFBD69] focus:outline-none"
                >
                  <option value="">Select program</option>
                  <option value="elite">Elite Performance</option>
                  <option value="champion">Champion Track</option>
                  <option value="precision">Precision Training</option>
                  <option value="victory">Victory Protocol</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#DFBD69' }}>
                  Performance Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all resize-none focus:border-[#DFBD69] focus:outline-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-gold py-4 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Request Consultation'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
