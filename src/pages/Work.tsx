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
      title: 'Video Editor Portfolio',
      category: 'Creative Storytelling',
      imageUrl: '/lovable-uploads/b6f320e5-09dc-47d7-bba2-0e4a08d12947.png',
      liveUrl: 'https://editor-portfolio.lovable.app'
    },
    {
      title: 'Indus Hotel',
      category: 'Luxury Hospitality',
      imageUrl: '/lovable-uploads/d8eb8a11-cce0-4453-a36f-3720eed4e93a.png',
      liveUrl: 'https://indus-hotel.lovable.app'
    },
    {
      title: 'Mövenpick Resort',
      category: 'Paradise Hotel',
      imageUrl: '/lovable-uploads/c4385fef-6027-4c37-abdb-4dc32e0255a2.png',
      liveUrl: 'https://movenpick-hotel.lovable.app'
    },
    {
      title: 'Nature\'s Pulse',
      category: 'Wellness Platform',
      imageUrl: '/lovable-uploads/9d1ea509-45bf-4b52-8d53-30234144edb5.png',
      liveUrl: 'https://nature-pulse.lovable.app'
    },
    {
      title: 'Vital Trainer',
      category: 'Fitness App',
      imageUrl: '/lovable-uploads/0228f5a4-285a-497c-9a7d-5cd5be5ed139.png',
      liveUrl: 'https://vital-trainer.lovable.app'
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