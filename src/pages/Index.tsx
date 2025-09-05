import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import ToolsSection from '@/components/Sections/ToolsSection';
import FeaturedWorkSection from '@/components/Sections/FeaturedWorkSection';
import ContactSection from '@/components/Sections/ContactSection';
import ScrollToTopButton from '@/components/UI/ScrollToTopButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      <main className="animate-fade-in">
        <HeroSection />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <ToolsSection />
          <FeaturedWorkSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
