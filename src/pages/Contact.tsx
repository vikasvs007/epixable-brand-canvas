import React, { useState } from 'react';
import { Sparkles, Mail, Phone, MapPin, Send, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const heroRef = useScrollReveal();
  const contactInfoRef = useScrollReveal();
  const formRef = useScrollReveal();
  const faqRef = useScrollReveal();

  const contactInfo = [
    {
      icon: Mail,
      info: 'hello@vertexlabs.com',
      description: 'Send us an email anytime',
      gradient: 'from-[#003366] to-[#004080]'
    },
    {
      icon: Phone,
      info: '+91 6363163519',
      description: 'Call us for immediate support',
      gradient: 'from-[#90D2B5] to-[#A3C7D2]'
    },
    {
      icon: MapPin,
      info: 'Mysore, India',
      description: 'Visit our office',
      gradient: 'from-[#049E8A] to-[#038A76]'
    },
    {
      icon: Clock,
      info: 'Mon - Fri, 9AM - 6PM',
      description: 'Business hours',
      gradient: 'from-[#A3C7D2] to-[#8FB8C5]'
    }
  ];

  const services = [
    'Web Development',
    'AI & ML Solutions',
    'Creative Design',
    'Social Media Management',
    'Digital Marketing',
    'Cybersecurity',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    '₹10,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000+',
    'Not sure yet'
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support packages including maintenance, updates, and technical support. We believe in building long-term relationships with our clients."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms. We choose the best technology stack for each project's specific needs."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain regular communication through scheduled meetings, progress reports, and dedicated project management tools. You'll have direct access to your project team throughout the process."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We have experience working with clients from around the world. We can accommodate different time zones and provide remote collaboration tools for seamless communication."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('https://formspree.io/f/xdkzbvzj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-[#003366]/20 to-black text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <img
            src="/contact-illustration.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-20 pointer-events-none select-none hidden md:block"
            style={{ zIndex: 1 }}
            alt="Contact Illustration"
          />
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#90D2B5]/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-[#A3C7D2]/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div ref={heroRef} className="scroll-reveal">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-[#90D2B5]/20 animate-fade-in-up">
              <Sparkles className="w-5 h-5 mr-3 text-[#90D2B5]" />
              <span className="text-sm font-semibold text-white">Get In Touch</span>
            </div>
            {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              Let's Start
              <span className="block text-gradient mt-4">
                Something Amazing ✨
              </span>
            </h1>
                        {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}

            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#EEF2F5] animate-fade-in-up font-inter leading-relaxed">
              Ready to transform your business? We're here to help you bring your vision to life. 
              Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>
                              {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}


      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-black to-[#003366]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to reach us. We're here to help and answer any questions you may have.
            </p>
          </div>
                                  {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}


          <div ref={contactInfoRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-8 text-center card-hover animate-fade-in-up border border-[#90D2B5]/20"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl text-white mb-6 animate-glow`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-lg text-[#90D2B5] font-semibold mb-2 font-inter">{item.info}</p>
                  <p className="text-[#999999] font-inter">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
                        {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}


      {/* Contact Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-[#EEF2F5] font-inter">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <div ref={formRef} className="scroll-reveal">
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 md:p-12 border border-[#90D2B5]/20 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#EEF2F5] mb-2 font-space">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#003366]/50 border border-[#90D2B5]/30 rounded-lg focus:ring-2 focus:ring-[#90D2B5] focus:border-transparent outline-none transition-all duration-300 text-white placeholder-[#999999] font-inter"
                    placeholder="Enter your full name"
                  />
                </div>


                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#EEF2F5] mb-2 font-space">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#003366]/50 border border-[#90D2B5]/30 rounded-lg focus:ring-2 focus:ring-[#90D2B5] focus:border-transparent outline-none transition-all duration-300 text-white placeholder-[#999999] font-inter"
                    placeholder="Enter your email address"
                  />
                </div>
                        {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}
                        {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}


                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#EEF2F5] mb-2 font-space">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#003366]/50 border border-[#90D2B5]/30 rounded-lg focus:ring-2 focus:ring-[#90D2B5] focus:border-transparent outline-none transition-all duration-300 text-white placeholder-[#999999] font-inter"
                    placeholder="Enter your phone number"
                  />
                </div>
                        {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}
                        {/* //// sfdahs asuyfajshbf jsbfjhabsfjbsafj jhsabfjhbasfbasf jhasbfjh */}

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#EEF2F5] mb-2 font-space">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#003366]/50 border border-[#90D2B5]/30 rounded-lg focus:ring-2 focus:ring-[#90D2B5] focus:border-transparent outline-none transition-all duration-300 text-white placeholder-[#999999] font-inter"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#EEF2F5] mb-2 font-space">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#003366]/50 border border-[#90D2B5]/30 rounded-lg focus:ring-2 focus:ring-[#90D2B5] focus:border-transparent outline-none transition-all duration-300 text-white font-inter"
                  >
                    <option value="" className="bg-[#003366]">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#003366]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-[#EEF2F5] mb-2 font-space">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#003366]/50 border border-[#90D2B5]/30 rounded-lg focus:ring-2 focus:ring-[#90D2B5] focus:border-transparent outline-none transition-all duration-300 text-white font-inter"
                  >
                    <option value="" className="bg-[#003366]">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#003366]">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-[#EEF2F5] mb-2 font-space">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#003366]/50 border border-[#90D2B5]/30 rounded-lg focus:ring-2 focus:ring-[#90D2B5] focus:border-transparent outline-none transition-all duration-300 resize-none text-white placeholder-[#999999] font-inter"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 text-green-400 font-semibold text-center">Thank you! Your message has been sent.</div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 text-red-400 font-semibold text-center">Something went wrong. Please try again.</div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-orange px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center font-space"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (<><span>Send Message</span><Send className="ml-2 w-5 h-5" /></>)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#EEF2F5] max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, process, and what to expect when working with us.
            </p>
          </div>

          <div ref={faqRef} className="scroll-reveal space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 card-hover animate-fade-in-up border border-[#90D2B5]/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-3 font-space">{faq.question}</h3>
                <p className="text-[#EEF2F5] font-inter">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#EEF2F5] mb-6 font-inter">
              Still have questions? We're here to help!
            </p>
            <a
              href="mailto:hello@vertexlabs.com"
              className="inline-flex items-center text-[#90D2B5] hover:text-[#A3C7D2] transition-colors duration-300 font-semibold font-space"
            >
              Contact us directly
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
