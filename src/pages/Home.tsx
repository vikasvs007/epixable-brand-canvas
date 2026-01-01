import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Sparkles, Zap, Heart, Rocket, Trophy, Target, Lightbulb, Send, Mail, Phone, User, Building, MessageSquare, Play, ChevronRight, Globe, Award as AwardIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const heroRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const clientsRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const contactRef = useScrollReveal();

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
      color: "from-primary to-primary/80"
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Award-winning designs that captivate",
      color: "from-accent to-accent/80"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "98% success rate with measurable ROI",
      color: "from-primary to-accent"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 15+ countries",
      color: "from-accent to-primary"
    }
  ];

  const stats = [
    { icon: Heart, label: 'Happy Clients', value: '50+', color: 'text-accent' },
    { icon: Rocket, label: 'Projects Completed', value: '30+', color: 'text-primary' },
    { icon: Trophy, label: 'Years Experience', value: '5+', color: 'text-accent' },
    { icon: Target, label: 'Success Rate', value: '98%', color: 'text-primary' },
  ];

  const testimonials = [
    {
      quote: "vertexlabz transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations.",
      author: "Mounesh patter",
      company: "ClickNgro.",
      rating: 5,
    },
    {
      quote: "The team at vertexlabz delivered exceptional results for our marketing campaign. Professional, creative, and reliable.",
      author: "Vinayak",
      company: "Swansorter.",
      rating: 5,
    },
    {
      quote: "Outstanding work! They understood our vision perfectly and brought it to life with incredible precision.",
      author: "Bhanu Prakash",
      company: "SCV Trust.",
      rating: 5,
    },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'End-to-end full-stack web development to build responsive, secure, and high-performance websites and applications.',
      icon: Sparkles,
      gradient: 'from-primary to-primary/80',
      delay: '0ms',
    },
    {
      title: 'AI & ML Solutions',
      description: 'Custom AI and machine learning models that automate processes, uncover insights, and power intelligent applications.',
      icon: Zap,
      gradient: 'from-accent to-accent/80',
      delay: '400ms',
    },
    {
      title: 'Creative Design',
      description: 'Stunning visual designs that capture your brand essence and engage your customers effectively.',
      icon: Lightbulb,
      gradient: 'from-primary to-accent',
      delay: '400ms',
    },
  ];

  const clients = [
    { name: 'ClickNgro', logo: '/ChatGPT Image Jul 25, 2025, 09_21_34 PM.png', website: 'https://www.falconebiz.com/LLP/CLICKNGRO-TECH-SOLUTIONS-LLP-ACM-0691' },
    { name: 'Swansorter', logo: 'https://res.cloudinary.com/dt2juqy9s/image/upload/v1745319822/Logo_img_rxgrwt.png', website: 'https://swansorter.com' },
    { name: 'SCV Trust', logo: '/Blue White Modern school Logo (1).png', website: 'https://chayadevikrpete.com' },
    { name: 'TechCorp', logo: '/techcrop.png', website: 'https://techcorp.com' },
    { name: 'InnovateX', logo: '/inovatex.png', website: 'https://innovatex.com' },
    { name: 'DigitalPro', logo: '/digitalpro.png', website: 'https://www.falconebiz.com/company/DIGITALPRO-EDUTECH-OPC-PRIVATE-LIMITED-U74999DL2017OPC322571' },
  ];

  return (
    <div className="overflow-hidden bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-white text-foreground overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-illustration.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-10 pointer-events-none select-none hidden md:block"
            style={{ zIndex: 1 }}
          />
          <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow top-20 right-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div ref={heroRef} className="scroll-reveal flex flex-col justify-center h-full text-center lg:text-left">
              <div className="inline-flex items-center px-8 py-4 bg-primary/10 shadow-lg backdrop-blur-xl rounded-full mb-8 border-2 border-accent animate-shimmer mt-8">
                <Sparkles className="w-8 h-8 mr-5 text-accent drop-shadow-glow" />
                <span className="text-base md:text-lg font-bold text-foreground tracking-wide">Welcome to the Future of Branding</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
                Elevate Your Brand to
                <span className="block text-gradient animate-fade-in-up mt-4">
                  New Heights
                </span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-muted-foreground animate-fade-in-up leading-relaxed">
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
                            ? 'border-accent/50 bg-accent/10 scale-105'
                            : 'border-border bg-white/50 hover:border-accent/30'
                        }`}
                        onClick={() => setCurrentFeature(index)}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3 mx-auto lg:mx-0`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="group btn-primary px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/our-work"
                  className="group px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105 border border-accent/30 hover:border-accent/50 text-foreground hover:bg-accent/5"
                >
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Side - Animated Visual */}
            <div className="relative flex flex-col items-center justify-center h-full gap-6">
              <div className="relative">
                <div className="w-80 h-80 border-2 border-accent/20 rounded-full animate-pulse"></div>
                <div className="absolute w-60 h-60 border-2 border-primary/20 rounded-full animate-ping"></div>
                <div className="absolute w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-float"></div>
                {/* Floating feature card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-border max-w-xs shadow-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${heroFeatures[currentFeature].color} flex items-center justify-center`}>
                      {React.createElement(heroFeatures[currentFeature].icon, { className: "w-4 h-4 text-white" })}
                    </div>
                    <h3 className="text-foreground font-bold">{heroFeatures[currentFeature].title}</h3>
                  </div>
                  <p className="text-muted-foreground">{heroFeatures[currentFeature].description}</p>
                </div>
                {/* Floating elements */}
                <div className="absolute top-10 right-10 bg-gradient-to-r from-primary to-primary/80 p-3 rounded-full animate-bounce">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-10 left-10 bg-gradient-to-r from-accent to-accent/80 p-3 rounded-full animate-bounce" style={{animationDelay: '1s'}}>
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Numbers that speak for themselves - delivering exceptional results for our clients.
            </p>
          </div>
          
          <div ref={statsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="card-hover bg-white border-border backdrop-blur-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative inline-block mb-6">
                      <Icon className={`w-16 h-16 ${stat.color} mx-auto animate-float`} />
                    </div>
                    <div className="text-5xl font-bold text-gradient mb-3">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-semibold text-lg">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital marketing and branding solutions to help your business thrive in today's competitive landscape.
            </p>
          </div>
          
          <div ref={servicesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group card-hover bg-white border-border backdrop-blur-xl overflow-hidden"
                  style={{ animationDelay: service.delay }}
                >
                  <CardHeader className="pb-4">
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn-primary px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center transform transition-all duration-300 hover:scale-105"
            >
              View All Services 
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-playfair">
              Our Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
              Trusted by leading companies worldwide to deliver exceptional results
            </p>
          </div>
          <div ref={clientsRef} className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {clients.map((client, index) => (
              <div className="flex justify-center" key={index}>
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-48 h-56"
                >
                  <Card className="bg-white border-border backdrop-blur-xl p-0 text-center h-full flex flex-col items-stretch justify-stretch overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-48 h-56">
                    <div className="relative w-full h-full flex-1 flex items-end">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="relative w-full bg-white/90 py-4 px-4 flex flex-col items-center rounded-b-2xl">
                        <h3 className="text-base font-bold text-foreground font-space truncate w-full text-center">
                          {client.name}
                        </h3>
                        <span className="text-sm text-accent inline-flex items-center mt-2">
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-playfair">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground font-inter">Real stories from real people who love what we do</p>
          </div>
          
          <div ref={testimonialsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="card-hover bg-white border-border backdrop-blur-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-accent fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-lg italic leading-relaxed mb-6 font-inter">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4 animate-glow">
                      <span className="text-white font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg font-space">{testimonial.author}</div>
                      <div className="text-muted-foreground font-inter">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={contactRef} className="scroll-reveal">
            <Card className="bg-white border-border backdrop-blur-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Interactive Contact */}
                <div className="p-12 lg:p-16">
                  <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground font-playfair">
                      Let's Start Something Amazing
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 font-inter leading-relaxed">
                      Ready to transform your brand? Let's discuss how we can help you achieve your goals and create something extraordinary together.
                    </p>
                    
                    {/* Contact Methods */}
                    <div className="space-y-6">
                      <a
                        href="mailto:hello@vertexlabz.com"
                        className="group flex items-center space-x-6 p-6 bg-secondary/50 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 border border-border hover:border-accent/40"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 font-space">Email Us</h3>
                          <p className="text-muted-foreground font-inter">hello@vertexlabz.com</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                      
                      <a
                        href="tel:+916363163519"
                        className="group flex items-center space-x-6 p-6 bg-secondary/50 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 border border-border hover:border-accent/40"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Phone className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 font-space">Call Us</h3>
                          <p className="text-muted-foreground font-inter">+91 6363163519</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                      
                      <Link
                        to="/contact"
                        className="group flex items-center space-x-6 p-6 bg-secondary/50 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 border border-border hover:border-accent/40"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Send className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 font-space">Send Message</h3>
                          <p className="text-muted-foreground font-inter">Use our contact form</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Visual Element */}
                <div className="relative lg:block hidden bg-gradient-to-br from-secondary to-accent/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 border-2 border-accent/20 rounded-full animate-pulse"></div>
                    <div className="absolute w-60 h-60 border-2 border-primary/20 rounded-full animate-ping"></div>
                    <div className="absolute w-40 h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white font-playfair">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed font-inter">
            Let's work together to create something extraordinary that drives your business forward and sets you apart from the competition.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center transform transition-all duration-300 hover:scale-105 font-space"
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
