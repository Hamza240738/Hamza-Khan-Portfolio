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
  const tools = [
    {
      name: 'Figma',
      color: '#F24E1E',
      hoverColor: 'rgba(242, 78, 30, 0.3)',
      shadowColor: 'rgba(242, 78, 30, 0.5)',
      borderColor: 'rgba(242, 78, 30, 0.4)',
      icon: '🎨'
    },
    {
      name: 'Adobe Illustrator', 
      color: '#FF9A00',
      hoverColor: 'rgba(255, 154, 0, 0.3)',
      shadowColor: 'rgba(255, 154, 0, 0.5)',
      borderColor: 'rgba(255, 154, 0, 0.4)',
      icon: '🎯'
    },
    {
      name: 'Adobe Photoshop',
      color: '#31A8FF', 
      hoverColor: 'rgba(49, 168, 255, 0.3)',
      shadowColor: 'rgba(49, 168, 255, 0.5)',
      borderColor: 'rgba(49, 168, 255, 0.4)',
      icon: '📸'
    },
    {
      name: 'Framer',
      color: '#8B5CF6',
      hoverColor: 'rgba(139, 92, 246, 0.3)', 
      shadowColor: 'rgba(139, 92, 246, 0.5)',
      borderColor: 'rgba(139, 92, 246, 0.4)',
      icon: '⚡'
    }
  ];
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {tools.map((tool, index) => (
              <div 
                key={tool.name} 
                className="group animate-on-scroll" 
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div 
                  className="relative p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border transition-all duration-300 ease-out cursor-pointer
                            hover:-translate-y-2 hover:scale-105"
                  style={{
                    borderColor: tool.borderColor,
                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 12px 40px ${tool.shadowColor}, 0 0 30px ${tool.hoverColor}`;
                    e.currentTarget.style.borderColor = tool.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 20px rgba(0, 0, 0, 0.1)`;
                    e.currentTarget.style.borderColor = tool.borderColor;
                  }}
                >
                  {/* Tool Icon */}
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:animate-pulse">
                    {tool.icon}
                  </div>
                  
                  {/* Tool Name */}
                  <h3 
                    className="text-sm md:text-lg font-semibold text-foreground transition-all duration-300"
                    style={{
                      textShadow: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = `0 0 10px ${tool.color}`;
                      e.currentTarget.style.color = tool.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                      e.currentTarget.style.color = 'hsl(var(--foreground))';
                    }}
                  >
                    {tool.name}
                  </h3>

                  {/* Glow Effect Background */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tool.color} 0%, transparent 70%)`
                    }}
                  />
                </div>
              </div>
            ))}
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