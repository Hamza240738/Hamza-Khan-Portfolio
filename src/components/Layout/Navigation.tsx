import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
          className="text-2xl font-black uppercase tracking-wider text-foreground hover:text-primary transition-colors duration-300"
        >
          MHK
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:text-primary group ${
                location.pathname === item.path ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-pure-white transition-all duration-300"
          asChild
        >
          <Link to="/contact">Get In Touch</Link>
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-primary"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;