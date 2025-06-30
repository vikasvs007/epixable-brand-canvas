import React from 'react';
import { Sparkles, Play, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const OurWork = () => {
  const heroRef = useScrollReveal();
  const portfolioRef = useScrollReveal();
  const featuredRef = useScrollReveal();

  const projects = [
    {
      title: 'Headphone Product Animation',
      description: 'Dynamic 3D animation showcasing premium headphone features',
      videoId: 'dQw4w9WgXcQ',
      category: 'Product Animation',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Festival Promotion Campaign',
      description: 'Vibrant promotional content for music festival branding',
      videoId: 'dQw4w9WgXcQ',
      category: 'Marketing Campaign',
      gradient: 'from-orange-400 to-orange-500',
    },
    {
      title: 'Hotel Brand Commercial',
      description: 'Luxury hotel brand storytelling through cinematic visuals',
      videoId: 'dQw4w9WgXcQ',
      category: 'Brand Commercial',
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      title: 'Tech Startup Launch',
      description: 'Complete brand identity and launch campaign for fintech startup',
      videoId: 'dQw4w9WgXcQ',
      category: 'Brand Identity',
      gradient: 'from-orange-300 to-orange-400',
    },
    {
      title: 'E-commerce Product Showcase',
      description: 'Engaging product animations for online retail platform',
      videoId: 'dQw4w9WgXcQ',
      category: 'E-commerce',
      gradient: 'from-orange-500 to-orange-400',
    },
    {
      title: 'Corporate Rebranding',
      description: 'Complete visual identity transformation for Fortune 500 company',
      videoId: 'dQw4w9WgXcQ',
      category: 'Corporate Branding',
      gradient: 'from-orange-700 to-orange-600',
    },
  ];

  const categories = ['All', 'Product Animation', 'Marketing Campaign', 'Brand Commercial', 'Brand Identity', 'E-commerce', 'Corporate Branding'];
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
              Explore our collection of award-winning animations, promotional content, 
              and creative projects that have helped brands make lasting impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-all duration-300 group-hover:scale-110">
                        <Play className="text-white w-8 h-8 ml-1" />
                      </div>
                      <p className="text-sm opacity-75">Video Preview</p>
                    </div>
                  </div>
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
              <div className="aspect-video bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl m-6 mb-0 flex items-center justify-center animate-glow">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="text-white w-8 h-8 ml-1" />
                  </div>
                  <p className="text-sm opacity-75">Featured Video</p>
                </div>
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
                  <span className="bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-400/30">Animation</span>
                  <span className="bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full text-sm border border-orange-600/30">Marketing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border bg-black/50 border-orange-500/20 backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl m-6 mb-0 flex items-center justify-center animate-glow">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="text-white w-8 h-8 ml-1" />
                  </div>
                  <p className="text-sm opacity-75">Featured Video</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gradient">Innovation in Motion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our cutting-edge 3D animation techniques brought this tech product to life, 
                  resulting in a 150% increase in customer engagement and viral social media presence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-400/30">3D Animation</span>
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30">Product Demo</span>
                  <span className="bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full text-sm border border-orange-600/30">Social Media</span>
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