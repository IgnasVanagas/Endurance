import { useLanguage } from '../context/LanguageContext'

export interface Service {
  id: number
  name: string
  price: string
  duration: string
  description: string
  features: string[]
  popular: boolean
}

export const useServices = (): Service[] => {
  const { t, tArray } = useLanguage()
  
  return [
    {
      id: 1,
      name: t('service.1.name'),
      price: '45€',
      duration: t('service.1.duration'),
      description: t('service.1.description'),
      features: tArray('service.1.features'),
      popular: true
    },
    {
      id: 2,
      name: t('service.2.name'),
      price: '180€',
      duration: t('service.2.duration'),
      description: t('service.2.description'),
      features: tArray('service.2.features'),
      popular: false
    },
    {
      id: 3,
      name: t('service.3.name'),
      price: '60€',
      duration: t('service.3.duration'),
      description: t('service.3.description'),
      features: tArray('service.3.features'),
      popular: false
    }
  ]
}
