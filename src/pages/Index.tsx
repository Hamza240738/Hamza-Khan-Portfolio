import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import ToolsSection from '@/components/Sections/ToolsSection';
import FeaturedWorkSection from '@/components/Sections/FeaturedWorkSection';
import ContactSection from '@/components/Sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <FeaturedWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
