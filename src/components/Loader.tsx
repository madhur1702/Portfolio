import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Logo/Name with glow effect */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold gradient-text glow-effect">
            Portfolio
          </h1>
          <div className="text-xl text-muted-foreground">
            Loading amazing experience...
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        <div className="text-2xl font-mono text-primary">
          {progress}%
        </div>

        {/* Floating orbs animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce-gentle" 
               style={{ animationDelay: '0s' }} />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-bounce-gentle" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple/20 rounded-full blur-xl animate-bounce-gentle" 
               style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </div>
  );
};

export default Loader;