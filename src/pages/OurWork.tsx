import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Sparkles, ExternalLink, Star, Users, TrendingUp, Award, Filter, X, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const heroRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const featuredRef = useScrollReveal();

  const categories = [
    { name: 'All', color: 'text-accent', bgColor: 'bg-accent/10', borderColor: 'border-accent/20' },
    { name: 'Web Development', color: 'text-primary', bgColor: 'bg-primary/10', borderColor: 'border-primary/20' },
    { name: 'AI & ML', color: 'text-accent', bgColor: 'bg-accent/10', borderColor: 'border-accent/20' },
    { name: 'Design', color: 'text-primary', bgColor: 'bg-primary/10', borderColor: 'border-primary/20' },
    { name: 'Marketing', color: 'text-accent', bgColor: 'bg-accent/10', borderColor: 'border-accent/20' },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      icon: '💻',
      gradient: 'from-primary to-primary/80',
      projects: 12,
      successRate: '98%',
      borderColor: 'border-primary/20'
    },
    {
      title: 'AI & ML Solutions',
      description: 'Custom artificial intelligence and machine learning solutions that drive business growth.',
      icon: '🤖',
      gradient: 'from-accent to-accent/80',
      projects: 8,
      successRate: '95%',
      borderColor: 'border-accent/20'
    },
    {
      title: 'Creative Design',
      description: 'Stunning visual designs that capture your brand essence and engage your audience.',
      icon: '🎨',
      gradient: 'from-primary to-accent',
      projects: 15,
      successRate: '100%',
      borderColor: 'border-primary/20'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that deliver measurable results and ROI.',
      icon: '📈',
      gradient: 'from-accent to-primary',
      projects: 20,
      successRate: '92%',
      borderColor: 'border-accent/20'
    },
    {
      title: 'Customized Chatbots',
      description: 'Intelligent, conversational chatbots tailored to your business needs.',
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      gradient: 'from-primary to-accent',
      projects: 10,
      successRate: '99%',
      borderColor: 'border-accent/20'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced features including AI-powered recommendations.',
      image: '/techcrop.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechCorp',
      duration: '3 months',
      results: '40% increase in sales'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI & ML',
      description: 'An intelligent analytics platform that provides real-time insights and predictive analytics.',
      image: 'https://res.cloudinary.com/dt2juqy9s/image/upload/v1745319822/Logo_img_rxgrwt.png',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      client: 'SwansorterAdminDashboard',
      duration: '4 months',
      results: '60% faster insights'
    },
    {
      id: 3,
      title: 'VertexLabz Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity redesign including logo, color palette, and brand guidelines.',
      image: '/Logo - VertexLabs.png',
      technologies: ["Figma", "Adobe Creative Suite", "Brand Strategy"],
      client: 'VertexLabz',
      duration: '2 months',
      results: '200% brand recognition'
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      description: 'Comprehensive digital marketing campaign across multiple channels.',
      image: '/inovatex.png',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics'],
      client: 'GrowthCo',
      duration: '6 months',
      results: '150% ROI increase'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      category: 'Web Development',
      description: 'Cross-platform mobile application with offline capabilities.',
      image: '/mobilefirst.png',
      technologies: ['React Native', 'Firebase', 'Redux'],
      client: 'MobileFirst',
      duration: '5 months',
      results: '50K+ downloads'
    },
    {
      id: 6,
      title: 'Machine Learning Model',
      category: 'AI & ML',
      description: 'Custom ML model for predictive maintenance in manufacturing.',
      image: '/swan.png',
      technologies: ['Python', 'Scikit-learn', 'Docker'],
      client: 'ManufacturePro',
      duration: '3 months',
      results: '70% downtime reduction'
    }
  ];

  const featuredProjects = [
    {
      title: 'ClickNgro - Complete Digital Transformation',
      description: 'A comprehensive digital transformation project that included website redesign and marketing strategy.',
      image: '/ChatGPT Image Jul 25, 2025, 09_21_34 PM.png',
      tags: ['Branding', 'Marketing', 'Strategy'],
      results: '300% increase in online leads'
    },
    {
      title: 'Swansorter - AI-Powered Sorting System',
      description: 'An innovative AI-powered sorting system that revolutionized the client\'s manufacturing process.',
      image: '/swan.png',
      tags: ['AI Solutions', 'Innovation', 'Analytics'],
      results: '80% efficiency improvement'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-white text-foreground overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <img
            src="/work-illustration.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-10 pointer-events-none select-none hidden md:block"
            style={{ zIndex: 1 }}
            alt="Our Work Illustration"
          />
          <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow top-20 right-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div ref={heroRef} className="scroll-reveal">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 backdrop-blur-xl rounded-full mb-8 border border-accent/20">
              <Eye className="w-5 h-5 mr-3 text-accent" />
              <span className="text-sm font-semibold text-foreground">Our Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Our
              <span className="block text-gradient mt-4">
                Amazing Work
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="group px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105 border border-accent/30 hover:border-accent/50 text-foreground hover:bg-accent/5"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in delivering exceptional results across multiple disciplines.
            </p>
          </div>

          <div ref={servicesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group card-hover bg-white ${service.borderColor} backdrop-blur-xl overflow-hidden`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                    {typeof service.icon === 'string' ? <span className="text-3xl">{service.icon}</span> : service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Projects</span>
                      <span className="text-accent font-bold">{service.projects}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Success Rate</span>
                      <span className="text-accent font-bold">{service.successRate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn-primary px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center transform transition-all duration-300 hover:scale-105"
            >
              Explore All Services 
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.name
                    ? 'btn-primary shadow-lg'
                    : 'bg-secondary text-foreground hover:bg-accent/10 hover:text-accent border border-border'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={projectsRef} className="scroll-reveal">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                    key={project.id}
                    className="group card-hover bg-white border-border backdrop-blur-xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                    <div className="aspect-video bg-gradient-to-br from-accent to-primary rounded-xl m-6 mb-0 flex items-center justify-center animate-glow overflow-hidden">
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                </div>

                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                
                      <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>{project.client}</span>
                          <span>{project.duration}</span>
                        </div>
                        
                        <div className="text-accent font-semibold">
                          {project.results}
                        </div>
                      </div>
                </CardContent>
              </Card>
            ))}
          </div>
            ) : (
            <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No projects found for this category.</p>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These standout projects showcase our expertise and the exceptional results we deliver.
            </p>
          </div>

          <div ref={featuredRef} className="scroll-reveal space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="card-hover bg-white border-border backdrop-blur-xl">
                <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-xl m-6 mb-0 flex items-center justify-center animate-glow overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-accent font-bold text-lg">
                    {project.results}
                  </div>
                </CardContent>
              </Card>
            ))}
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed">
            Let's create something extraordinary together. Contact us today to discuss your ideas.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center transform transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-4 w-7 h-7" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
