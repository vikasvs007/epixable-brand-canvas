
import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Client Success',
      description: 'We measure our success by the growth and achievements of our clients.',
    },
    {
      icon: Heart,
      title: 'Employee Well-being',
      description: 'We believe happy employees create exceptional work and lasting relationships.',
    },
    {
      icon: Award,
      title: 'Creative Excellence',
      description: 'We strive for the highest standards in every project we undertake.',
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      description: 'We grow together with our clients and team members through partnership.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Epixable</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We are a full-service branding and marketing firm dedicated to crafting authentic brand experiences 
                that resonate with audiences and drive meaningful growth.
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Over the past two years, we've experienced tremendous growth and progress, building lasting relationships 
                  with clients across various industries. Our journey has been marked by continuous innovation, creative excellence, 
                  and an unwavering commitment to delivering results.
                </p>
                <p>
                  We believe in the power of authentic storytelling and strategic brand positioning to help visionary companies 
                  elevate their brands and connect with their ideal customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90">
                  To empower businesses through exceptional branding and marketing strategies that create lasting impact 
                  and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our approach to client relationships and creative work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-200">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to becoming a trusted partner for brands worldwide.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                  <p className="text-gray-700 mb-4">
                    Epixable was founded with a simple yet powerful vision: to help businesses tell their stories 
                    in ways that truly connect with their audiences. We started as a small team of passionate 
                    creatives and strategists.
                  </p>
                  <p className="text-gray-700">
                    What set us apart from the beginning was our commitment to understanding each client's unique 
                    challenges and crafting tailored solutions that drive real results.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">2022</div>
                    <div className="text-gray-700">Founded with big dreams</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth & Evolution</h3>
                  <p className="text-gray-700 mb-4">
                    Over the past two years, we've expanded our services, grown our team, and most importantly, 
                    helped numerous businesses achieve their branding and marketing goals.
                  </p>
                  <p className="text-gray-700">
                    Our portfolio now includes work across industries from tech startups to established enterprises, 
                    each project teaching us something new and helping us refine our approach.
                  </p>
                </div>
                <div className="md:order-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                    <div className="text-gray-700">Happy clients served</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
                  <p className="text-gray-700 mb-4">
                    As we continue to grow, our focus remains on delivering exceptional value to our clients 
                    while fostering a culture of creativity, collaboration, and continuous learning.
                  </p>
                  <p className="text-gray-700">
                    We're excited about the future and the opportunity to partner with even more visionary 
                    companies on their branding and marketing journeys.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
                    <div className="text-gray-700">Endless possibilities ahead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
