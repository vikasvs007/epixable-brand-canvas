
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Sparkles, Zap, Heart, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Heart, label: 'Happy Clients', value: '150+', color: 'text-pink-500' },
    { icon: Rocket, label: 'Projects Completed', value: '500+', color: 'text-blue-500' },
    { icon: Sparkles, label: 'Years Experience', value: '10+', color: 'text-purple-500' },
  ];

  const testimonials = [
    {
      quote: "Epixable transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
    },
    {
      quote: "The team at Epixable delivered exceptional results for our marketing campaign. Professional, creative, and reliable.",
      author: "Michael Chen",
      company: "Global Innovations",
      rating: 5,
    },
  ];

  const services = [
    {
      title: 'Brand Strategy',
      description: 'Comprehensive brand development and positioning strategies that resonate with your target audience.',
      icon: Sparkles,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      delay: '0ms',
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, Google Ads, and social media marketing campaigns that drive measurable results.',
      icon: Zap,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      delay: '200ms',
    },
    {
      title: 'Creative Design',
      description: 'Stunning visual designs that capture your brand essence and engage your customers.',
      icon: Heart,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      delay: '400ms',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ 
              left: `${mousePosition.x * 0.02}%`, 
              top: `${mousePosition.y * 0.02}%`,
              transition: 'all 0.3s ease-out'
            }}
          ></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl animate-bounce-gentle"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div ref={heroRef} className="scroll-reveal">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Welcome to the Future of Branding</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Elevate Your Brand to
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fade-in-up">
                New Heights ✨
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 animate-fade-in-up">
              Full-service branding and marketing firm dedicated to crafting authentic brand experiences 
              that drive growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link
                to="/contact"
                className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center btn-magnetic animate-pulse-glow"
              >
                Get Started 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/gallery"
                className="group glass-effect text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 btn-magnetic"
              >
                View Our Work
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <stat.icon className={`w-16 h-16 ${stat.color} mx-auto animate-bounce-gentle`} />
                  <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-').replace('-500', '-200')} rounded-full blur-lg opacity-30 animate-pulse`}></div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital marketing and branding solutions to help your business thrive.
            </p>
          </div>
          
          <div ref={servicesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover-lift transition-all duration-500 border border-gray-100"
                style={{ animationDelay: service.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 btn-magnetic animate-pulse-glow"
            >
              View All Services 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Real stories from real people who love what we do</p>
          </div>
          
          <div ref={testimonialsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg hover-lift glass-effect"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300/10 rounded-full blur-3xl animate-bounce-gentle"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Brand? 🚀
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Let's work together to create something extraordinary that drives your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-10 py-5 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 btn-magnetic animate-pulse-glow text-lg"
          >
            Start Your Project 
            <Rocket className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
