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
      className="group animate-scale-in-bounce hover:scale-[1.02] transition-all duration-500 hover:shadow-glow"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Project Title Bar */}
      <div className="bg-pure-black border border-hero-red/20 rounded-t-lg p-4 mb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-hero-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-hero-red transition-all duration-500 group-hover:animate-text-reveal">
              {title}
            </h3>
            <p className="text-sm text-hero-red uppercase tracking-wide animate-slide-in-left" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              {category}
            </p>
          </div>
          <ExternalLink 
            className="w-5 h-5 text-muted-foreground group-hover:text-hero-red transition-all duration-500 cursor-pointer hover:scale-125 hover:rotate-12 hover:animate-glow-pulse" 
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
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-100'
                    }`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-hero-red/30 via-hero-red/20 to-transparent flex items-center justify-center transition-all duration-500 ${
                    isHovered ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
                  }`}>
                    <div className={`text-center transform transition-all duration-500 ${
                      isHovered ? 'scale-100 translate-y-0' : 'scale-75 translate-y-4'
                    }`}>
                      <ExternalLink className="w-8 h-8 text-pure-white mx-auto mb-2 animate-bounce-gentle" />
                      <p className="text-pure-white font-semibold animate-fade-in-up">View Live Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook Base */}
            <div className="h-2 bg-muted rounded-b-lg transform perspective-1000 rotate-x-12 mt-1"></div>
          </div>
        </div>

        {/* Enhanced Floating Animation */}
        <div className={`absolute inset-0 transition-all duration-700 ease-out ${
          isHovered ? 'transform -translate-y-3 rotate-1' : 'transform translate-y-0 rotate-0'
        }`} />
        
        {/* Shimmer Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/10 to-transparent transform -skew-x-12 transition-all duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
      </div>
    </div>
  );
};

export default ProjectCard;