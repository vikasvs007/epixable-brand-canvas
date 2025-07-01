
import React from 'react';
import { Sparkles, Eye, ArrowRight, Zap, Lightbulb, Users, Target, TrendingUp, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const OurWork = () => {
  const heroRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const portfolioRef = useScrollReveal();
  const featuredRef = useScrollReveal();

  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web development with modern technologies, responsive design, and optimized performance for all devices.',
      icon: Zap,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimization']
    },
    {
      title: 'AI & ML Solutions',
      description: 'Custom artificial intelligence and machine learning solutions to automate processes and gain valuable insights.',
      icon: Target,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Custom AI Models']
    },
    {
      title: 'Creative Design',
      description: 'Stunning visual designs that capture your brand essence and create memorable user experiences.',
      icon: Palette,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      features: ['Brand Identity', 'UI/UX Design', 'Graphic Design', 'Motion Graphics']
    },
    {
      title: 'Social Media Management',
      description: 'Complete social media strategy and management to grow your online presence and engage with your audience.',
      icon: TrendingUp,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      features: ['Content Strategy', 'Community Management', 'Analytics & Reporting', 'Paid Advertising']
    }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with AI-powered recommendations',
      category: 'Web Development',
      images: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
      ],
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights',
      category: 'AI & ML Solutions',
      images: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
      ],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity and visual design system',
      category: 'Creative Design',
      images: [
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
      ],
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Social Media Campaign',
      description: 'Viral social media campaign with 2M+ engagement',
      category: 'Social Media Management',
      images: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop'
      ],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application with native performance',
      category: 'Web Development',
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
      ],
      gradient: 'from-orange-400 to-orange-500',
    },
    {
      title: 'Predictive Analytics System',
      description: 'Machine learning system for business forecasting',
      category: 'AI & ML Solutions',
      images: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
      ],
      gradient: 'from-purple-600 to-purple-700',
    },
  ];

  const categories = ['All', 'Web Development', 'AI & ML Solutions', 'Creative Design', 'Social Media Management'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-glow top-20 right-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div ref={heroRef} className="scroll-reveal">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-orange-500/20">
              <Eye className="w-5 h-5 mr-3 text-orange-500" />
              <span className="text-sm font-semibold text-white">Showcase of Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              Our Creative
              <span className="block text-gradient animate-fade-in-up mt-4">
                Portfolio ✨
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Explore our collection of award-winning projects and comprehensive services 
              that have helped brands make lasting impressions and achieve exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div ref={servicesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group card-hover gradient-border bg-black/50 ${service.borderColor} backdrop-blur-xl overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border ${service.borderColor}`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  
                  <CardTitle className={`text-2xl font-bold text-white group-hover:${service.color} transition-colors duration-300`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className={`${service.bgColor} px-3 py-2 rounded-lg text-sm ${service.color} border ${service.borderColor} text-center font-medium`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className={`w-6 h-6 ${service.color}`} />
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

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Browse through our recent projects and success stories
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'btn-orange shadow-lg'
                    : 'glass-effect text-white hover:bg-orange-500/10 hover:text-orange-400 border border-orange-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={portfolioRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Carousel */}
                <div className="aspect-video relative overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className="aspect-video">
                            <img
                              src={image}
                              alt={`${project.title} - Image ${imageIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-black/50 border-orange-500/30 text-white hover:bg-orange-500/20" />
                    <CarouselNext className="right-2 bg-black/50 border-orange-500/30 text-white hover:bg-orange-500/20" />
                  </Carousel>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-sm font-medium animate-glow`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A closer look at some of our most impactful projects and the stories behind them.
            </p>
          </div>

          <div ref={featuredRef} className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl m-6 mb-0 flex items-center justify-center animate-glow overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
                  alt="Award-Winning Campaign"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gradient">Award-Winning Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This comprehensive branding campaign helped our client increase brand recognition by 300% 
                  and generated over $2M in additional revenue within the first quarter.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30">Branding</span>
                  <span className="bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-400/30">Marketing</span>
                  <span className="bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full text-sm border border-orange-600/30">Strategy</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl m-6 mb-0 flex items-center justify-center animate-glow overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                  alt="Innovation in Motion"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gradient">Innovation in Motion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our cutting-edge AI solutions brought this tech product to life, 
                  resulting in a 150% increase in customer engagement and viral social media presence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-400/30">AI Solutions</span>
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30">Innovation</span>
                  <span className="bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full text-sm border border-orange-600/30">Analytics</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-orange-500/10 backdrop-blur-xl rounded-full mb-8 border border-orange-500/20">
            <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
            <span className="text-sm font-semibold text-white">Ready to Start Your Project?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Let's Create Something
            <span className="block text-gradient">Amazing Together</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss how we can help you achieve 
            your creative goals and make your brand stand out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-orange px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="glass-effect px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 border border-orange-500/30 text-white hover:text-orange-400"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
