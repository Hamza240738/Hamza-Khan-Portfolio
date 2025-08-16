import { useEffect } from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import ProjectCard from '@/components/Projects/ProjectCard';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: 'Visionary Coders',
      category: 'Education Platform',
      imageUrl: '/lovable-uploads/b30dadb2-7760-478a-94ec-8fe0e213bdf7.png',
      liveUrl: 'https://visionarycoders.lovable.app'
    },
    {
      title: 'My Safety LLC',
      category: 'Safety Platform',
      imageUrl: '/lovable-uploads/b30dadb2-7760-478a-94ec-8fe0e213bdf7.png',
      liveUrl: 'https://my-safety-llc.lovable.app'
    },
    {
      title: 'Omnifood',
      category: 'Food Delivery',
      imageUrl: '/lovable-uploads/b30dadb2-7760-478a-94ec-8fe0e213bdf7.png',
      liveUrl: 'https://omnifood.lovable.app'
    },
    {
      title: 'Nature Pulse',
      category: 'Wellness Platform',
      imageUrl: '/lovable-uploads/d6841b81-0f00-4b7f-b259-e0a4ce737fa0.png',
      liveUrl: 'https://nature-pulse.lovable.app'
    },
    {
      title: 'Vital Trainer',
      category: 'Fitness App',
      imageUrl: '/lovable-uploads/d6841b81-0f00-4b7f-b259-e0a4ce737fa0.png',
      liveUrl: 'https://vital-trainer.lovable.app'
    },
    {
      title: 'Indus Hotel',
      category: 'Hospitality',
      imageUrl: '/lovable-uploads/d6841b81-0f00-4b7f-b259-e0a4ce737fa0.png',
      liveUrl: 'https://indus-hotel.lovable.app'
    },
    {
      title: 'Movenpick Hotel',
      category: 'Luxury Hotel',
      imageUrl: '/lovable-uploads/d6841b81-0f00-4b7f-b259-e0a4ce737fa0.png',
      liveUrl: 'https://movenpick-hotel.lovable.app'
    }
  ];

  return (
    <div className="min-h-screen bg-pure-black">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-red-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-foreground mb-6 animate-fade-in-up">
              My Work
            </h1>
            <p className="text-body-large text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A comprehensive collection of digital experiences I've crafted, 
              from web applications to mobile interfaces and brand identities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-pure-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
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
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Work;