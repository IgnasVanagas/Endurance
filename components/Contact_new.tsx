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

  const contactInfo = [
    {
      icon: '💎',
      title: 'Elite Consultation',
      info: 'elite@fasterendurance.lt',
      subtitle: 'Premium service inquiries'
    },
    {
      icon: '📞',
      title: 'Direct Line',
      info: '+370 (5) 234-5678',
      subtitle: 'Vilnius, Lithuania'
    },
    {
      icon: '🏆',
      title: 'Performance Center',
      info: 'Konstitucijos pr. 26, Vilnius',
      subtitle: 'Elite training facility'
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
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="champion-card flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl text-black flex items-center justify-center text-xl font-bold flex-shrink-0"
                    style={{ background: 'linear-gradient(to right, #DFBD69, #926F34)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="font-semibold" style={{ color: '#DFBD69' }}>{item.info}</p>
                    <p className="text-gray-400 text-sm">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
