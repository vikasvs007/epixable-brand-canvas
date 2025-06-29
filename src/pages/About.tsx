
import React from 'react';
import { Users, Target, Award, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  const heroRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const storyRef = useScrollReveal();

  const values = [
    {
      icon: Target,
      title: 'Client Success',
      description: 'We measure our success by the growth and achievements of our clients.',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: Heart,
      title: 'Employee Well-being',
      description: 'We believe happy employees create exceptional work and lasting relationships.',
      gradient: 'from-orange-400 to-orange-500',
    },
    {
      icon: Award,
      title: 'Creative Excellence',
      description: 'We strive for the highest standards in every project we undertake.',
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      description: 'We grow together with our clients and team members through partnership.',
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div ref={heroRef} className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-orange-500/20">
                <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-sm font-semibold text-white">About Our Journey</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient">Epixable ✨</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are a full-service branding and marketing firm dedicated to crafting authentic brand experiences 
                that resonate with audiences and drive meaningful growth.
              </p>
              
              <div className="space-y-4 text-gray-300">
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
              <Card className="gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl animate-glow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gradient mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To empower businesses through exceptional branding and marketing strategies that create lasting impact 
                    and drive sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do and shape our approach to client relationships and creative work.
            </p>
          </div>

          <div ref={valuesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted partner for brands worldwide.
            </p>
          </div>

          <div ref={storyRef} className="scroll-reveal space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">The Beginning</h3>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  Epixable was founded with a simple yet powerful vision: to help businesses tell their stories 
                  in ways that truly connect with their audiences. We started as a small team of passionate 
                  creatives and strategists.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  What set us apart from the beginning was our commitment to understanding each client's unique 
                  challenges and crafting tailored solutions that drive real results.
                </p>
              </div>
              <Card className="gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">2022</div>
                  <div className="text-gray-300 text-lg">Founded with big dreams</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Card className="md:order-1 gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">150+</div>
                  <div className="text-gray-300 text-lg">Happy clients served</div>
                </CardContent>
              </Card>
              <div className="md:order-2">
                <h3 className="text-3xl font-bold text-white mb-6">Growth & Evolution</h3>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  Over the past two years, we've expanded our services, grown our team, and most importantly, 
                  helped numerous businesses achieve their branding and marketing goals.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our portfolio now includes work across industries from tech startups to established enterprises, 
                  each project teaching us something new and helping us refine our approach.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Looking Forward</h3>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  As we continue to grow, our focus remains on delivering exceptional value to our clients 
                  while fostering a culture of creativity, collaboration, and continuous learning.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We're excited about the future and the opportunity to partner with even more visionary 
                  companies on their branding and marketing journeys.
                </p>
              </div>
              <Card className="gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">∞</div>
                  <div className="text-gray-300 text-lg">Endless possibilities ahead</div>
                </CardContent>
              </Card>
            </div>
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
            Ready to Work Together? 🚀
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Let's create something extraordinary that drives your business forward and sets you apart from the competition.
          </p>
          <button className="btn-orange px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center transform transition-all duration-300 hover:scale-105">
            Start Your Journey Today 
            <ArrowRight className="ml-4 w-7 h-7" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
