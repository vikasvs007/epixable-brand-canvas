
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Brand Strategy & Identity',
      description: 'Comprehensive brand development from strategy to visual identity.',
      features: [
        'Brand positioning and messaging',
        'Logo and visual identity design',
        'Brand guidelines and style guides',
        'Brand voice and tone development',
        'Competitive analysis and research',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that deliver measurable results.',
      features: [
        'Search Engine Optimization (SEO)',
        'Google Ads and PPC campaigns',
        'Social media marketing',
        'Content marketing strategy',
        'Email marketing automation',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Creative Design',
      description: 'Stunning visual designs that capture attention and drive engagement.',
      features: [
        'Graphic design and illustrations',
        'Web and mobile UI/UX design',
        'Print and digital collateral',
        'Packaging and product design',
        'Animation and motion graphics',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built for performance and conversion.',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Mobile app development',
        'CMS integration and training',
        'Performance optimization',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Content Creation',
      description: 'Engaging content that tells your story and connects with audiences.',
      features: [
        'Video production and editing',
        'Photography and visual content',
        'Copywriting and content strategy',
        'Social media content creation',
        'Blog and article writing',
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Analytics & Optimization',
      description: 'Data-driven insights to continuously improve your marketing performance.',
      features: [
        'Google Analytics setup and monitoring',
        'Conversion rate optimization',
        'A/B testing and experimentation',
        'Performance reporting and insights',
        'ROI tracking and analysis',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business, goals, and target audience to develop a comprehensive strategy.',
    },
    {
      step: '02',
      title: 'Creative Development',
      description: 'Our team creates compelling designs and content that align with your brand and objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy across all channels, ensuring consistent brand experience.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor, analyze, and optimize performance to maximize your ROI.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Comprehensive digital marketing and branding solutions designed to help your business 
            thrive in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-x-8"></div>
                    <ArrowRight className="absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 text-purple-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various engagement models to fit your budget and project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project-Based</h3>
              <p className="text-gray-600 mb-6">
                Perfect for specific campaigns or one-time projects with defined scope and timeline.
              </p>
              <div className="text-center">
                <span className="text-4xl font-bold text-purple-600">Custom</span>
                <p className="text-gray-500 mt-2">Quote based on requirements</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl shadow-lg p-8 text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Monthly Retainer</h3>
              <p className="mb-6 opacity-90">
                Ongoing partnership for continuous marketing support and brand development.
              </p>
              <div className="text-center">
                <span className="text-4xl font-bold">$5K+</span>
                <p className="opacity-75 mt-2">Per month</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600 mb-6">
                Strategic guidance and expert advice to help you make informed decisions.
              </p>
              <div className="text-center">
                <span className="text-4xl font-bold text-purple-600">$200</span>
                <p className="text-gray-500 mt-2">Per hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 inline-flex items-center justify-center"
            >
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 hover:scale-105"
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
