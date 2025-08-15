import { useEffect } from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import ContactSection from '@/components/Sections/ContactSection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pure-black">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-pure-white mb-6 animate-fade-in-up">
              Contact Me
            </h1>
            <p className="text-body-large text-pure-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Let's discuss your next project and turn your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;