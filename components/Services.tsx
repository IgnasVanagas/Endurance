'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    name: 'Dienos stovykla vaikams',
    price: '45€',
    duration: '1 diena',
    description: 'Visą dieną trunkanti sporto stovykla vaikams nuo 6 iki 16 metų',
    features: [
      'Profesionalūs treneriai',
      'Sporto inventorius',
      'Pietūs ir užkandžiai',
      'Sporto draudimas',
      'Pažymėjimas'
    ],
    popular: true
  },
  {
    id: 2,
    name: 'Savaitės stovykla',
    price: '180€',
    duration: '5 dienos',
    description: 'Intensyvi savaitės sporto stovykla su nuosekliu mokymu',
    features: [
      'Individualus planas',
      'Kasdieniai pietūs',
      'Sporto apranga',
      'Varžybų simuliacija',
      'Atsiskaitymo turnyras'
    ],
    popular: false
  },
  {
    id: 3,
    name: 'Mėnesio narystė',
    price: '60€',
    duration: '30 dienų',
    description: 'Neriboto lankymo narystė su prieiga prie visų treniruočių',
    features: [
      'Neriboti lankymai',
      'Grupės treniruotės',
      'Sporto salė 24/7',
      'Asmeninis treneris',
      'Mitybos konsultacijos'
    ],
    popular: false
  }
]

export default function Services() {
  const handlePayment = (service: any) => {
    alert(`Mokėjimo sistema: ${service.name} - ${service.price}`)
  }

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">
            Mūsų <span className="gradient-text">Paslaugos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pasirinkite jums tinkamiausią sporto programą
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                service.popular 
                  ? 'border-[#DFBD69] bg-gradient-to-br from-[#DFBD69]/20 via-black/80 to-[#926F34]/20' 
                  : 'border-gray-700 bg-gradient-to-br from-gray-900/80 to-black/60'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black px-2 py-1 rounded-full text-xs font-bold">
                    POPULIARI
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6 pt-12">
                <div className="mb-4">
                  <div className="flex flex-col mb-3">
                    <h3 className="text-xl font-bold text-white mb-2 pr-20">{service.name}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${service.popular ? 'text-[#DFBD69]' : 'text-white'}`}>
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-400">{service.duration}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[#DFBD69]">Kas įskaičiuota:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.popular ? 'bg-[#DFBD69]' : 'bg-gray-500'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handlePayment(service)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      service.popular 
                        ? 'bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black hover:shadow-lg hover:shadow-[#DFBD69]/30' 
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Užsakyti dabar
                  </button>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { services }
