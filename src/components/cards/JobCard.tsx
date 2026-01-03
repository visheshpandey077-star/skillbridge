import { MapPin, Briefcase, Clock, Bookmark, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  salary?: string;
  posted: string;
  skills: string[];
  isBookmarked?: boolean;
  onApply?: () => void;
  onBookmark?: () => void;
  className?: string;
}

export function JobCard({
  title,
  company,
  location,
  type,
  salary,
  posted,
  skills,
  isBookmarked,
  onApply,
  onBookmark,
  className,
}: JobCardProps) {
  return (
    <div className={cn(
      'bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50',
      className
    )}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold font-display text-lg text-foreground hover:text-primary cursor-pointer transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onBookmark}
          className={cn(
            'shrink-0',
            isBookmarked && 'text-primary'
          )}
        >
          <Bookmark className={cn('w-5 h-5', isBookmarked && 'fill-current')} />
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          {location}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase className="w-4 h-4" />
          {type}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {posted}
        </span>
      </div>

      {salary && (
        <p className="mt-3 text-lg font-semibold text-foreground">{salary}</p>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3 mt-5">
        <Button onClick={onApply} className="flex-1">
          Apply Now
        </Button>
        <Button variant="outline" className="flex-1">
          Learn More
        </Button>
      </div>
    </div>
  );
}
