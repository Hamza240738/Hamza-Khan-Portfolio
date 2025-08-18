import { useEffect, useRef } from 'react';
import { Palette, Monitor, Search, Zap } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Monitor,
      title: 'Product Design',
      description: 'End-to-end product design from concept to launch',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Beautiful, modern interfaces that users love',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Search,
      title: 'UX Research',
      description: 'Data-driven insights to optimize user experiences',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Branding',
      description: 'Creating memorable brand identities that connect',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-pure-black relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-hero-red rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* About Text */}
          <div className="text-center mb-16">
            <h2 className="text-section text-foreground mb-8 animate-on-scroll">
              About Me
            </h2>
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto animate-on-scroll">
              Certified in UI/UX Design by Saylani Welfare, I craft visually striking, 
              user-focused digital experiences that balance creativity with usability. 
              My passion lies in solving complex problems through elegant design solutions 
              that make a real impact.
            </p>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 
                              shadow-lg hover:shadow-2xl transition-all duration-500 ease-out
                              animate-[float_6s_ease-in-out_infinite] hover:-translate-y-2 hover:scale-105
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent 
                              before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300 
                              hover:before:opacity-100"
                     style={{ 
                       animationDelay: `${index * 1.5}s`,
                       '--tw-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                     } as React.CSSProperties}
                >
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.gradient} 
                                   flex items-center justify-center shadow-lg group-hover:scale-110 
                                   transition-transform duration-300`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white text-center mb-3 
                               group-hover:text-white transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-white/80 text-center leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;