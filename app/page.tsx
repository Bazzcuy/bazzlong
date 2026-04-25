'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 py-4 md:py-6 px-6 md:px-8 flex justify-between items-center text-white bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="text-xl md:text-2xl font-serif tracking-widest uppercase">Bazzlong</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium">
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Watches</a>
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Universe</a>
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Stores</a>
        </div>
        
        {/* Login & Mobile Menu Toggle */}
        <div className="flex items-center space-x-6 text-sm tracking-wider uppercase font-medium">
          <div className="hidden md:block border-b border-transparent hover:border-white transition-all cursor-pointer">
            Login
          </div>
          {/* Hamburger Icon */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#001E50] z-40 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8 text-center text-white text-xl tracking-widest uppercase font-serif">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">Watches</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">Universe</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">Stores</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors pt-8 border-t border-white/20">Login</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-longines-blue">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/video_jam.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-longines-blue via-longines-blue/40 to-black/20"></div>
        <div className="relative z-10 text-center text-white mt-16 md:mt-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 text-luxury-gold">Timeless Grace in Every Second</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 md:mb-6 tracking-wide drop-shadow-lg leading-tight">BAZZLONG</h1>
          <p className="text-base sm:text-lg md:text-xl font-light mb-8 md:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed px-4">
            Experience the pinnacle of horological craftsmanship, blending classic sophistication with unparalleled precision.
          </p>
          <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 md:px-10 md:py-4 uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-longines-blue transition-all duration-500 w-full sm:w-auto">
            Explore the Collection
          </button>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-longines-blue mb-4">Our Collections</h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { name: "AquaHeritage", desc: "Adventure meets elegance", img: "/images/hydroconquest.png" },
              { name: "Celestial Grace", desc: "Timeless feminine grace", img: "/images/primaluna.png" },
              { name: "The Apex Collection", desc: "Classic sophistication", img: "/images/master_collection.png" }
            ].map((collection, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col items-center">
                <div className="w-full max-w-[280px] md:max-w-none aspect-[3/4] relative overflow-hidden bg-white shadow-sm mb-6 p-6 md:p-8 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
                  <Image 
                    src={collection.img} 
                    alt={collection.name} 
                    fill 
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-longines-blue mb-2">{collection.name}</h3>
                <p className="text-sm md:text-base text-gray-500 font-light">{collection.desc}</p>
                <div className="mt-3 md:mt-4 text-xs tracking-widest uppercase text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  Discover
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-longines-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Exceptional Timepieces</h2>
              <div className="w-16 h-0.5 bg-luxury-gold mx-auto md:mx-0"></div>
            </div>
            <a href="#" className="uppercase tracking-widest text-xs md:text-sm text-luxury-gold hover:text-white transition-colors border-b border-luxury-gold pb-1 md:border-none md:pb-0">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "AquaHeritage 42mm", desc: "Automatic watch - Stainless steel", price: "$1,950", img: "/images/best_seller_1.png" },
              { name: "Celestial Grace Moonphase", desc: "Automatic watch - Stainless steel", price: "$5,100", img: "/images/best_seller_2.png" },
              { name: "Apex Chronograph", desc: "Automatic watch - Leather strap", price: "$3,550", img: "/images/best_seller_3.png" }
            ].map((watch, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer group flex flex-col justify-between">
                <div>
                  <div className="w-full h-56 md:h-64 relative mb-6 md:mb-8">
                    <Image 
                      src={watch.img} 
                      alt={watch.name} 
                      fill 
                      className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <h4 className="text-lg md:text-xl font-serif mb-2">{watch.name}</h4>
                  <p className="text-premium-silver font-light text-xs md:text-sm mb-6">{watch.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-base md:text-lg font-medium">{watch.price}</p>
                  <button className="text-luxury-gold uppercase text-[10px] md:text-xs tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                    Buy Now &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Interactive Viewer Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-[#00112c] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-luxury-gold">The Anatomy of Precision</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Explore in 360°</h3>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-sm md:text-base">
              Drag to rotate. Scroll to zoom. Discover every intricate detail of our masterpiece from any angle.
            </p>
          </div>
          
          <div className="w-full max-w-4xl aspect-square md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/50 backdrop-blur-sm">
            <iframe 
              title="3D Watch Model" 
              className="w-full h-full"
              src="https://sketchfab.com/models/1eb8f1cc4e65490089e8316c026b9fce/embed?autostart=1&transparent=1&ui_infos=0&ui_watermark=0&ui_theme=dark" 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* The Visionaries (YouTube Section) */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-black text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/10 bg-[#111]">
            {/* The user can replace the src below with their own YouTube embed link */}
            <iframe 
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/D_h_P8N2d1A?controls=1&rel=0&playsinline=1&modestbranding=1" 
              title="Meet the Master Watchmakers" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-luxury-gold">Behind the Masterpiece</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Meet the Master Watchmakers</h3>
            <p className="text-gray-400 font-light mb-8 text-sm md:text-base leading-relaxed">
              Step inside our Geneva atelier and discover the passion, heritage, and meticulous craftsmanship that goes into every Bazzlong timepiece. Hear directly from the visionary artisans who bring these mechanical marvels to life.
            </p>
            <button className="text-luxury-gold uppercase text-xs md:text-sm tracking-widest border-b border-luxury-gold pb-1 hover:text-white hover:border-white transition-all duration-300">
              Watch Full Documentary
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 md:pt-20 pb-8 md:pb-10 px-6 md:px-8 bg-[#001538] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-serif tracking-widest uppercase mb-4 md:mb-6 text-luxury-gold">Bazzlong</h3>
            <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed">
              Crafting moments of prestige and timeless brilliance since 1988. Based in Geneva, Switzerland.
            </p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 font-medium">Collections</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors block py-1">Elegance</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Watchmaking Tradition</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Diving</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Aviation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 font-medium">Customer Service</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors block py-1">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Care Instructions</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Find a Boutique</a></li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 font-medium">Newsletter</h4>
            <p className="text-xs md:text-sm font-light text-gray-400 mb-4">Subscribe to receive our latest news.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input type="email" placeholder="Your email address" className="bg-white/10 px-4 py-3 sm:py-2 text-xs md:text-sm w-full focus:outline-none focus:ring-1 focus:ring-luxury-gold" />
              <button className="bg-luxury-gold text-[#001538] px-4 py-3 sm:py-2 text-xs md:text-sm font-medium hover:bg-white transition-colors w-full sm:w-auto">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-light text-gray-500 text-center md:text-left">
          <p className="mb-4 md:mb-0">&copy; 2026 Bazzlong Watch Co. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}