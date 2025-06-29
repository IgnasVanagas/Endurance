'use client'

import { useState } from 'react'
import { scrollToSection } from '../utils/scrollUtils'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Calendar from '../components/Calendar'
import Athletes from '../components/Athletes'
import Footer from '../components/Footer'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>('')

  return (
    <main className="bg-black text-white">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <Services />
      <Calendar 
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <Athletes scrollToSection={scrollToSection} />
      <Footer />
    </main>
  )
}
