'use client'

import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <main className={`bg-[#272936] text-white min-h-screen ${className}`}>
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
