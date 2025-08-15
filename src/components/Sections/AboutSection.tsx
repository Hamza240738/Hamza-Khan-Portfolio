import { useEffect, useRef } from 'react';
import { Palette, Monitor, Brush, Users } from 'lucide-react';

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

  const services = [
    {
      icon: Monitor,
      title: 'Product Design',
      description: 'End-to-end product design from concept to launch'
    },
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Beautiful, modern interfaces that users love'
    },
    {
      icon: Brush,
      title: 'Brand Identity',
      description: 'Cohesive brand experiences across all touchpoints'
    },
    {
      icon: Users,
      title: 'UX Design',
      description: 'User-centered design that drives engagement'
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-red-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-foreground group-hover:text-hero-red transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-hero-red/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-hero-red transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;