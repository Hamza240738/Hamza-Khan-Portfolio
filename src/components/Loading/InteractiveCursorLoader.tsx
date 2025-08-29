import { useState, useEffect, useRef } from 'react';

interface InteractiveCursorLoaderProps {
  onLoadingComplete: () => void;
  duration?: number;
}

const InteractiveCursorLoader = ({ onLoadingComplete, duration = 3000 }: InteractiveCursorLoaderProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [revealRadius, setRevealRadius] = useState(150);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, duration]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const revealStyle = {
    background: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 40%, rgba(0,0,0,0.95) 100%)`,
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden cursor-none"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--pure-black)), hsl(var(--hero-red) / 0.1))'
      }}
    >
      {/* Hidden content layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-30" 
             style={{ background: 'linear-gradient(135deg, hsl(var(--hero-red)), hsl(var(--hero-red) / 0.5))' }} />
        <div className="absolute top-40 right-32 w-24 h-24 rotate-45 opacity-25" 
             style={{ background: 'linear-gradient(45deg, hsl(var(--hero-red)), transparent)' }} />
        <div className="absolute bottom-32 left-40 w-40 h-20 rounded-full opacity-20" 
             style={{ background: 'linear-gradient(90deg, hsl(var(--hero-red)), hsl(var(--pure-white) / 0.1))' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full opacity-25" 
             style={{ background: 'linear-gradient(135deg, hsl(var(--pure-white) / 0.2), hsl(var(--hero-red) / 0.3))' }} />
        
        {/* Geometric patterns */}
        <div className="absolute top-60 left-1/3 w-16 h-16 border-2 border-white/20 rotate-12" />
        <div className="absolute bottom-40 right-1/4 w-20 h-20 border-2 border-red-400/30 rotate-45" />
        
        {/* Text elements */}
        <div className="absolute top-1/3 left-1/4 text-white/30 text-lg font-bold rotate-12">
          DESIGNER
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-red-400/40 text-xl font-bold -rotate-6">
          DEVELOPER
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 text-6xl font-black uppercase tracking-wider">
          HAMZA
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-400/50 rounded-full" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/60 rounded-full" />
      </div>

      {/* Reveal mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={revealStyle}
      />

      {/* Loading indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/80 text-lg font-medium mb-4">
          Move your cursor to explore
        </div>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Custom cursor */}
      <div 
        className="absolute pointer-events-none z-10 w-8 h-8 border-2 border-white/80 rounded-full"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: 'radial-gradient(circle, hsl(var(--hero-red) / 0.3), transparent)',
          boxShadow: '0 0 20px hsl(var(--hero-red) / 0.5)',
        }}
      />
    </div>
  );
};

export default InteractiveCursorLoader;