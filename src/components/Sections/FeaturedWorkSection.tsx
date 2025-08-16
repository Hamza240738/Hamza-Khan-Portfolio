import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/Projects/ProjectCard';

const FeaturedWorkSection = () => {
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

  // Featured projects (first 3 from work page)
  const featuredProjects = [
    {
      title: 'Visionary Coders',
      category: 'Education Platform',
      imageUrl: '/lovable-uploads/628c50b2-9f73-41b7-98e8-26e8fa51bb26.png',
      liveUrl: 'https://visionarycoders.lovable.app'
    },
    {
      title: 'My Safety LLC',
      category: 'Safety Training',
      imageUrl: '/lovable-uploads/c3fd700a-854c-4c81-a0bf-dc5812a1ac43.png',
      liveUrl: 'https://my-safety-llc.lovable.app'
    },
    {
      title: 'Omnifood',
      category: 'Food Delivery',
      imageUrl: '/lovable-uploads/e588c737-d2c5-4ea5-95f6-fe18492d61b7.png',
      liveUrl: 'https://omnifood.lovable.app'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted relative overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pure-black via-muted to-pure-black opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-hero-red/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section text-foreground mb-6 animate-on-scroll">
              Featured Work
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              A selection of recent projects showcasing creative solutions and technical excellence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>

          {/* View All Work Button */}
          <div className="text-center animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-hero-red hover:bg-hero-red/90 text-pure-white font-semibold uppercase tracking-wide px-8 py-3 group"
              asChild
            >
              <Link to="/work">
                View All Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;