import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const ProgressLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Crafting pixels…",
    "Designing experiences…", 
    "Loading creativity…",
    "Building interfaces…",
    "Almost ready…"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 2;
        
        // Change message every 20% progress
        const messageIndex = Math.floor(newProgress / 20);
        if (messageIndex !== currentMessageIndex && messageIndex < messages.length) {
          setCurrentMessageIndex(messageIndex);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before completing
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentMessageIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Hamza Khan
          </h1>
          <p className="text-muted-foreground text-sm">
            UI/UX Designer & Developer
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg font-medium text-foreground animate-fade-in">
              {messages[currentMessageIndex]}
            </p>
          </div>
          
          <div className="space-y-2">
            <Progress 
              value={progress} 
              className="h-2 bg-secondary/50"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>{Math.round(progress)}%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            <span>Preparing your experience</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressLoader;