
import React from 'react';

const Gallery = () => {
  const projects = [
    {
      title: 'Headphone Product Animation',
      description: 'Dynamic 3D animation showcasing premium headphone features',
      videoId: 'dQw4w9WgXcQ', // Placeholder video ID
      category: 'Product Animation',
    },
    {
      title: 'Festival Promotion Campaign',
      description: 'Vibrant promotional content for music festival branding',
      videoId: 'dQw4w9WgXcQ',
      category: 'Marketing Campaign',
    },
    {
      title: 'Hotel Brand Commercial',
      description: 'Luxury hotel brand storytelling through cinematic visuals',
      videoId: 'dQw4w9WgXcQ',
      category: 'Brand Commercial',
    },
    {
      title: 'Tech Startup Launch',
      description: 'Complete brand identity and launch campaign for fintech startup',
      videoId: 'dQw4w9WgXcQ',
      category: 'Brand Identity',
    },
    {
      title: 'E-commerce Product Showcase',
      description: 'Engaging product animations for online retail platform',
      videoId: 'dQw4w9WgXcQ',
      category: 'E-commerce',
    },
    {
      title: 'Corporate Rebranding',
      description: 'Complete visual identity transformation for Fortune 500 company',
      videoId: 'dQw4w9WgXcQ',
      category: 'Corporate Branding',
    },
  ];

  const categories = ['All', 'Product Animation', 'Marketing Campaign', 'Brand Commercial', 'Brand Identity', 'E-commerce', 'Corporate Branding'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Creative
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Explore our collection of award-winning animations, promotional content, 
            and creative projects that have helped brands make lasting impressions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                      <p className="text-sm opacity-75">Video Preview</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A closer look at some of our most impactful projects and the stories behind them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-sm opacity-75">Featured Video</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Award-Winning Campaign</h3>
              <p className="text-gray-600 mb-6">
                This comprehensive branding campaign helped our client increase brand recognition by 300% 
                and generated over $2M in additional revenue within the first quarter.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Branding</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Animation</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Marketing</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-teal-600 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-sm opacity-75">Case Study Video</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Startup Success Story</h3>
              <p className="text-gray-600 mb-6">
                From concept to market leader, we helped this tech startup build a brand identity 
                that secured $50M in Series A funding and captured 25% market share.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Startup</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Identity</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
