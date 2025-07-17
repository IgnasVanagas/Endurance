'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useServices } from '../utils/servicesData'

interface CalendarProps {
  selectedDate: string | null
  setSelectedDate: (date: string | null) => void
  selectedTime: string | null
  setSelectedTime: (time: string | null) => void
  selectedService: string
  setSelectedService: (service: string) => void
}

const availableSlots = {
  '2025-06-30': ['09:00', '10:00', '11:00', '14:00', '15:00'],
  '2025-07-01': ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00'],
  '2025-07-02': ['10:00', '11:00', '14:00', '15:00', '16:00'],
  '2025-07-03': ['09:00', '10:00', '11:00', '14:00', '15:00'],
  '2025-07-04': ['09:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
}

export default function Calendar({ 
  selectedDate, 
  setSelectedDate, 
  selectedTime, 
  setSelectedTime, 
  selectedService, 
  setSelectedService 
}: CalendarProps) {
  const { t, tArray } = useLanguage()
  const services = useServices()

  const generateCalendarDays = (): Date[] => {
    const days: Date[] = []
    const today = new Date()
    for (let i = 0; i < 21; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push(date)
    }
    return days
  }

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      alert(t('calendar.alert.select'))
      return
    }
    alert(`${t('calendar.alert.confirmed')}\n${t('calendar.service')}: ${selectedService}\n${t('calendar.date')} ${selectedDate}\n${t('calendar.time')} ${selectedTime}`)
  }

  const calendarDays = generateCalendarDays()

  return (
    <section id="calendar" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            {t('calendar.title')} <span className="gradient-text">{t('calendar.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('calendar.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#DFBD69]">{t('calendar.select.date')}</h3>
            <div className="bg-gradient-to-br from-gray-900/80 to-black/60 rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {tArray('calendar.days').map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-400 p-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((date, index) => {
                  const dateString = formatDate(date)
                  const hasSlots = availableSlots[dateString as keyof typeof availableSlots]
                  const isSelected = selectedDate === dateString
                  
                  return (
                    <motion.button
                      key={index}
                      onClick={() => hasSlots && setSelectedDate(dateString)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        isSelected 
                          ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black'
                          : hasSlots 
                            ? 'bg-gray-800 text-white hover:bg-gray-700'
                            : 'bg-gray-900 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!hasSlots}
                      whileHover={hasSlots ? { scale: 1.05 } : {}}
                    >
                      {date.getDate()}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && availableSlots[selectedDate as keyof typeof availableSlots] && (
              <div className="mt-6">
                <h4 className="text-xl font-bold mb-4 text-[#DFBD69]">{t('calendar.select.time')}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {availableSlots[selectedDate as keyof typeof availableSlots].map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#DFBD69]">{t('calendar.booking.info')}</h3>
            <div className="bg-gradient-to-br from-gray-900/80 to-black/60 rounded-2xl p-6 border border-gray-700/50">
              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3 text-[#DFBD69]">
                  {t('calendar.service')}
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all focus:border-[#DFBD69] focus:outline-none"
                >
                  <option value="">{t('calendar.select.service')}</option>
                  {services.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>

              {/* Selected Details */}
              <div className="mb-6 p-4 bg-black/40 rounded-lg border border-[#DFBD69]/30">
                <h4 className="font-semibold mb-2 text-[#DFBD69]">{t('calendar.selected')}</h4>
                <div className="space-y-1 text-sm">
                  <div>{t('calendar.date')} <span className="text-[#DFBD69]">{selectedDate || 'Nepasirinkta'}</span></div>
                  <div>{t('calendar.time')} <span className="text-[#DFBD69]">{selectedTime || 'Nepasirinktas'}</span></div>
                  <div>{t('calendar.service')}: <span className="text-[#DFBD69]">{selectedService || 'Nepasirinkta'}</span></div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#DFBD69]">
                    {t('calendar.name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all focus:border-[#DFBD69] focus:outline-none"
                    placeholder={t('calendar.name.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#DFBD69]">
                    {t('calendar.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all focus:border-[#DFBD69] focus:outline-none"
                    placeholder={t('calendar.email.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#DFBD69]">
                    {t('calendar.phone')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white transition-all focus:border-[#DFBD69] focus:outline-none"
                    placeholder={t('calendar.phone.placeholder')}
                  />
                </div>
              </div>

              {/* Booking Button */}
              <button
                onClick={handleBooking}
                className="w-full bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black py-4 rounded-xl font-semibold transition-all hover:scale-105"
              >
                {t('calendar.confirm')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
