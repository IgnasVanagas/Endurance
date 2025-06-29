'use client'

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#DFBD69]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/faster-vektoriniai-08.png" 
              alt="Faster Endurance" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#DFBD69] px-3 py-2 text-sm font-medium transition-colors">
                Apie mus
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#DFBD69] px-3 py-2 text-sm font-medium transition-colors">
                Paslaugos
              </button>
              <button onClick={() => scrollToSection('calendar')} className="text-gray-300 hover:text-[#DFBD69] px-3 py-2 text-sm font-medium transition-colors">
                Kalendorius
              </button>
              <button onClick={() => scrollToSection('athletes')} className="text-gray-300 hover:text-[#DFBD69] px-3 py-2 text-sm font-medium transition-colors">
                Atletai
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-black px-6 py-2 rounded font-medium transition-all bg-gradient-to-r from-[#DFBD69] to-[#926F34]"
              >
                Pradėti
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
