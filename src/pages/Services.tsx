
import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Target, Zap, Lightbulb, Palette, Code, BarChart } from 'lucide-react';
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
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that deliver measurable results.',
      icon: Zap,
      features: [
        'Search Engine Optimization (SEO)',
        'Google Ads and PPC campaigns',
        'Social media marketing',
        'Content marketing strategy',
        'Email marketing automation',
      ],
      gradient: 'from-orange-400 to-orange-500',
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
      title: 'Content Creation',
      description: 'Engaging content that tells your story and connects with audiences.',
      icon: Lightbulb,
      features: [
        'Video production and editing',
        'Photography and visual content',
        'Copywriting and content strategy',
        'Social media content creation',
        'Blog and article writing',
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
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      step: '02',
      title: 'Creative Development',
      description: 'Our team creates compelling designs and content that align with your brand and objectives.',
      gradient: 'from-orange-400 to-orange-500',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy across all channels, ensuring consistent brand experience.',
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor, analyze, and optimize performance to maximize your ROI.',
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

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </div>

          <div ref={processRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card 
                key={index} 
                className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl text-center relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} text-white rounded-full text-xl font-bold mb-6 mx-auto animate-glow`}>
                    {item.step}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">{item.description}</CardDescription>
                </CardContent>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 transform -translate-x-8"></div>
                    <ArrowRight className="absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 text-orange-500" />
                  </div>
                )}
              </Card>
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
                  <span className="text-4xl font-bold text-gradient">$5K+</span>
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
                  <span className="text-4xl font-bold text-gradient">$200</span>
                  <p className="text-gray-400 mt-2">Per hour</p>
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
              to="/gallery"
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
