import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / documentHeight, 1);
      
      setScrollProgress(progress);
      
      // Show button when user scrolls down past 100vh (first section)
      if (scrollTop > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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

  const circumference = 2 * Math.PI * 20; // radius of 20
  const strokeDashoffset = circumference - (scrollProgress * circumference);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      {/* Progress Ring */}
      <svg 
        className="absolute inset-0 w-12 h-12 transform -rotate-90"
        width="48" 
        height="48"
      >
        {/* Background circle */}
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="rgb(255, 255, 255)"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        {/* Progress circle */}
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="hsl(var(--hero-red))"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-150 ease-out"
        />
      </svg>
      
      {/* Button */}
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 bg-pure-white text-pure-black rounded-full shadow-elegant hover:bg-hero-red hover:text-pure-white transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;