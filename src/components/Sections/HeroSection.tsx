import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import hamzaPortrait from '@/assets/hamza-portrait.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer" />
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pure-white/5 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-pure-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-pure-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Parallax Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-pure-white rounded-full"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-pure-white/70 rounded-full"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Portrait */}
        <div className="mb-8 animate-scale-in">
          <div className="relative inline-block">
            <img
              src={hamzaPortrait}
              alt="Muhammad Hamza Khan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-glow animate-glow-pulse mx-auto"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-display text-pure-white mb-6 animate-fade-in-up">
          MUHAMMAD<br />
          HAMZA KHAN
        </h1>

        {/* Subtitle */}
        <p className="text-body-large text-pure-white/90 mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          Hello! I'm Muhammad Hamza Khan, a creative product designer based in Pakistan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            className="bg-pure-white text-pure-black hover:bg-pure-white/90 font-semibold uppercase tracking-wide px-8 py-3 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/work">View My Work</Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-pure-white text-pure-white hover:bg-pure-white hover:text-pure-black font-semibold uppercase tracking-wide px-8 py-3 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pure-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pure-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;