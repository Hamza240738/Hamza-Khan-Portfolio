import { useEffect, useRef } from 'react';
const ToolsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const tools = [{
    name: 'Figma',
    color: '#F24E1E',
    icon: '🎨'
  }, {
    name: 'Adobe Illustrator',
    color: '#FF9A00',
    icon: '🎯'
  }, {
    name: 'Adobe Photoshop',
    color: '#31A8FF',
    icon: '📸'
  }, {
    name: 'Framer',
    color: '#0055FF',
    icon: '⚡'
  }];
  return <section ref={sectionRef} className="py-20 bg-gradient-red-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hero-red/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pure-white/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section text-foreground mb-12 animate-on-scroll">
            Tools & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => <div key={tool.name} className="group animate-on-scroll" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/20 group-hover:border-hero-red/50 transition-all duration-500 group-hover:scale-105">
                  {/* Tool Icon */}
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {tool.icon}
                  </div>
                  
                  {/* Tool Name */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-hero-red transition-colors duration-300">
                    {tool.name}
                  </h3>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" style={{
                backgroundColor: tool.color
              }} />
                </div>
              </div>)}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 animate-on-scroll" style={{
          animationDelay: '0.6s'
        }}>
            
          </div>
        </div>
      </div>
    </section>;
};
export default ToolsSection;