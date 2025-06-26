const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            FASTER 
            <span 
              className="block font-bold"
              style={{ 
                background: 'linear-gradient(to right, #F9F295, #E0AA3E, #FAF398, #B88A44)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ENDURANCE
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Lithuania's premier science-driven performance center. 
            Elite training for champions in the heart of Vilnius.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#contact" 
              className="text-black px-8 py-4 rounded font-semibold transition-colors"
              style={{ 
                background: 'linear-gradient(to right, #DFBD69, #926F34)',
              }}
            >
              Elite Consultation
            </a>
            <a 
              href="#programs" 
              className="px-8 py-4 rounded font-semibold transition-colors"
              style={{
                border: '1px solid #DFBD69',
                color: '#DFBD69'
              }}
            >
              View Programs
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#DFBD69' }}>#1</div>
              <div className="text-gray-300">in Baltic States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#DFBD69' }}>500+</div>
              <div className="text-gray-300">Elite Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#DFBD69' }}>98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
