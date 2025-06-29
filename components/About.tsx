'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#DFBD69] mb-8">
            Apie mus
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Faster Endurance - tai ne tik sporto klubas, tai bendruomenė, siekianti 
            aukščiausių rezultatų ištvermės sporto šakose. Mūsų misija - padėti 
            kiekvienam sportininkui atsiskleisti ir pasiekti savo tikslus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl text-[#DFBD69] mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold mb-4">Profesionalūs treneriai</h3>
            <p className="text-gray-300">
              Mūsų komandą sudaro patyrę treneriai su tarptautiniu pripažinimu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl text-[#DFBD69] mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-4">Įrodyta metodika</h3>
            <p className="text-gray-300">
              Naudojame mokslu pagrįstas treniruočių metodikas ir naują technologijas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl text-[#DFBD69] mb-4">👥</div>
            <h3 className="text-xl font-bold mb-4">Stipri bendruomenė</h3>
            <p className="text-gray-300">
              Prisijunk prie aktyvios sportininkų bendruomenės ir atrask naujų draugų
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
