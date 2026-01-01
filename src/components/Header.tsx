import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Work', href: '/our-work' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Web Development', href: '/services#web-development' },
        { name: 'AI & ML Solutions', href: '/services#ai-ml' },
        { name: 'Creative Design', href: '/services#design' },
        { name: 'Social Media Management', href: '/services#social-media' },
      ]
    },
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-border' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative z-50">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full p-0.5 shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/Logo - VertexLabs.jpg"
                    alt="VertexLabz Logo"
                    className="h-12 w-12 object-contain rounded-full border-2 border-accent shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative flex items-center">
              <span className="flex items-center space-x-0.5 text-2xl sm:text-3xl font-montserrat font-bold text-primary group-hover:text-accent transition-colors duration-300">
                <span className="tracking-wider">V E R T E</span>
                <span className="relative inline-block w-6 h-6 sm:w-7 sm:h-7 align-middle mx-1">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="block w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-primary to-accent rotate-45 rounded-sm group-hover:rotate-[225deg] transition-transform duration-500 shadow-lg"></span>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-white text-4xl sm:text-5xl font-playfair font-extrabold drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
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
                <span className="tracking-wider">L A B Z</span>
              </span>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
              
              {/* Floating particles */}
              <div className="absolute -top-1 -right-1 w-1 h-1 bg-accent rounded-full animate-ping opacity-60 group-hover:opacity-100"></div>
              <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-primary rounded-full animate-ping opacity-60 group-hover:opacity-100" style={{animationDelay: '1s'}}></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-accent bg-accent/10 border border-accent/20'
                          : 'text-foreground hover:text-accent hover:bg-secondary border border-transparent hover:border-accent/20'
                      } card-hover`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl transition-all duration-300 ${
                        activeDropdown === item.name 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-accent/20"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-accent bg-accent/10 border border-accent/20'
                        : 'text-foreground hover:text-accent hover:bg-secondary border border-transparent hover:border-accent/20'
                    } card-hover`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 btn-primary px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative p-3 rounded-xl hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute text-foreground transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute text-accent transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                }`} 
              />
            </div>
          </button>

          {/* Mobile Navigation Overlay */}
          <div className={`lg:hidden fixed inset-0 z-[9999] bg-white shadow-2xl border-t-4 border-accent transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {/* Always visible close button in top-right */}
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-accent hover:bg-accent/80 text-white shadow-lg z-[10000] transition-all duration-300 border-2 border-primary"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              style={{fontSize: 24, lineHeight: 1}}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col justify-center items-center min-h-screen px-6">
              <nav className="flex flex-col space-y-8 text-center w-full max-w-xs mx-auto mt-16">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`flex items-center justify-center w-full text-2xl font-bold rounded-lg px-4 py-3 transition-all duration-500 transform border-2 ${
                            isActive(item.href)
                              ? 'text-accent scale-110 bg-accent/10 border-accent'
                              : 'text-foreground hover:text-accent hover:scale-105 bg-secondary border-border'
                          }`}
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                          }}
                        >
                          {item.name}
                          <ChevronDown className={`ml-2 w-6 h-6 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <div className={`mt-2 space-y-2 transition-all duration-300 w-full ${
                          activeDropdown === item.name ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                        }`}>
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block text-lg text-foreground hover:text-accent bg-secondary rounded-md px-4 py-3 transition-colors duration-300 border-2 border-border hover:border-accent"
                              onClick={() => setIsMenuOpen(false)}
                              style={{ animationDelay: `${(index + dropIndex) * 50}ms` }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block text-2xl font-bold rounded-lg px-4 py-3 transition-all duration-500 transform border-2 ${
                          isActive(item.href)
                            ? 'text-accent scale-110 bg-accent/10 border-accent'
                            : 'text-foreground hover:text-accent hover:scale-105 bg-secondary border-border'
                        }`}
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  className="btn-primary px-8 py-4 text-lg font-bold rounded-xl inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105 mt-8 shadow-lg border-2 border-accent"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${navigation.length * 100}ms`,
                    animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
