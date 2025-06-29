'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/faster-vektoriniai-08.png" 
              alt="Faster Endurance" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Faster Endurance - jūsų kelias į aukščiausius sporto pasiekimus. 
              Prisijunkite prie mūsų bendruomenės ir atsiskleiskite savo potencialą.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-[#DFBD69] transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#DFBD69] mb-4">Greiti nuorodai</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Apie mus</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Paslaugos</a></li>
              <li><a href="#calendar" className="text-gray-400 hover:text-white transition-colors">Tvarkaraštis</a></li>
              <li><a href="#athletes" className="text-gray-400 hover:text-white transition-colors">Sportininkai</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#DFBD69] mb-4">Kontaktai</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@fasterendurance.lt</li>
              <li>📞 +370 600 12345</li>
              <li>📍 Vilnius, Lietuva</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Faster Endurance. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  )
}
