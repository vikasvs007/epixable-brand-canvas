import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/20' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            {/* Logo Image - larger and circular */}
            <img
              src="/Logo - VertexLabs.jpg"
              alt="Vertex Labs Logo"
              className="h-16 w-16 object-contain rounded-full border-2 border-orange-500 shadow-md"
              style={{ background: 'transparent' }}
            />
            {/* Name with styled x */}
            <div className="relative flex items-center">
              <span className="flex items-center space-x-0.5 text-3xl font-montserrat font-bold text-white">
                <span>V E R T E</span>
                <span className="relative inline-block w-7 h-7 align-middle mx-1">
                  {/* Orange diamond */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="block w-5 h-5 bg-orange-600 rotate-45 rounded-sm"></span>
                  </span>
                  {/* Unique X */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-white text-5xl font-playfair font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        transform: 'rotate(-8deg) skewY(4deg)',
                        letterSpacing: '-0.1em',
                      }}
                    >
                      x
                    </span>
                  </span>
                </span>
                <span>L A B S</span>
              </span>
              
              {/* Text shadow effect */}
              <div className="absolute inset-0 flex items-center space-x-0.5 text-3xl font-montserrat font-bold text-orange-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span>V E R T E</span>
                <span className="relative inline-block w-7 h-7 align-middle mx-1">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="block w-5 h-5 bg-orange-600 rotate-45 rounded-sm"></span>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-orange-500 text-5xl font-playfair font-extrabold opacity-60"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        transform: 'rotate(-8deg) skewY(4deg)',
                        letterSpacing: '-0.1em',
                      }}
                    >
                      x
                    </span>
                  </span>
                </span>
                <span>L A B S</span>
              </div>
              
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 flex items-center space-x-0.5 text-3xl font-montserrat font-bold text-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transform: 'translateX(1px)'}}>
                <span>V E R T E</span>
                <span className="relative inline-block w-7 h-7 align-middle mx-1">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="block w-5 h-5 bg-orange-400 rotate-45 rounded-sm"></span>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-orange-400 text-5xl font-playfair font-extrabold opacity-60"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        transform: 'rotate(-8deg) skewY(4deg)',
                        letterSpacing: '-0.1em',
                      }}
                    >
                      x
                    </span>
                  </span>
                </span>
                <span>L A B S</span>
              </div>
              
              {/* Floating dots around text */}
              <div className="absolute -top-1 -right-1 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-300 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
              
              {/* Decorative lines */}
              <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60"></div>
              <div className="absolute -bottom-2 right-0 w-8 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-orange-500 bg-orange-500/10 border border-orange-500/20'
                    : 'text-white hover:text-orange-500 hover:bg-white/5 border border-transparent hover:border-orange-500/20'
                } card-hover`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full animate-float"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-orange-500/10 transition-all duration-300 border border-transparent hover:border-orange-500/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute text-white transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute text-orange-500 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-orange-500/20">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-500 transform ${
                    isActive(item.href)
                      ? 'text-orange-500 bg-orange-500/10 translate-x-4 border border-orange-500/20'
                      : 'text-white hover:text-orange-500 hover:bg-white/5 hover:translate-x-2 border border-transparent hover:border-orange-500/20'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'fadeInLeft 0.6s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
