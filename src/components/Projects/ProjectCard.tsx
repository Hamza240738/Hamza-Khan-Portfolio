import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  liveUrl: string;
  index: number;
}

const ProjectCard = ({ title, category, imageUrl, liveUrl, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Title Bar */}
      <div className="bg-pure-black border border-hero-red/20 rounded-t-lg p-4 mb-0">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-hero-red transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-hero-red uppercase tracking-wide">
              {category}
            </p>
          </div>
          <ExternalLink 
            className="w-5 h-5 text-muted-foreground group-hover:text-hero-red transition-colors duration-300 cursor-pointer hover:scale-110 transition-transform" 
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveUrl, '_blank');
            }}
          />
        </div>
      </div>

      {/* Project Mockup */}
      <div 
        className="relative bg-gradient-dark rounded-b-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(liveUrl, '_blank')}
      >
        {/* MacBook Mockup */}
        <div className="p-8 pb-12">
          <div className="relative">
            {/* MacBook Screen Frame */}
            <div className="bg-muted rounded-lg p-1 shadow-card">
              <div className="bg-pure-black rounded-md p-2 relative overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Website Preview */}
                <div className="aspect-video bg-muted rounded overflow-hidden relative">
                  <img
                    src={imageUrl}
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-hero-red/20 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center">
                      <ExternalLink className="w-8 h-8 text-pure-white mx-auto mb-2" />
                      <p className="text-pure-white font-semibold">View Live Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook Base */}
            <div className="h-2 bg-muted rounded-b-lg transform perspective-1000 rotate-x-12 mt-1"></div>
          </div>
        </div>

        {/* Floating Animation */}
        <div className={`absolute inset-0 transition-transform duration-500 ${
          isHovered ? 'transform -translate-y-2' : 'transform translate-y-0'
        }`} />
      </div>
    </div>
  );
};

export default ProjectCard;