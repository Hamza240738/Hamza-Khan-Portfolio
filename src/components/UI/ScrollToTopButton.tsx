import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down past 100vh (first section)
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
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

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-pure-white text-pure-black rounded-full shadow-elegant hover:bg-hero-red hover:text-pure-white transition-all duration-300 hover:scale-110 md:bottom-8 md:right-8"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 mx-auto" />
    </button>
  );
};

export default ScrollToTopButton;