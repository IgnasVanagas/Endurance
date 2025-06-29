'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'lt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
}

const translations = {
  lt: {
    // Navigation
    'nav.about': 'Apie mus',
    'nav.services': 'Paslaugos',
    'nav.calendar': 'Tvarkaraštis',
    'nav.athletes': 'Sportininkai',
    'nav.contact': 'Kontaktai',
    
    // Hero
    'hero.subtitle': 'Ištvermės sporto klubas, kuriame formuojami ateities čempionai',
    'hero.start': 'Pradėti treniruotes',
    'hero.learn': 'Sužinoti daugiau',
    'hero.members': 'Aktyvūs nariai',
    'hero.experience': 'Metų patirtis',
    'hero.medals': 'Medaliai',
    'hero.success': 'Sėkmės rodiklis',
    
    // About
    'about.title': 'Apie mus',
    'about.description': 'Faster Endurance - tai ne tik sporto klubas, tai bendruomenė, siekianti aukščiausių rezultatų ištvermės sporto šakose. Mūsų misija - padėti kiekvienam sportininkui atsiskleisti ir pasiekti savo tikslus.',
    'about.trainers': 'Profesionalūs treneriai',
    'about.trainers.desc': 'Mūsų komandą sudaro patyrę treneriai su tarptautiniu pripažinimu',
    'about.methodology': 'Įrodyta metodika',
    'about.methodology.desc': 'Naudojame mokslu pagrįstas treniruočių metodikas ir naują technologijas',
    'about.community': 'Stipri bendruomenė',
    'about.community.desc': 'Prisijunk prie aktyvios sportininkų bendruomenės ir atrask naujų draugų',
    
    // Services
    'services.title': 'Mūsų',
    'services.title.highlight': 'Paslaugos',
    'services.subtitle': 'Pasirinkite jums tinkamiausią sporto programą',
    'services.popular': 'POPULIARI',
    'services.included': 'Kas įskaičiuota:',
    'services.order': 'Užsakyti dabar',
    'services.payment': 'Mokėjimo sistema:',
    
    // Calendar
    'calendar.title': 'Užsakymų',
    'calendar.title.highlight': 'Kalendorius',
    'calendar.subtitle': 'Pasirinkite jums tinkamą laiką ir užsiregistruokite',
    'calendar.select.date': 'Pasirinkite datą',
    'calendar.select.time': 'Pasirinkite laiką',
    'calendar.booking.info': 'Užsakymo informacija',
    'calendar.service': 'Paslauga',
    'calendar.select.service': 'Pasirinkite paslaugą',
    'calendar.selected': 'Pasirinkta:',
    'calendar.date': 'Data:',
    'calendar.time': 'Laikas:',
    'calendar.name': 'Vardas, pavardė',
    'calendar.name.placeholder': 'Jūsų vardas ir pavardė',
    'calendar.email': 'El. paštas',
    'calendar.email.placeholder': 'jusu@email.com',
    'calendar.phone': 'Telefono numeris',
    'calendar.phone.placeholder': '+370 XXX XXXXX',
    'calendar.confirm': 'Patvirtinti užsakymą',
    'calendar.alert.select': 'Prašome pasirinkti datą, laiką ir paslaugą',
    'calendar.alert.confirmed': 'Užsakymas patvirtintas:',
    'calendar.days': ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št', 'Sk'],
    
    // Athletes
    'athletes.title': 'Mūsų',
    'athletes.title.highlight': 'Atletai',
    'athletes.subtitle': 'Susipažinkite su mūsų klubo čempionais ir jų sėkmės istorijomis',
    'athletes.competitions': 'Varžybos',
    'athletes.wins': 'Pergalės',
    'athletes.records': 'Rekordai',
    'athletes.age': 'Amžius',
    'athletes.experience': 'Patirtis',
    'athletes.achievements': 'Pasiekimai',
    'athletes.join': 'Tapkite kitu',
    'athletes.join.highlight': 'čempionu',
    'athletes.join.desc': 'Prisijunkite prie mūsų komandos ir pasidalykite mūsų atletų sėkmės istorijomis',
    'athletes.start.training': 'Pradėti treniruotes',
    'athletes.book.time': 'Rezervuoti laiką',
    
    // Athletes Data (keeping original)
    'athlete.1.name': 'Vardas Pavardė',
    'athlete.1.sport': 'Triatlonas',
    'athlete.1.quote': 'Sportas mane išmokė disciplinos ir atkaklumo, kurie praverčia visose gyvenimo srityse.',
    'athlete.1.achievements': ['Lietuvos čempionas', 'Nacionalinio rekordo savininkas'],
    'athlete.1.experience': '12 metų',
    'athlete.2.name': 'Vardas Pavardė',
    'athlete.2.sport': 'Plaukimas',
    'athlete.2.quote': 'Vanduo yra mano namas, o kiekviena treniruotė - žingsnis link svajonės.',
    'athlete.2.achievements': ['Europos čempionato medalininkė', 'Nacionalinio rekordo savininkė'],
    'athlete.2.experience': '15 metų',
    'athlete.3.name': 'Vardas Pavardė',
    'athlete.3.sport': 'Dviračių sportas',
    'athlete.3.quote': 'Kiekvienas kilometras ant dviračio yra investicija į ateities pergales.',
    'athlete.3.achievements': ['Balticos taurės laimėtojas', 'Tour de Lituanie čempionas'],
    'athlete.3.experience': '18 metų',
    
    // Services Data (keeping original)
    'service.1.name': 'Dienos stovykla vaikams',
    'service.1.duration': '1 diena',
    'service.1.description': 'Visą dieną trunkanti sporto stovykla vaikams nuo 6 iki 16 metų',
    'service.1.features': ['Profesionalūs treneriai', 'Sporto inventorius', 'Pietūs ir užkandžiai', 'Sporto draudimas', 'Pažymėjimas'],
    'service.2.name': 'Savaitės stovykla',
    'service.2.duration': '5 dienos',
    'service.2.description': 'Intensyvi savaitės sporto stovykla su nuosekliu mokymu',
    'service.2.features': ['Individualus planas', 'Kasdieniai pietūs', 'Sporto apranga', 'Varžybų simuliacija', 'Atsiskaitymo turnyras'],
    'service.3.name': 'Mėnesio narystė',
    'service.3.duration': '30 dienų',
    'service.3.description': 'Neriboto lankymo narystė su prieiga prie visų treniruočių',
    'service.3.features': ['Neriboti lankymai', 'Grupės treniruotės', 'Sporto salė 24/7', 'Asmeninis treneris', 'Mitybos konsultacijos'],
    
    // Footer
    'footer.description': 'Faster Endurance - jūsų kelias į aukščiausius sporto pasiekimus. Prisijunkite prie mūsų bendruomenės ir atsiskleiskite savo potencialą.',
    'footer.quick.links': 'Greiti nuorodai',
    'footer.contact': 'Kontaktai',
    'footer.rights': 'Visos teisės saugomos.',
  },
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.calendar': 'Schedule',
    'nav.athletes': 'Athletes',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'Endurance sports club where future champions are formed',
    'hero.start': 'Start Training',
    'hero.learn': 'Learn More',
    'hero.members': 'Active Members',
    'hero.experience': 'Years Experience',
    'hero.medals': 'Medals',
    'hero.success': 'Success Rate',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Faster Endurance is not just a sports club, it\'s a community striving for the highest results in endurance sports. Our mission is to help every athlete unlock their potential and achieve their goals.',
    'about.trainers': 'Professional Trainers',
    'about.trainers.desc': 'Our team consists of experienced trainers with international recognition',
    'about.methodology': 'Proven Methodology',
    'about.methodology.desc': 'We use science-based training methods and new technologies',
    'about.community': 'Strong Community',
    'about.community.desc': 'Join our active community of athletes and discover new friends',
    
    // Services
    'services.title': 'Our',
    'services.title.highlight': 'Services',
    'services.subtitle': 'Choose the sports program that suits you best',
    'services.popular': 'POPULAR',
    'services.included': 'What\'s included:',
    'services.order': 'Order Now',
    'services.payment': 'Payment System:',
    
    // Calendar
    'calendar.title': 'Booking',
    'calendar.title.highlight': 'Calendar',
    'calendar.subtitle': 'Choose a convenient time and register',
    'calendar.select.date': 'Select Date',
    'calendar.select.time': 'Select Time',
    'calendar.booking.info': 'Booking Information',
    'calendar.service': 'Service',
    'calendar.select.service': 'Select a service',
    'calendar.selected': 'Selected:',
    'calendar.date': 'Date:',
    'calendar.time': 'Time:',
    'calendar.name': 'Full Name',
    'calendar.name.placeholder': 'Your full name',
    'calendar.email': 'Email',
    'calendar.email.placeholder': 'your@email.com',
    'calendar.phone': 'Phone Number',
    'calendar.phone.placeholder': '+370 XXX XXXXX',
    'calendar.confirm': 'Confirm Booking',
    'calendar.alert.select': 'Please select date, time and service',
    'calendar.alert.confirmed': 'Booking confirmed:',
    'calendar.days': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    
    // Athletes
    'athletes.title': 'Our',
    'athletes.title.highlight': 'Athletes',
    'athletes.subtitle': 'Meet our club champions and their success stories',
    'athletes.competitions': 'Competitions',
    'athletes.wins': 'Wins',
    'athletes.records': 'Records',
    'athletes.age': 'Age',
    'athletes.experience': 'Experience',
    'athletes.achievements': 'Achievements',
    'athletes.join': 'Become the next',
    'athletes.join.highlight': 'champion',
    'athletes.join.desc': 'Join our team and share in our athletes\' success stories',
    'athletes.start.training': 'Start Training',
    'athletes.book.time': 'Book Time',
    
    // Athletes Data (English translations)
    'athlete.1.name': 'Name',
    'athlete.1.sport': 'Triathlon',
    'athlete.1.quote': 'Sports taught me discipline and perseverance that are useful in all areas of life.',
    'athlete.1.achievements': ['Lithuanian Champion', 'National Record Holder'],
    'athlete.1.experience': '12 years',
    'athlete.2.name': 'Name',
    'athlete.2.sport': 'Swimming',
    'athlete.2.quote': 'Water is my home, and every training session is a step towards my dream.',
    'athlete.2.achievements': ['European Championship Medalist', 'National Record Holder'],
    'athlete.2.experience': '15 years',
    'athlete.3.name': 'Name',
    'athlete.3.sport': 'Cycling',
    'athlete.3.quote': 'Every kilometer on the bike is an investment in future victories.',
    'athlete.3.achievements': ['Baltic Cup Winner', 'Tour de Lituanie Champion'],
    'athlete.3.experience': '18 years',
    
    // Services Data (English translations)
    'service.1.name': 'Kids Day Camp',
    'service.1.duration': '1 day',
    'service.1.description': 'Full-day sports camp for children aged 6 to 16',
    'service.1.features': ['Professional trainers', 'Sports equipment', 'Lunch and snacks', 'Sports insurance', 'Certificate'],
    'service.2.name': 'Weekly Camp',
    'service.2.duration': '5 days',
    'service.2.description': 'Intensive weekly sports camp with progressive training',
    'service.2.features': ['Individual plan', 'Daily meals', 'Sports gear', 'Competition simulation', 'Final tournament'],
    'service.3.name': 'Monthly Membership',
    'service.3.duration': '30 days',
    'service.3.description': 'Unlimited access membership to all training sessions',
    'service.3.features': ['Unlimited visits', 'Group training', '24/7 gym access', 'Personal trainer', 'Nutrition consultations'],
    
    // Footer
    'footer.description': 'Faster Endurance - your path to the highest sports achievements. Join our community and unlock your potential.',
    'footer.quick.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('lt')

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations['lt']]
    if (Array.isArray(value)) {
      return key // Return key if it's an array (use tArray instead)
    }
    return (value as string) || key
  }

  const tArray = (key: string): string[] => {
    const value = translations[language][key as keyof typeof translations['lt']]
    if (Array.isArray(value)) {
      return value as string[]
    }
    return [] // Return empty array if not an array
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
