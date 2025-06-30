
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'AIML',
    'Graphic Design',
    'Web Development',
    'Social Media',
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-4 group">
            {/* Logo Image - larger and circular */}
            <img
              src="/Logo - VertexLabs.jpg"
              alt="Vertex Labs Logo"
              className="h-16 w-16 object-contain rounded-full border-2 border-orange-500 shadow-md"
              style={{ background: 'transparent' }}
            />
              {/* <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
              </div> */}
              <span className="text-3xl font-bold text-gradient font-playfair">
                VertexLabs
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
            We are a full-service firm specializing in full-stack web development, AI/ML solutions,Social media management and creative design.
            </p>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>hello@vertexlabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+91 6363163519</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Mysore,India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gradient font-space">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group"
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">{link.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gradient font-space">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 VertexLabs. All rights reserved.
            </p>
         
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
