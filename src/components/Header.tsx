import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group relative z-50">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-full p-0.5 shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/Logo - VertexLabs.jpg"
                    alt="VertexLabz Logo"
                    className="h-8 w-8 sm:h-12 sm:w-12 object-contain rounded-full border-2 border-accent shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            
            <div className="relative flex items-center">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat font-bold text-primary group-hover:text-accent transition-colors duration-300 tracking-wide whitespace-nowrap">
                VERTEX<span className="text-accent">LABZ</span>
              </span>
              
              {/* Animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center px-4 xl:px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-accent bg-accent/10 border border-accent/20'
                          : 'text-foreground hover:text-accent hover:bg-secondary border border-transparent hover:border-accent/20'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-primary/10 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-2">
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={dropdownItem.href}
                                  className="block px-4 py-3 text-sm text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-accent/20"
                                >
                                  {dropdownItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative px-4 xl:px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-accent bg-accent/10 border border-accent/20'
                        : 'text-foreground hover:text-accent hover:bg-secondary border border-transparent hover:border-accent/20'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="ml-4 btn-primary px-5 xl:px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 inline-flex items-center"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden relative p-2.5 rounded-xl hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <motion.div
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1 left-0 w-6 h-0.5 bg-foreground rounded-full"
              />
              <motion.div
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-3 left-0 w-6 h-0.5 bg-foreground rounded-full"
              />
              <motion.div
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-5 left-0 w-6 h-0.5 bg-foreground rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden fixed inset-0 z-40 bg-background"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col justify-center items-center min-h-screen px-6 pt-20">
              <nav className="flex flex-col space-y-4 text-center w-full max-w-sm">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`flex items-center justify-center w-full text-xl sm:text-2xl font-bold rounded-2xl px-6 py-4 transition-all duration-300 ${
                            isActive(item.href)
                              ? 'text-accent bg-accent/10 border-2 border-accent'
                              : 'text-foreground hover:text-accent bg-secondary/50 border-2 border-border hover:border-accent/30'
                          }`}
                        >
                          {item.name}
                          <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 space-y-2 overflow-hidden"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="block text-base sm:text-lg text-foreground hover:text-accent bg-background rounded-xl px-4 py-3 transition-all duration-300 border border-border hover:border-accent/30"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block text-xl sm:text-2xl font-bold rounded-2xl px-6 py-4 transition-all duration-300 ${
                          isActive(item.href)
                            ? 'text-accent bg-accent/10 border-2 border-accent'
                            : 'text-foreground hover:text-accent bg-secondary/50 border-2 border-border hover:border-accent/30'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  custom={navigation.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    className="btn-primary px-8 py-4 text-lg font-bold rounded-2xl inline-flex items-center justify-center w-full shadow-lg shadow-primary/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
