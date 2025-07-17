'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Layout from '../../components/Layout'
import PageWrapper from '../../components/PageWrapper'
import Calendar from '../../components/Calendar'

export default function Rezervacija() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>('')
  const searchParams = useSearchParams()

  useEffect(() => {
    // Pre-select service from URL params
    const serviceFromUrl = searchParams.get('service')
    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl)
    }
  }, [searchParams])

  return (
    <Layout>
      <PageWrapper>
        <Calendar 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </PageWrapper>
    </Layout>
  )
}
