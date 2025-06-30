
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const services = [
    'Brand Strategy & Identity',
    'Digital Marketing',
    'Creative Design',
    'Web Development',
    'Content Creation',
    'Analytics & Optimization',
    'Other',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@epixable.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '(555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Business Ave, Suite 100',
      description: 'Downtown Business District',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-orange-500/20 animate-fade-in-up">
            <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
            <span className="text-sm font-semibold text-white font-space">Let's Build Together</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up font-playfair">
            Let's Create Something
            <span className="block text-gradient">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in-up font-inter leading-relaxed">
            Ready to take your brand to the next level? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-2xl p-8 text-center card-hover animate-fade-in-up border border-orange-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white mb-6 animate-glow">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-space">{item.title}</h3>
                <p className="text-lg text-orange-500 font-semibold mb-2 font-inter">{item.info}</p>
                <p className="text-gray-400 font-inter">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-300 font-inter">
              Tell us about your project and we'll get back to you with a custom proposal.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 md:p-12 border border-orange-500/20 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 font-inter"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white font-inter"
                  >
                    <option value="" className="bg-black">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 text-white font-inter"
                  >
                    <option value="" className="bg-black">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-black">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-space">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-white placeholder-gray-400 font-inter"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-orange px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center font-space"
                >
                  Send Message <Send className="ml-2" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on scope and complexity. Brand identity projects typically take 4-6 weeks, while comprehensive marketing campaigns can take 8-12 weeks. We provide detailed timelines during our initial consultation.',
              },
              {
                question: 'Do you work with startups and small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We tailor our services and pricing to fit your specific needs and budget.',
              },
              {
                question: 'What makes VertexLabs different?',
                answer: 'Our focus on authentic brand experiences, data-driven strategies, and long-term partnerships sets us apart. We prioritize client success and employee well-being, which translates to exceptional results for every project.',
              },
              {
                question: 'Can you help with ongoing marketing support?',
                answer: 'Yes! We offer monthly retainer packages for ongoing marketing support, including content creation, campaign management, and performance optimization.',
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-xl p-6 card-hover animate-fade-in-up border border-orange-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 font-space">{faq.question}</h3>
                <p className="text-gray-300 font-inter">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
