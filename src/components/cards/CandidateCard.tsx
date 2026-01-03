import { MapPin, Star, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CandidateCardProps {
  name: string;
  title: string;
  location: string;
  avatar?: string;
  rating?: number;
  skills: string[];
  experience: string;
  availability: string;
  matchScore?: number;
  onContact?: () => void;
  onViewProfile?: () => void;
  className?: string;
}

export function CandidateCard({
  name,
  title,
  location,
  avatar,
  rating,
  skills,
  experience,
  availability,
  matchScore,
  onContact,
  onViewProfile,
  className,
}: CandidateCardProps) {
  return (
    <div className={cn(
      'bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50',
      className
    )}>
      {matchScore && (
        <div className="flex justify-end mb-3">
          <Badge className="bg-success/10 text-success border-0">
            {matchScore}% Match
          </Badge>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold shrink-0">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover rounded-xl" />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold font-display text-lg text-foreground truncate">
            {name}
          </h3>
          <p className="text-muted-foreground truncate">{title}</p>
          <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {location}
            </span>
            {rating && (
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                {rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.slice(0, 4).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {skills.length > 4 && (
          <Badge variant="outline" className="text-xs">
            +{skills.length - 4} more
          </Badge>
        )}
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        <div>
          <span className="text-muted-foreground">Experience:</span>
          <span className="ml-1 font-medium">{experience}</span>
        </div>
        <div>
          <span className="text-muted-foreground">Available:</span>
          <span className="ml-1 font-medium text-success">{availability}</span>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <Button onClick={onContact} className="flex-1">
          <Mail className="w-4 h-4" />
          Contact
        </Button>
        <Button variant="outline" onClick={onViewProfile} className="flex-1">
          View Profile
        </Button>
      </div>
    </div>
  );
}
