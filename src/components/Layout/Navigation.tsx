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
          className="text-2xl font-black uppercase tracking-wider text-pure-white hover:text-hero-red transition-colors duration-300"
        >
          MHK
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-medium uppercase tracking-wide transition-all duration-300 group ${
                location.pathname === item.path ? 'text-hero-red' : 'text-pure-white'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hero-red transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex bg-transparent border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-[#e63946] transition-all duration-300 font-medium"
          asChild
        >
          <Link to="/contact">Get In Touch</Link>
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
        <div className="md:hidden bg-pure-black/95 backdrop-blur-md border-t border-muted">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-base font-medium uppercase tracking-wide transition-all duration-300 hover:text-hero-red ${
                  location.pathname === item.path ? 'text-hero-red' : 'text-pure-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full border-2 border-hero-red text-hero-red hover:bg-hero-red hover:text-pure-white transition-all duration-300 font-medium mt-4"
              asChild
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