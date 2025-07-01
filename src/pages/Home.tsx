import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Sparkles, Zap, Heart, Rocket, Trophy, Target, Lightbulb, Send, Mail, Phone, User, Building, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const heroRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const clientsRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const enquiryRef = useScrollReveal();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Enquiry Sent!",
          description: "Thank you for your enquiry. We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send enquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    { name: 'ClickNgro', logo: '/images.jpg' },
    { name: 'Swansorter', logo: '/images.jpg' },
    { name: 'SCV Trust', logo: '/images.jpg' },
    { name: 'TechCorp', logo: '/images.jpg' },
    { name: 'InnovateX', logo: '/images.jpg' },
    { name: 'DigitalPro', logo: '/images.jpg' },
  ];

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div ref={heroRef} className="scroll-reveal">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-orange-500/20 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[200px_100%]">
              <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
              <span className="text-sm font-semibold text-white">Welcome to the Future of Branding</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Elevate Your Brand to
              <span className="block text-gradient animate-fade-in-up mt-4">
                New Heights ✨
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-fade-in-up leading-relaxed">
              Full-service branding and marketing firm dedicated to crafting authentic brand experiences 
              that drive growth and exceptional business success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <Link
                to="/contact"
                className="group btn-orange px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/our-work"
                className="group glass-effect text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-orange-500/30 hover:border-orange-500/50"
              >
                View Our Work
                <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative inline-block mb-6">
                    <stat.icon className={`w-16 h-16 ${stat.color} mx-auto animate-float`} />
                    <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-').replace('-500', '-300')} rounded-full blur-lg opacity-30 animate-pulse`}></div>
                  </div>
                  <div className="text-5xl font-bold text-gradient mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
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
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl overflow-hidden"
                style={{ animationDelay: service.delay }}
              >
                <CardHeader className="pb-4">
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                    <service.icon className="w-10 h-10 text-white" />
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
            ))}
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

      {/* Our Clients Section */}
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
          
          <div ref={clientsRef} className="scroll-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <Card 
                key={index} 
                className="group card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-orange-400 transition-colors duration-300 font-space">
                  {client.name}
                </h3>
              </Card>
            ))}
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

      {/* Enquiry Form Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-playfair">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 font-inter">
              Ready to start your project? Send us an enquiry and we'll get back to you within 24 hours.
            </p>
          </div>

          <div ref={enquiryRef} className="scroll-reveal">
            <Card className="gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl p-8 md:p-12">
              <form onSubmit={handleEnquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                      placeholder="+91 1234567890"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                      <Building className="inline w-4 h-4 mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                      placeholder="Your company name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-white placeholder-gray-400 font-inter"
                    placeholder="Tell us about your project requirements..."
                    disabled={isSubmitting}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-orange px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center font-space disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </div>
              </form>
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
