import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Sparkles, Zap, Heart, Rocket, Trophy, Target, Lightbulb, Send, Mail, Phone, User, Building, MessageSquare, Play, ChevronRight, Globe, Award as AwardIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const heroRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const clientsRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const contactRef = useScrollReveal();

  // Auto-revolving carousel for clients
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-cycle through features in hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    {
      icon: Rocket,
      title: "Launch Your Brand",
      description: "From concept to reality in record time",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Award-winning designs that captivate",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "98% success rate with measurable ROI",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 15+ countries",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: Heart, label: 'Happy Clients', value: '50+', color: 'text-orange-500' },
    { icon: Rocket, label: 'Projects Completed', value: '30+', color: 'text-orange-400' },
    { icon: Trophy, label: 'Years Experience', value: '5+', color: 'text-orange-600' },
    { icon: Target, label: 'Success Rate', value: '98%', color: 'text-orange-300' },
  ];

  const testimonials = [
    {
      quote: "vertexlabs transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations.",
      author: "Mounesh patter",
      company: "ClickNgro.",
      rating: 5,
    },
    {
      quote: "The team at vertexlabs delivered exceptional results for our marketing campaign. Professional, creative, and reliable.",
      author: "Vinayak",
      company: "Swansorter.",
      rating: 5,
    },
    {
      quote: "Outstanding work! They understood our vision perfectly and brought it to life with incredible precision.",
      author: "Mrs.Savitha ramesh",
      company: "SCV Trust.",
      rating: 5,
    },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'End-to-end full-stack web development to build responsive, secure, and high-performance websites and applications.',
      icon: Sparkles,
      gradient: 'from-orange-500 to-orange-600',
      delay: '0ms',
    },
    {
      title: 'AI & ML Solutions',
      description: 'Custom AI and machine learning models that automate processes, uncover insights, and power intelligent applications.',
      icon: Zap,
      gradient: 'from-purple-500 to-purple-600',
      delay: '400ms',
    },
    {
      title: 'Creative Design',
      description: 'Stunning visual designs that capture your brand essence and engage your customers effectively.',
      icon: Lightbulb,
      gradient: 'from-orange-600 to-orange-700',
      delay: '400ms',
    },
  ];

  const clients = [
    { name: 'ClickNgro', logo: '/images.jpg', website: 'https://clickngro.com' },
    { name: 'Swansorter', logo: '/images.jpg', website: 'https://swansorter.com' },
    { name: 'SCV Trust', logo: '/images.jpg', website: 'https://scvtrust.com' },
    { name: 'TechCorp', logo: '/images.jpg', website: 'https://techcorp.com' },
    { name: 'InnovateX', logo: '/images.jpg', website: 'https://innovatex.com' },
    { name: 'DigitalPro', logo: '/images.jpg', website: 'https://digitalpro.com' },
  ];

  return (
    <div className="overflow-hidden bg-black">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-glow"
            style={{ 
              left: `${mousePosition.x * 0.02}%`, 
              top: `${mousePosition.y * 0.02}%`,
              transition: 'all 0.5s ease-out'
            }}
          ></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-600/15 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div ref={heroRef} className="scroll-reveal text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-orange-500/20 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[200px_100%]">
                <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-sm font-semibold text-white">Welcome to the Future of Branding</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Elevate Your Brand to
                <span className="block text-gradient animate-fade-in-up mt-4">
                  New Heights ✨
                </span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in-up leading-relaxed">
                Full-service branding and marketing firm dedicated to crafting authentic brand experiences 
                that drive growth and exceptional business success.
              </p>

              {/* Interactive Features Showcase */}
              <div className="mb-12">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {heroFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border transition-all duration-500 cursor-pointer ${
                          currentFeature === index
                            ? 'border-orange-500/50 bg-orange-500/10 scale-105'
                            : 'border-white/10 bg-white/5 hover:border-orange-500/30'
                        }`}
                        onClick={() => setCurrentFeature(index)}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3 mx-auto lg:mx-0`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-400">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                <Link
                  to="/contact"
                  className="group btn-orange px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/our-work"
                  className="group glass-effect text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-orange-500/30 hover:border-orange-500/50"
                >
                  View Our Work
                  <Play className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Side - Interactive Visual */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 border-2 border-orange-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute w-60 h-60 border-2 border-orange-400/30 rounded-full animate-ping"></div>
                  <div className="absolute w-40 h-40 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full animate-float"></div>
                </div>

                {/* Center feature display */}
                <div className="relative z-10 text-center">
                  {(() => {
                    const Icon = heroFeatures[currentFeature].icon;
                    return (
                      <div className={`w-24 h-24 bg-gradient-to-r ${heroFeatures[currentFeature].color} rounded-full flex items-center justify-center mx-auto mb-6 animate-glow transition-all duration-500`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    );
                  })()}
                  <h3 className="text-2xl font-bold text-gradient mb-2">{heroFeatures[currentFeature].title}</h3>
                  <p className="text-gray-300">{heroFeatures[currentFeature].description}</p>
                </div>

                {/* Floating achievement badges */}
                <div className="absolute top-10 right-10 bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full animate-bounce">
                  <AwardIcon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-10 left-10 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full animate-pulse">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full animate-ping">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative inline-block mb-6">
                      <Icon className={`w-16 h-16 ${stat.color} mx-auto animate-float`} />
                      <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-').replace('-500', '-300')} rounded-full blur-lg opacity-30 animate-pulse`}></div>
                    </div>
                    <div className="text-5xl font-bold text-gradient mb-3">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital marketing and branding solutions to help your business thrive in today's competitive landscape.
            </p>
          </div>
          
          <div ref={servicesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl overflow-hidden"
                  style={{ animationDelay: service.delay }}
                >
                  <CardHeader className="pb-4">
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn-orange px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center transform transition-all duration-300 hover:scale-105"
            >
              View All Services 
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Clients Section with Auto-Revolving */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-playfair">
              Our Clients
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
              Trusted by leading companies worldwide to deliver exceptional results
            </p>
          </div>
          
          <div ref={clientsRef} className="scroll-reveal">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {clients.map((client, index) => (
                  <div key={index} className="embla__slide flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl p-6 text-center h-full transform transition-all duration-500 hover:scale-105">
                        <div className="aspect-square flex items-center justify-center mb-4 relative overflow-hidden rounded-lg">
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-300 group-hover:text-orange-400 transition-colors duration-300 font-space">
                          {client.name}
                        </h3>
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-sm text-orange-400 inline-flex items-center">
                            Visit Website 
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </span>
                        </div>
                      </Card>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Auto-play indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span>Auto-rotating every 3 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-playfair">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 font-inter">Real stories from real people who love what we do</p>
          </div>
          
          <div ref={testimonialsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-orange-500 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 text-lg italic leading-relaxed mb-6 font-inter">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4 animate-glow">
                      <span className="text-white font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg font-space">{testimonial.author}</div>
                      <div className="text-gray-400 font-inter">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Contact Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={contactRef} className="scroll-reveal">
            <Card className="gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Interactive Contact */}
                <div className="p-12 lg:p-16">
                  <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-playfair">
                      Let's Start Something Amazing
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 font-inter leading-relaxed">
                      Ready to transform your business? Connect with us and let's create something extraordinary together.
                    </p>

                    {/* Contact Methods */}
                    <div className="space-y-6 mb-12">
                      <a 
                        href="mailto:hello@vertexlabs.com"
                        className="group flex items-center space-x-6 p-6 glass-effect rounded-2xl hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 border border-orange-500/20 hover:border-orange-500/40"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 font-space">Email Us</h3>
                          <p className="text-gray-300 font-inter">hello@vertexlabs.com</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-orange-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>

                      <a 
                        href="tel:+916363163519"
                        className="group flex items-center space-x-6 p-6 glass-effect rounded-2xl hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 border border-orange-500/20 hover:border-orange-500/40"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 font-space">Call Us</h3>
                          <p className="text-gray-300 font-inter">+91 6363163519</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-orange-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>

                      <Link 
                        to="/contact"
                        className="group flex items-center space-x-6 p-6 glass-effect rounded-2xl hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 border border-orange-500/20 hover:border-orange-500/40"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 font-space">Send Message</h3>
                          <p className="text-gray-300 font-inter">Use our contact form</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-orange-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Side - Visual Element */}
                <div className="relative p-12 lg:p-16 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated Circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-80 h-80 border-2 border-orange-500/20 rounded-full animate-pulse"></div>
                      <div className="absolute w-60 h-60 border-2 border-orange-400/30 rounded-full animate-ping"></div>
                      <div className="absolute w-40 h-40 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full animate-float"></div>
                    </div>

                    {/* Center Content */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-glow">
                        <Rocket className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gradient mb-4 font-space">Ready to Launch?</h3>
                      <p className="text-gray-300 font-inter">Your success story starts here</p>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-10 right-10 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-10 left-10 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient font-playfair">
            Ready to Transform Your Brand? 🚀
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed font-inter">
            Let's work together to create something extraordinary that drives your business forward and sets you apart from the competition.
          </p>
          <Link
            to="/contact"
            className="btn-orange px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center transform transition-all duration-300 hover:scale-105 font-space"
          >
            Start Your Project Today 
            <Rocket className="ml-4 w-7 h-7" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
