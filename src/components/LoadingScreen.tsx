import { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-hero opacity-5 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-hero opacity-5 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo */}
      <div className="relative mb-8 animate-float">
        <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
          <Briefcase className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl rounded-3xl" />
      </div>

      {/* Brand name */}
      <h1 className="font-display text-3xl font-bold mb-2 animate-slide-up">
        <span className="text-gradient">SkillBridge</span>
      </h1>
      <p className="text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        Connecting talent with opportunity
      </p>

      {/* Progress bar */}
      <div className="w-64 h-1.5 bg-muted rounded-full overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="mt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Loading your experience...
      </p>
    </div>
  );
}
