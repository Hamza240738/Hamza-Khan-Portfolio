import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Show button when user scrolls down past 100vh (first section)
      if (scrollTop > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Update scroll progress for the circular animation
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  // Calculate circle stroke properties
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(scrollProgress / 100) * circumference} ${circumference}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      {/* SVG Progress Circle */}
      <svg 
        className="absolute inset-0 w-12 h-12 -rotate-90" 
        viewBox="0 0 48 48"
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="hsl(var(--hero-red))"
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className="transition-all duration-150 ease-out"
        />
      </svg>
      
      {/* Button */}
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 bg-pure-white text-pure-black rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto text-pure-black group-hover:text-pure-white transition-colors duration-300" />
        <div className="absolute inset-0 bg-hero-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;