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
      title: 'Email Us',
      info: 'vertexlabz@gmail.com',
      link: 'mailto:vertexlabz@gmail.com',
      description: 'Send us an email',
      gradient: 'from-primary to-primary/80'
    },
    {
      icon: Phone,
      info: '+91 6363163519|7259635086',
      description: 'Call us for immediate support',
      gradient: 'from-accent to-accent/80'
    },
    {
      icon: MapPin,
      info: 'Mysore, India',
      description: 'Visit our office',
      gradient: 'from-primary to-accent'
    },
    {
      icon: Clock,
      info: 'Mon - Fri, 9AM - 6PM',
      description: 'Business hours',
      gradient: 'from-accent to-primary'
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
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support packages including maintenance, updates, and technical support."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain regular communication through scheduled meetings, progress reports, and dedicated project management tools."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We have experience working with clients from around the world."
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
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-secondary to-white text-foreground relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <img
            src="/contact-illustration.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-none opacity-10 pointer-events-none select-none hidden md:block"
            style={{ zIndex: 1 }}
            alt="Contact Illustration"
          />
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div ref={heroRef} className="scroll-reveal">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 backdrop-blur-xl rounded-full mb-8 border border-accent/20 animate-fade-in-up">
              <Sparkles className="w-5 h-5 mr-3 text-accent" />
              <span className="text-sm font-semibold text-foreground">Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              Let's Start
              <span className="block text-gradient mt-4">
                Something Amazing
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground animate-fade-in-up font-inter leading-relaxed">
              Ready to transform your business? We're here to help you bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to reach us. We're here to help and answer any questions.
            </p>
          </div>

          <div ref={contactInfoRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center card-hover animate-fade-in-up border border-border shadow-lg"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl text-white mb-6 animate-glow`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-lg text-accent font-semibold mb-2 font-inter">{item.info}</p>
                  <p className="text-muted-foreground font-inter">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <div ref={formRef} className="scroll-reveal">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 border border-border animate-fade-in-up shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-space">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground font-inter"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-space">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground font-inter"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 font-space">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground font-inter"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2 font-space">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 text-foreground placeholder-muted-foreground font-inter"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2 font-space">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 text-foreground font-inter"
                  >
                    <option value="" className="bg-white">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2 font-space">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 text-foreground font-inter"
                  >
                    <option value="" className="bg-white">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-space">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-300 resize-none text-foreground placeholder-muted-foreground font-inter"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 text-accent font-semibold text-center">Thank you! Your message has been sent.</div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 text-destructive font-semibold text-center">Something went wrong. Please try again.</div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center font-space"
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
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, process, and what to expect.
            </p>
          </div>

          <div ref={faqRef} className="scroll-reveal space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-border animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4 font-space">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed font-inter">{faq.answer}</p>
              </div>
            ))}
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
            Let's Build Something Great
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed">
            Ready to take your business to the next level? We're here to help you succeed.
          </p>
          <a
            href="mailto:vertexlabz@gmail.com"
            className="bg-white text-primary hover:bg-accent hover:text-white px-12 py-6 rounded-xl font-bold text-xl inline-flex items-center transform transition-all duration-300 hover:scale-105"
          >
            Email Us Now
            <ArrowRight className="ml-4 w-7 h-7" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
