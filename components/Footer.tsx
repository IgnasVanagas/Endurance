const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black" style={{ borderTop: '1px solid rgba(223, 189, 105, 0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#DFBD69' }}>
              FASTER ENDURANCE
            </h3>
            <p className="text-gray-300 mb-6">
              Lithuania's premier science-driven performance center. Elite training for champions.
            </p>
            <div className="font-medium" style={{ color: '#DFBD69' }}>
              🇱🇹 Vilnius, Lithuania
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-gray-300 hover:text-[#DFBD69] transition-colors">Elite Performance</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-[#DFBD69] transition-colors">Champion Track</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-[#DFBD69] transition-colors">Precision Training</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-[#DFBD69] transition-colors">Recovery Suite</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-[#DFBD69] transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-[#DFBD69] transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#DFBD69] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#DFBD69] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Elite Consultation</p>
              <p>Performance Testing</p>
              <p>Membership Inquiry</p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="w-8 h-8 text-black rounded flex items-center justify-center font-bold text-sm transition-all" style={{ background: 'linear-gradient(to right, #DFBD69, #926F34)' }}>Li</a>
                <a href="#" className="w-8 h-8 text-black rounded flex items-center justify-center font-bold text-sm transition-all" style={{ background: 'linear-gradient(to right, #DFBD69, #926F34)' }}>Ig</a>
                <a href="#" className="w-8 h-8 text-black rounded flex items-center justify-center font-bold text-sm transition-all" style={{ background: 'linear-gradient(to right, #DFBD69, #926F34)' }}>Yt</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400" style={{ borderTop: '1px solid rgba(223, 189, 105, 0.2)' }}>
          <p>© {currentYear} Faster Endurance. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#DFBD69] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#DFBD69] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
