
import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Target, Zap, Lightbulb, Palette, Code, BarChart, Instagram, Search, Users, FileText, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Services = () => {
  const heroRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const processRef = useScrollReveal();
  const pricingRef = useScrollReveal();

  const services = [
    {
      title: 'Brand Strategy & Identity',
      description: 'Comprehensive brand development from strategy to visual identity.',
      icon: Target,
      features: [
        'Brand positioning and messaging',
        'Logo and visual identity design',
        'Brand guidelines and style guides',
        'Brand voice and tone development',
        'Competitive analysis and research',
      ],
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Creative Design',
      description: 'Stunning visual designs that capture attention and drive engagement.',
      icon: Palette,
      features: [
        'Graphic design and illustrations',
        'Web and mobile UI/UX design',
        'Print and digital collateral',
        'Packaging and product design',
        'Animation and motion graphics',
      ],
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built for performance and conversion.',
      icon: Code,
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Mobile app development',
        'CMS integration and training',
        'Performance optimization',
      ],
      gradient: 'from-orange-300 to-orange-400',
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media solutions to grow your audience and build brand loyalty.',
      icon: Instagram,
      features: [
        'Content planning and scheduling',
        'Community engagement and moderation',
        'Social media advertising campaigns',
        'Performance analytics and reporting',
        'Influencer outreach and collaborations'
      ],
      gradient: 'from-orange-600 to-orange-700',
    },    
    {
      title: 'AIML',
      description: 'Advanced AI/ML solutions that transform data into actionable insights.',
      icon: Lightbulb,
      features: [
        'Custom machine learning model development',
        'Data preprocessing and feature engineering',
        'Predictive analytics and forecasting',
        'Natural language processing solutions',
        'Computer vision applications'
      ],
      gradient: 'from-orange-500 to-orange-400',
    },
    {
      title: 'Analytics & Optimization',
      description: 'Data-driven insights to continuously improve your marketing performance.',
      icon: BarChart,
      features: [
        'Google Analytics setup and monitoring',
        'Conversion rate optimization',
        'A/B testing and experimentation',
        'Performance reporting and insights',
        'ROI tracking and analysis',
      ],
      gradient: 'from-orange-700 to-orange-600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business, goals, and target audience to develop a comprehensive strategy.',
      icon: Search,
      details: [
        'Comprehensive business analysis and competitor research',
        'Target audience identification and persona development',
        'Market positioning and brand strategy formulation',
        'Goal setting and KPI definition for measurable success',
        'Technical requirements assessment and feasibility study'
      ],
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      step: '02',
      title: 'Creative Development',
      description: 'Our team creates compelling designs and content that align with your brand and objectives.',
      icon: Palette,
      details: [
        'Creative concept development and visual identity design',
        'Content strategy and copywriting for all touchpoints',
        'Wireframing and prototyping for digital experiences',
        'Brand asset creation including logos, colors, and typography',
        'User experience design focused on conversion optimization'
      ],
      gradient: 'from-orange-400 to-orange-500',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy across all channels, ensuring consistent brand experience.',
      icon: Code,
      details: [
        'Full-stack development with modern technologies and frameworks',
        'Cross-platform deployment ensuring optimal performance',
        'Integration with third-party tools and analytics platforms',
        'Quality assurance testing across devices and browsers',
        'Content management system setup and team training'
      ],
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor, analyze, and optimize performance to maximize your ROI.',
      icon: TrendingUp,
      details: [
        'Performance monitoring and real-time analytics tracking',
        'A/B testing and conversion rate optimization campaigns',
        'Regular strategy refinement based on market feedback',
        'Detailed reporting and insights for informed decision making',
        'Ongoing support and maintenance for sustained growth'
      ],
      gradient: 'from-orange-300 to-orange-400',
    },
  ];

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
              <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
              <span className="text-sm font-semibold text-white">Premium Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              Our
              <span className="block text-gradient animate-fade-in-up mt-4">
                Services ✨
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Comprehensive digital marketing and branding solutions designed to help your business 
              thrive in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure every project delivers exceptional results and exceeds your expectations.
            </p>
          </div>

          <div ref={processRef} className="scroll-reveal space-y-16">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <Card 
                  className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Left Side - Step Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} text-white rounded-full text-xl font-bold flex items-center justify-center animate-glow`}>
                          {item.step}
                        </div>
                        <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center animate-glow`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4 font-playfair">{item.title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-inter">{item.description}</p>
                      </div>
                    </div>

                    {/* Right Side - Detailed Features */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gradient mb-4 font-space">What We Deliver:</h4>
                      <ul className="space-y-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 leading-relaxed font-inter">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We offer various engagement models to fit your budget and project requirements.
            </p>
          </div>

          <div ref={pricingRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Project-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Perfect for specific campaigns or one-time projects with defined scope and timeline.
                </p>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient">Custom</span>
                  <p className="text-gray-400 mt-2">Quote based on requirements</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-gradient-to-br from-orange-600/20 to-orange-500/20 border-orange-400/40 backdrop-blur-xl text-center transform scale-105 animate-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Monthly Retainer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ongoing partnership for continuous marketing support and brand development.
                </p>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient">5K+</span>
                  <p className="text-gray-300 mt-2">Per month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Strategic guidance and expert advice to help you make informed decisions.
                </p>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient">Custom</span>
                  <p className="text-gray-400 mt-2">Quote based on kind of Consultation</p>
                </div>
              </CardContent>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Ready to Get Started? 🚀
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Let's discuss your project and create a custom solution that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="btn-orange px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
            >
              Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link
              to="/our-work"
              className="glass-effect text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
