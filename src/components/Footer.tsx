import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'AI & ML Solutions',
    'Web Development',
    'Creative Design',
    'Social Media Management',
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/vertexlabs', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/vertexlabs', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/vertexlabs', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/vertexlabs', icon: Twitter },
    { name: 'YouTube', href: 'https://youtube.com/@vertexlabs', icon: Youtube },
  ];

  return (
    <footer className="bg-gradient-to-t from-[#003366] to-[#002244] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#90D2B5]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#A3C7D2]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-4 group mb-6">
              <img
                src="/Logo - VertexLabs.jpg"
                alt="Vertex Labs Logo"
                className="h-16 w-16 object-contain rounded-full border-2 border-[#90D2B5] shadow-md"
                style={{ background: 'transparent' }}
              />
              <span className="text-3xl font-bold text-gradient font-playfair">
                VertexLabs
              </span>
            </Link>
            
            <p className="text-[#EEF2F5] mb-6 max-w-md text-lg leading-relaxed font-inter">
              We are a full-service firm specializing in full-stack web development, AI/ML solutions, social media management and creative design.
            </p>
            
            <div className="space-y-3 text-[#EEF2F5] mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#90D2B5]" />
                <a 
                  href="mailto:vertexlabss@gmail.com" 
                  className="font-inter hover:text-[#90D2B5] transition-colors duration-300"
                >
                   vertexlabss@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#90D2B5]" />
                <a 
                  href="tel:+916363163519" 
                  className="font-inter hover:text-[#90D2B5] transition-colors duration-300"
                >
                  +91 6363163519
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#90D2B5]" />
                <span className="font-inter">Mysore, India</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-extrabold mb-4 text-[#90D2B5] font-space drop-shadow-md">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-gradient-to-r from-[#90D2B5]/20 to-[#A3C7D2]/20 rounded-full flex items-center justify-center border border-[#90D2B5]/30 hover:border-[#90D2B5]/60 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#90D2B5]/40 hover:to-[#A3C7D2]/40"
                  >
                    <social.icon className="w-5 h-5 text-[#EEF2F5] group-hover:text-[#90D2B5] transition-colors duration-300" />
                  </a>
                ))}
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
                    className="text-[#EEF2F5] hover:text-[#90D2B5] transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center group font-inter"
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
                <li key={service} className="text-[#EEF2F5] hover:text-[#90D2B5] transition-colors duration-300 cursor-pointer font-inter">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#90D2B5]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#999999] text-center md:text-left font-inter">
              &copy; 2025 VertexLabs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-[#999999] hover:text-[#90D2B5] transition-colors duration-300 font-inter">Privacy Policy</Link>
              <Link to="#" className="text-[#999999] hover:text-[#90D2B5] transition-colors duration-300 font-inter">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
