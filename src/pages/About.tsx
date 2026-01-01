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
      gradient: 'from-primary to-primary/80',
    },
    {
      icon: Heart,
      title: 'Employee Well-being',
      description: 'We believe happy employees create exceptional work and lasting relationships.',
      gradient: 'from-accent to-accent/80',
    },
    {
      icon: Award,
      title: 'Creative Excellence',
      description: 'We strive for the highest standards in every project we undertake.',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      description: 'We grow together with our clients and team members through partnership.',
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-white text-foreground overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <img
            src="/about-illustration.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-10 pointer-events-none select-none hidden md:block"
            style={{ zIndex: 1 }}
            alt="About VertexLabz Illustration"
          />
          <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow top-20 right-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div ref={heroRef} className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 backdrop-blur-xl rounded-full mb-8 border border-accent/20">
                <Sparkles className="w-5 h-5 mr-3 text-accent" />
                <span className="text-sm font-semibold text-foreground">About Our Journey</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">
                About <span className="text-gradient">VertexLabz</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto font-inter">
                VertexLabz was founded with a simple yet powerful vision: to help businesses tell their stories
                through innovative design and strategic thinking. We believe that every brand has a unique
                narrative waiting to be discovered and shared with the world.
              </p>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Over the past two years, we've experienced tremendous growth and progress, building lasting relationships with clients across diverse industries.
                </p>
                <p>
                  We believe in the power of innovative technology, intelligent solutions, and creative design to help visionary companies grow and engage their audiences.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white border-border backdrop-blur-xl animate-glow shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-extrabold text-foreground mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To bridge the gap between ideas and impact by equipping businesses and students with the tools, knowledge, and support they need to turn ambition into achievement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do and shape our approach to client relationships and creative work.
            </p>
          </div>

          <div ref={valuesRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group card-hover bg-white border-border backdrop-blur-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 animate-glow`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-extrabold text-foreground group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted partner for brands worldwide.
            </p>
          </div>

          <div ref={storyRef} className="scroll-reveal space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-foreground mb-6">The Beginning</h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  VertexLabz was founded with a simple yet powerful vision: to help businesses tell their stories 
                  in ways that truly connect with their audiences.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  What set us apart from the beginning was our commitment to understanding each client's unique 
                  challenges and crafting tailored solutions that drive real results.
                </p>
              </div>
              <Card className="bg-white border-border backdrop-blur-xl card-hover shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">2022</div>
                  <div className="text-muted-foreground text-lg">Founded with big dreams</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Card className="md:order-1 bg-white border-border backdrop-blur-xl card-hover shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">50+</div>
                  <div className="text-muted-foreground text-lg">Happy clients served</div>
                </CardContent>
              </Card>
              <div className="md:order-2">
                <h3 className="text-3xl font-extrabold text-foreground mb-6">Growth & Evolution</h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  Over the past two years, we've expanded our services, grown our team, and most importantly, 
                  helped numerous businesses achieve their branding and marketing goals.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our portfolio now includes work across industries from tech startups to established enterprises.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-foreground mb-6">Looking Forward</h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  As we continue to grow, our focus remains on delivering exceptional value to our clients 
                  while fostering a culture of creativity, collaboration, and continuous learning.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're excited about the future and the opportunity to partner with even more visionary 
                  companies on their branding and marketing journeys.
                </p>
              </div>
              <Card className="bg-white border-border backdrop-blur-xl card-hover shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">∞</div>
                  <div className="text-muted-foreground text-lg">Endless possibilities ahead</div>
                </CardContent>
              </Card>
            </div>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed">
            Let's create something extraordinary that drives your business forward and sets you apart from the competition.
          </p>
          <button className="bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center transform transition-all duration-300 hover:scale-105 shadow-lg">
            Start Your Journey Today 
            <ArrowRight className="ml-4 w-7 h-7" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
