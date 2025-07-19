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
    'nav.home': 'Pradžia',
    'nav.about': 'Apie mus',
    'nav.services': 'Kainoraštis',
    'nav.calendar': 'Rezervacija',
    'nav.athletes': 'Atletai',
    'nav.contact': 'Kontaktai',
    
    // Hero
    'hero.subtitle': 'Sveiki atvykę į „Faster Endurance Studio" – vietą, kur mokslas, technologijos ir žmogaus ryžtas padeda peržengti ištvermės ribas.',
    'hero.start': 'Pradėti treniruotes',
    'hero.learn': 'Kontaktai',
    'hero.members': 'Aktyvūs nariai',
    'hero.experience': 'Metų patirtis',
    'hero.medals': 'Medaliai',
    'hero.success': 'Sėkmės rodiklis',
    
    // About
    'about.title': 'Apie mus',
    'about.description': 'Sveiki atvykę į „Faster Endurance Studio" – vietą, kur mokslas, technologijos ir žmogaus ryžtas padeda peržengti ištvermės ribas. Tai ne paprastas sporto klubas, o erdvė tiems, kurie siekia geriausių rezultatų. Nesvarbu, ar sieki asmeninio rekordo, ruošiesi varžyboms, ar tiesiog bandai savo galimybes – „Faster" bus tavo patikimas partneris kelyje į aukščiausią sportinį lygį.',
    'about.innovation': 'Mokslas ir inovacijos',
    'about.innovation.desc': '„Faster Endurance Studio" tikime, kad ribos skirtos peržengti – ne tik greičio ar ištvermės, bet ir to, ką žmogaus kūnas iš tikrųjų gali pasiekti. Mūsų laboratorija – tai vieta, kur pažangios technologijos susitinka su aistra ištvermės sportui.',
    'about.history': 'Mokslas keičia sportą',
    'about.history.desc': 'Mokslas ir technologijos ne kartą pakeitė ištvermės sportą. Rogeris Bannisteris įveikė 4 minučių mylios barjerą naudodamas intervalines treniruotes ir blokine periodizacija. Gregas LeMondas laimėjo „Tour de France" su aerodinaminiu vairu. Graeme\'as Obree pasiekė valandos rekordus su savo dviračiu „Old Faithful" ir revoliucinėmis važiavimo pozicijomis. „Team Sky" dominavo su tiksliomis, galia paremtomis treniruotėmis. Olavo Aleksanderio Bu norvegiškasis metodas padėjo Kristianui Blummenfeldui ir Gustavui Idenui laimėti olimpinį auksą bei pagerinti „Ironman" rekordus.',
    'about.access': 'Prieiga visiems',
    'about.access.desc': '„Faster Endurance Studio" leidžia visų lygių sportininkams naudotis tomis pačiomis pažangiomis testavimo ir treniruočių priemonėmis.',
    'about.philosophy': 'Mūsų filosofija'.normalize('NFC'),
    'about.philosophy.desc': 'Įkvėpimo semiamės iš geriausių, bet kuriame aplinką, kur asmeniniai proveržiai vertinami lygiai kaip pergalės ant pakylos. Tikime, kad tikrasis potencialas dažnai slypi giliau ir gali būti atskleistas su mokslo bei protingos treniruočių sistemos pagalba.',
    'about.conclusion': 'Tavo kelias',
    'about.conclusion.desc': 'Nesvarbu, ar nori greičiau plaukti, gauti daugiau galios dviratyje, ar finišuoti stipresnis nei bet kada – „Faster Endurance Studio" yra čia, kad padėtų tau pasiekti tai, ką iš tiesų gali.',
    
    // Services
    'services.title': 'Mūsų'.normalize('NFC'),
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
    'athletes.title': 'Mūsų'.normalize('NFC'),
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
    
    // Contact
    'contact.subtitle': 'Susisiekite su mumis dėl treniruočių, konsultacijų ar bet kokių klausimų. Esame čia, kad padėtume jums pasiekti savo tikslus.',
    'contact.address': 'Adresas',
    'contact.phone': 'Telefonas',
    'contact.email': 'El. paštas',
    'contact.form.title': 'Parašykite mums',
    'contact.form.name': 'Vardas',
    'contact.form.name.placeholder': 'Jūsų vardas',
    'contact.form.email': 'El. paštas',
    'contact.form.email.placeholder': 'jusu@email.com',
    'contact.form.message': 'Žinutė',
    'contact.form.message.placeholder': 'Jūsų žinutė...',
    'contact.form.submit': 'Siųsti žinutę',
    
    // Footer
    'footer.description': 'Faster Endurance Studio - jūsų kelias į aukščiausius sporto pasiekimus. Prisijunkite prie mūsų bendruomenės ir atsiskleiskite savo potencialą.',
    'footer.quick.links': 'Nuorodos',
    'footer.contact': 'Kontaktai',
    'footer.rights': 'Visos teisės saugomos.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Pricing',
    'nav.calendar': 'Booking',
    'nav.athletes': 'Athletes',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'Welcome to Faster Endurance Studio—where science, technology, and human ambition converge to redefine athletic performance.',
    'hero.start': 'Start Training',
    'hero.learn': 'Contact',
    'hero.members': 'Active Members',
    'hero.experience': 'Years Experience',
    'hero.medals': 'Medals',
    'hero.success': 'Success Rate',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Welcome to Faster Endurance Studio—where science, technology, and human ambition converge to redefine athletic performance. This isn\'t just a sports club; it\'s a sanctuary for the relentless in pursuit of peak human potential. Whether you\'re chasing a personal best, preparing for your next race, or simply exploring your limits, Faster is your ultimate partner in performance.',
    'about.innovation': 'Science and Innovation',
    'about.innovation.desc': 'At Faster Endurance Studio, we believe in breaking boundaries—not just of speed or stamina, but of what the human body is capable of. Our lab is a playground for innovation, blending state-of-the-art technology with a deep passion for endurance sports.',
    'about.history': 'Science Changes Sport',
    'about.history.desc': 'Science and technology have revolutionized endurance sports time and time again: from Roger Bannister breaking the 4-minute mile barrier through the introduction of block periodization and interval training; to Greg LeMond\'s Tour de France victory using aero bars in a final time trial; to Graeme Obree\'s hour records on a self-built Old Faithful bike with revolutionary riding positions; to Team Sky\'s dominance through meticulous, power-based training; to Olav Aleksander Bu\'s metabolic optimization using the Norwegian method, helping athletes like Kristian Blummenfelt and Gustav Iden win Olympic gold and set Ironman records.',
    'about.access': 'Access for All',
    'about.access.desc': 'At Faster Endurance Studio, we make that same level of innovation and precision available to athletes of all levels through cutting-edge testing and smart, science-backed training.',
    'about.philosophy': 'Our Philosophy',
    'about.philosophy.desc': 'We look to the greats for inspiration and deliver the precision, insight, and innovation needed to chase records and redefine what\'s possible. At the same time, we foster an environment where personal breakthroughs are celebrated—because we believe true potential often lies beneath the surface, waiting to be unlocked through science and intelligent training.',
    'about.conclusion': 'Your Journey',
    'about.conclusion.desc': 'Whether your goal is to shave seconds off your swim split, conquer the bike leg with newfound power, or run across the finish line stronger than ever, Faster Endurance Studio is here to guide you. Because at Faster, we don\'t just help you train—we help you uncover what you\'re truly capable of.',
    
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
    
    // Contact
    'contact.subtitle': 'Get in touch with us for training, consultations, or any questions. We are here to help you achieve your goals.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.description': 'Faster Endurance Studio - your path to the highest sports achievements. Join our community and unlock your potential.',
    'footer.quick.links': 'Links',
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
