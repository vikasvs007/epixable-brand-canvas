import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle, Code, Brain, Palette, Share2, Zap, Shield, Globe, Smartphone, BarChart3, Users, Target, Award, Star, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Services = () => {
  const heroRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const processRef = useScrollReveal();
  const pricingRef = useScrollReveal();

  const mainServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web development with modern technologies and best practices.',
      gradient: 'from-[#003366] to-[#004080]',
      features: ['Responsive Design', 'E-commerce Solutions', 'Custom CMS', 'API Integration', 'Performance Optimization', 'SEO Optimization'],
      details: [
        'Modern React/Next.js frontend development',
        'Node.js/Python backend development',
        'Database design and optimization',
        'Third-party API integrations',
        'Performance and security optimization',
        'Deployment and maintenance'
      ]
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Custom artificial intelligence and machine learning solutions for business automation.',
      gradient: 'from-[#90D2B5] to-[#A3C7D2]',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automation', 'Data Analysis', 'Custom Models'],
      details: [
        'Custom AI model development',
        'Machine learning pipeline design',
        'Data preprocessing and analysis',
        'Model training and optimization',
        'API development for AI services',
        'Integration with existing systems'
      ]
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Stunning visual designs that capture your brand essence and engage your audience.',
      gradient: 'from-[#049E8A] to-[#038A76]',
      features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Marketing', 'Logo Design', 'Visual Strategy'],
      details: [
        'Complete brand identity design',
        'User interface and experience design',
        'Print and digital marketing materials',
        'Logo and visual asset creation',
        'Design system development',
        'Creative strategy and consultation'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Comprehensive social media management to build your online presence and engage your audience.',
      gradient: 'from-[#A3C7D2] to-[#8FB8C5]',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics', 'Strategy Development', 'Brand Monitoring'],
      details: [
        'Content strategy and creation',
        'Community engagement and management',
        'Paid social media advertising',
        'Performance analytics and reporting',
        'Social media strategy development',
        'Brand reputation monitoring'
      ]
    },
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies to grow your business and reach your target audience.',
      gradient: 'from-[#BFCC80] to-[#A3C7D2]',
      features: ['SEO Optimization', 'PPC Campaigns', 'Email Marketing', 'Content Marketing', 'Analytics', 'Conversion Optimization'],
      details: [
        'Search engine optimization (SEO)',
        'Pay-per-click (PPC) advertising',
        'Email marketing campaigns',
        'Content marketing strategy',
        'Marketing analytics and reporting',
        'Conversion rate optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets and ensure data privacy.',
      gradient: 'from-[#FF8873] to-[#FEBE9F]',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response', 'Security Training', 'Risk Assessment'],
      details: [
        'Security vulnerability assessments',
        'Penetration testing and ethical hacking',
        'Compliance and regulatory support',
        'Incident response planning',
        'Security awareness training',
        'Risk assessment and mitigation'
      ]
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
      gradient: 'from-[#003366] to-[#004080]',
    },
    {
      icon: Users,
      title: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your specific needs and objectives.',
      gradient: 'from-[#90D2B5] to-[#A3C7D2]',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our expert team brings your vision to life with cutting-edge technology and best practices.',
      gradient: 'from-[#049E8A] to-[#038A76]',
    },
    {
      icon: Award,
      title: 'Launch',
      description: 'We ensure smooth deployment and provide ongoing support to maximize your success.',
      gradient: 'from-[#A3C7D2] to-[#8FB8C5]',
    }
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: 'Custom',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: ['Custom Requirements', 'Basic Support', 'Standard Delivery', 'Quality Assurance'],
      popular: false,
    },
    {
      title: 'Professional',
      price: '₹15,000',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive digital solutions.',
      features: ['Full Service Package', 'Priority Support', 'Fast Delivery', 'Advanced Analytics', 'Monthly Reports'],
      popular: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations with complex requirements.',
      features: ['Custom Solutions', 'Dedicated Support', 'Premium Delivery', 'Advanced Security', 'Custom Analytics'],
      popular: false,
    }
  ];

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#003366]/20 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <img
            src="/services-illustration.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-20 pointer-events-none select-none hidden md:block"
            style={{ zIndex: 1 }}
            alt="Services Illustration"
          />
          <div className="absolute w-96 h-96 bg-[#90D2B5]/20 rounded-full blur-3xl animate-glow top-20 right-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#A3C7D2]/10 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div ref={heroRef} className="scroll-reveal text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-[#90D2B5]/20">
              <Sparkles className="w-5 h-5 mr-3 text-[#90D2B5]" />
              <span className="text-sm font-semibold text-white">Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Comprehensive
              <span className="block text-gradient mt-4">
                Digital Solutions ✨
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-[#EEF2F5] leading-relaxed">
              From web development to AI solutions, we provide end-to-end digital services that drive growth, 
              enhance user experiences, and deliver measurable results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-orange px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/our-work"
                className="group px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105 border border-[#90D2B5]/30 hover:border-[#90D2B5]/50"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gradient-to-b from-black to-[#003366]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive suite of digital services designed to help your business thrive in the modern digital landscape.
            </p>
          </div>

          <div ref={servicesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
              <Card 
                key={index} 
                  className="group card-hover gradient-border bg-[#003366]/50 border-[#90D2B5]/20 backdrop-blur-xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                      <Icon className="w-10 h-10 text-white" />
                  </div>
                    
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-[#90D2B5] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                    <CardDescription className="text-[#EEF2F5] mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                    <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#90D2B5] mt-0.5 flex-shrink-0" />
                          <span className="text-[#EEF2F5]">{feature}</span>
                        </div>
                      ))}
                    </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              What We Deliver
            </h2>
            <p className="text-xl text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed">
              Each service includes comprehensive deliverables designed to maximize your success and ROI.
            </p>
          </div>

          <div ref={processRef} className="scroll-reveal space-y-16">
            {mainServices.map((item, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.gradient} rounded-full mb-6`}>
                      <item.icon className="w-6 h-6 mr-3 text-white" />
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-6">{item.title}</h3>
                    <p className="text-[#EEF2F5] text-lg leading-relaxed font-inter mb-8">{item.description}</p>
                    
                    <div className="space-y-4">
                        {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#90D2B5] mt-1 flex-shrink-0" />
                          <span className="text-[#EEF2F5] leading-relaxed font-inter">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="card-hover gradient-border bg-[#003366]/50 border-[#90D2B5]/20 backdrop-blur-xl overflow-hidden">
                      <CardContent className="p-8">
                        <div className={`w-24 h-24 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                          <item.icon className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-white text-center mb-4">{item.title}</h4>
                        <p className="text-[#EEF2F5] text-center leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {index < mainServices.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#90D2B5] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gradient-to-b from-black to-[#003366]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Process
            </h2>
            <p className="text-xl text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="card-hover gradient-border bg-[#003366]/50 border-[#90D2B5]/20 backdrop-blur-xl text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto animate-glow`}>
                      <Icon className="w-10 h-10 text-white" />
                </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-[#EEF2F5] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="text-4xl font-bold text-gradient">{index + 1}</div>
              </CardContent>
            </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-to-r from-black via-[#003366]/20 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-[#90D2B5]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#A3C7D2]/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div ref={pricingRef} className="scroll-reveal text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Flexible Pricing Plans
          </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-[#EEF2F5] leading-relaxed">
              Choose the plan that best fits your business needs and budget. All plans include our commitment to quality and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`card-hover gradient-border backdrop-blur-xl text-center transform transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[#90D2B5]/20 to-[#A3C7D2]/20 border-[#90D2B5]/40 scale-105 animate-glow' 
                    : 'bg-[#003366]/50 border-[#90D2B5]/20'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  {plan.popular && (
                    <div className="inline-flex items-center px-4 py-2 bg-[#90D2B5] text-[#003366] rounded-full text-sm font-bold mb-6">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    {plan.period && <span className="text-[#999999] ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-[#EEF2F5] mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#90D2B5] flex-shrink-0" />
                        <span className="text-[#EEF2F5]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
            <Link
              to="/contact"
                    className={`w-full py-3 px-6 rounded-xl font-bold inline-flex items-center justify-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-[#90D2B5] text-[#003366] hover:bg-[#7BC4A3]' 
                        : 'bg-[#003366] text-white border border-[#90D2B5]/30 hover:border-[#90D2B5]/50 hover:bg-[#90D2B5]/10'
                    }`}
                  >
                    Get Started
                    <Send className="ml-2 w-4 h-4" />
            </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
