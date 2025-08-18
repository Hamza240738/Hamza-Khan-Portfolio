import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-pure-black/80 backdrop-blur-md border-b border-muted'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-black uppercase tracking-wider text-pure-white hover:text-hero-red hover:[text-shadow:_-2px_-2px_0_white,_2px_-2px_0_white,_-2px_2px_0_white,_2px_2px_0_white,_-2px_0_0_white,_2px_0_0_white,_0_-2px_0_white,_0_2px_0_white] transition-all duration-300 hover:scale-110 hover:rotate-3 transform relative group"
        >
          <span className="relative z-10">MHK</span>
          <div className="absolute inset-0 bg-hero-red/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-sm font-medium uppercase tracking-wide text-pure-white transition-all duration-500 group hover:scale-110 animate-slide-in-down"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10 group-hover:animate-text-reveal">{item.name}</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-pure-white transition-all duration-500 ${
                location.pathname === item.path 
                  ? 'w-full shadow-glow' 
                  : 'w-0 group-hover:w-full group-hover:shadow-glow'
              }`} />
              <div className="absolute inset-0 bg-gradient-to-r from-hero-red/10 to-transparent rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex bg-transparent border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-[#e63946] transition-all duration-500 font-medium hover:scale-105 hover:shadow-glow group relative overflow-hidden animate-scale-in"
          asChild
          style={{ animationDelay: '0.3s' }}
        >
          <Link to="/contact">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-hero-red/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-pure-white hover:text-hero-red p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-pure-black/95 backdrop-blur-md border-t border-muted animate-slide-in-down">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-base font-medium uppercase tracking-wide transition-all duration-500 hover:text-hero-red hover:scale-105 animate-fade-in-up ${
                  location.pathname === item.path ? 'text-hero-red' : 'text-pure-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full border-2 border-hero-red text-hero-red hover:bg-hero-red hover:text-pure-white transition-all duration-500 font-medium mt-4 hover:scale-105 hover:shadow-glow animate-scale-in-bounce"
              asChild
              style={{ animationDelay: '0.4s' }}
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get In Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;