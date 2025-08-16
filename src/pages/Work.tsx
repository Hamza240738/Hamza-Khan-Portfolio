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
    },
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
    },
    {
      title: 'Figma Project UI',
      category: 'Design Tool',
      imageUrl: '/lovable-uploads/bc17a148-d868-4ffb-961e-00f1ae2e0f60.png',
      liveUrl: 'https://figma-project-ui.lovable.app'
    },
    {
      title: 'Silicon Graphics',
      category: 'Mobile Development',
      imageUrl: '/lovable-uploads/5f3f1785-e6a8-4780-94c6-75e671920642.png',
      liveUrl: 'https://silicon-graphics.lovable.app'
    },
    {
      title: 'Sintra Escape Hotel',
      category: 'Hospitality',
      imageUrl: '/lovable-uploads/72b12d96-fcc0-4c39-a4e2-6fc9b171000a.png',
      liveUrl: 'https://sintra-escape-hotel.lovable.app'
    },
    {
      title: 'Nature\'s Pulse App',
      category: 'Wellness Mobile',
      imageUrl: '/lovable-uploads/f2868539-6186-4454-a542-03667c08c4d7.png',
      liveUrl: 'https://app--natures-pulse-31eadf05.base44.app/'
    },
    {
      title: 'Bast Agency',
      category: 'Digital Agency',
      imageUrl: '/lovable-uploads/fbe9b969-4215-4f2f-9520-b70a212c36b7.png',
      liveUrl: 'https://bast-agency.lovable.app'
    },
    {
      title: 'Barab Clone',
      category: 'Restaurant',
      imageUrl: '/lovable-uploads/70f993c9-84c0-4219-af87-15158eb81542.png',
      liveUrl: 'https://barab-clone.lovable.app'
    },
    {
      title: 'Architecture UI',
      category: 'Architecture Firm',
      imageUrl: '/lovable-uploads/1cc122c1-c5d5-43ee-86d4-fecd677d31b8.png',
      liveUrl: 'https://architecture-ui.lovable.app'
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