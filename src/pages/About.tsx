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
      title: 'Client Success ',
      description: 'We measure our success by the growth and achievements of our clients.',
      gradient: 'from-[#003366] to-[#004080]',
    },
    {
      icon: Heart,
      title: 'Employee Well-being',
      description: 'We believe happy employees create exceptional work and lasting relationships for bettermnt of our clients',
      gradient: 'from-[#90D2B5] to-[#7BC4A3]',
    },
    {
      icon: Award,
      title: 'Creative Excellence',
      description: 'We strive for the highest standards in every project we undertake for bettermnt of our clients',
      gradient: 'from-[#049E8A] to-[#038A76]',
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      description: 'We grow together with our clients and team members through partnership.',
      gradient: 'from-[#A3C7D2] to-[#8FB8C5]',
    },
  ];

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#003366]/20 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-[#90D2B5]/20 rounded-full blur-3xl animate-glow top-20 right-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#A3C7D2]/10 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div ref={heroRef} className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-[#90D2B5]/20">
                <Sparkles className="w-5 h-5 mr-3 text-[#90D2B5]" />
                <span className="text-sm font-semibold text-white">About Our Journey</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-gradient">VertexLabs ✨</span>
              </h1>
              
              <p className="text-xl text-[#EEF2F5] mb-8 leading-relaxed">
              We are a full-service digital agency focused on web development, AI/ML solutions, and creative design to help businesses grow and innovate.
              </p>
              
              <div className="space-y-4 text-[#EEF2F5]">
                <p>
                Over the past two years, we've experienced tremendous growth and progress, building lasting relationships with clients across diverse industries. Our journey has been marked by continuous innovation, technical expertise, and an unwavering commitment to delivering impactful digital solutions.


                </p>
                <p>
                We believe in the power of innovative technology, intelligent solutions, and creative design to help visionary companies grow, streamline their operations, and engage their audiences.


                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="gradient-border bg-black/50 border-[#90D2B5]/20 backdrop-blur-xl animate-glow">
                <CardHeader>
                  <CardTitle className="text-2xl font-extrabold text-white drop-shadow-glow mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-[#EEF2F5] leading-relaxed">
                  To bridge the gap between ideas and impact by equipping businesses and students with the tools, knowledge, and support they need to turn ambition into achievement.

</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#003366]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-glow">Our Core Values</h2>
            <p className="text-xl text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do and shape our approach to client relationships and creative work.
            </p>
          </div>

          <div ref={valuesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group card-hover gradient-border bg-black/50 border-[#90D2B5]/20 backdrop-blur-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-extrabold text-white drop-shadow-glow group-hover:text-[#90D2B5] transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#EEF2F5] text-center leading-relaxed">
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
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-glow">Our Journey</h2>
            <p className="text-xl text-[#EEF2F5] max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted partner for brands worldwide.
            </p>
          </div>

          <div ref={storyRef} className="scroll-reveal space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-6 drop-shadow-glow">The Beginning</h3>
                <p className="text-[#EEF2F5] mb-4 text-lg leading-relaxed">
                  VertexLabs was founded with a simple yet powerful vision: to help businesses tell their stories 
                  in ways that truly connect with their audiences. We started as a small team of passionate 
                  creatives and strategists.
                </p>
                <p className="text-[#EEF2F5] text-lg leading-relaxed">
                  What set us apart from the beginning was our commitment to understanding each client's unique 
                  challenges and crafting tailored solutions that drive real results.
                </p>
              </div>
              <Card className="gradient-border bg-black/50 border-[#90D2B5]/20 backdrop-blur-xl card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">2023</div>
                  <div className="text-[#EEF2F5] text-lg">Founded with big dreams</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Card className="md:order-1 gradient-border bg-black/50 border-[#90D2B5]/20 backdrop-blur-xl card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">50+</div>
                  <div className="text-[#EEF2F5] text-lg">Happy clients served</div>
                </CardContent>
              </Card>
              <div className="md:order-2">
                <h3 className="text-3xl font-extrabold text-white mb-6 drop-shadow-glow">Growth & Evolution</h3>
                <p className="text-[#EEF2F5] mb-4 text-lg leading-relaxed">
                  Over the past two years, we've expanded our services, grown our team, and most importantly, 
                  helped numerous businesses achieve their branding and marketing goals.
                </p>
                <p className="text-[#EEF2F5] text-lg leading-relaxed">
                  Our portfolio now includes work across industries from tech startups to established enterprises, 
                  each project teaching us something new and helping us refine our approach.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-6 drop-shadow-glow">Looking Forward</h3>
                <p className="text-[#EEF2F5] mb-4 text-lg leading-relaxed">
                  As we continue to grow, our focus remains on delivering exceptional value to our clients 
                  while fostering a culture of creativity, collaboration, and continuous learning.
                </p>
                <p className="text-[#EEF2F5] text-lg leading-relaxed">
                  We're excited about the future and the opportunity to partner with even more visionary 
                  companies on their branding and marketing journeys.
                </p>
              </div>
              <Card className="gradient-border bg-black/50 border-[#90D2B5]/20 backdrop-blur-xl card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">∞</div>
                  <div className="text-[#EEF2F5] text-lg">Endless possibilities ahead</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-[#003366]/20 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-[#90D2B5]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#A3C7D2]/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Ready to Work Together? 🚀
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-[#EEF2F5] leading-relaxed">
            Let's create something extraordinary that drives your business forward and sets you apart from the competition.
          </p>
          <button className="bg-gradient-to-r from-[#003366] to-[#004080] hover:from-[#004080] hover:to-[#0050A0] px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center transform transition-all duration-300 hover:scale-105 text-white shadow-lg">
            Start Your Journey Today 
            <ArrowRight className="ml-4 w-7 h-7" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
