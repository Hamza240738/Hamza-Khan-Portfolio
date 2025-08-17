import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
const hamzaPortrait = '/lovable-uploads/2afe470b-5bd1-4d2e-9f4e-449d711c49c6.png';
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer" />
        
        {/* Creative Geometric Illustrations */}
        {/* Large Triangle */}
        <div className="absolute top-10 right-10 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-pure-white/10 animate-float" style={{ animationDelay: '0.5s' }} />
        
        {/* Hexagon */}
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-pure-white/8 rotate-45 animate-rotate-slow" />
        
        {/* Abstract Lines */}
        <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-pure-white/30 to-transparent animate-pulse" />
        <div className="absolute top-2/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-pure-white/40 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating Circles with Enhanced Animation */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pure-white/5 rounded-full animate-float shadow-glow" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-pure-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-pure-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Diamond Shapes */}
        <div className="absolute top-60 left-1/3 w-6 h-6 bg-pure-white/15 rotate-45 animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-pure-white/20 rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }} />
        
        {/* Curved Lines */}
        <svg className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20 animate-rotate-slow" style={{ animationDuration: '12s' }}>
          <path d="M10,90 Q90,90 90,10" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M20,90 Q80,80 80,20" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        
        {/* Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Enhanced Parallax Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pure-white rounded-full shadow-glow" style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }} />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pure-white/70 rounded-full" style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }} />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pure-white/60 rounded-full" style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
        }} />
        
        {/* Morphing Blob */}
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-pure-white/5 rounded-full animate-glow-pulse" style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          animationDelay: '1s'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Portrait */}
        <div className="mb-8 animate-scale-in relative">
          <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden shadow-elegant animate-glow-pulse">
            <img 
              src={hamzaPortrait} 
              alt="Muhammad Hamza Khan - Product Designer" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full border-2 border-pure-white/20 animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-display text-pure-white mb-6 animate-fade-in-up relative">
          <span className="inline-block animate-slide-in-left">MUHAMMAD</span><br />
          <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>HAMZA KHAN</span>
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-pure-white/5 to-transparent opacity-0 animate-shimmer" style={{ animationDelay: '1s' }} />
        </h1>

        {/* Subtitle */}
        <p className="text-body-large text-pure-white/90 mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{
        animationDelay: '0.2s'
      }}>
          Hello! I'm Muhammad Hamza Khan, a creative product designer based in Pakistan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
          <Button size="lg" className="bg-pure-white text-pure-black hover:bg-pure-white/90 font-semibold uppercase tracking-wide px-8 py-3 transition-all duration-500 hover:scale-105 hover:shadow-glow group relative overflow-hidden" asChild>
            <Link to="/work">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-hero-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="border-pure-white text-pure-white hover:bg-pure-white hover:text-pure-black font-semibold uppercase tracking-wide px-8 py-3 transition-all duration-500 hover:scale-105 hover:shadow-glow group relative overflow-hidden" asChild>
            <Link to="/contact">
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pure-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-pure-white/70 text-sm uppercase tracking-wider group-hover:text-pure-white transition-colors duration-300">Scroll</span>
          <div className="relative">
            <ChevronDown className="w-6 h-6 text-pure-white/70 group-hover:text-pure-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-pure-white/10 scale-0 group-hover:scale-150 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;