'use client'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <Hero />
        <About />
        <Contact />
      </div>
    </Layout>
  )
}
