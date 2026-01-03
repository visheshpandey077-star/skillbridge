import { cn } from '@/lib/utils';

interface SkillProgressProps {
  skill: string;
  level: number; // 0-100
  category?: string;
  className?: string;
}

export function SkillProgress({ skill, level, category, className }: SkillProgressProps) {
  const getColor = (level: number) => {
    if (level >= 80) return 'bg-success';
    if (level >= 60) return 'bg-primary';
    if (level >= 40) return 'bg-warning';
    return 'bg-destructive';
  };

  const getLabel = (level: number) => {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Advanced';
    if (level >= 40) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className={cn('', className)}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="font-medium text-foreground">{skill}</span>
          {category && (
            <span className="ml-2 text-xs text-muted-foreground">({category})</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{level}%</span>
          <span className={cn(
            'text-xs px-2 py-0.5 rounded-full',
            level >= 80 && 'bg-success/10 text-success',
            level >= 60 && level < 80 && 'bg-primary/10 text-primary',
            level >= 40 && level < 60 && 'bg-warning/10 text-warning',
            level < 40 && 'bg-destructive/10 text-destructive'
          )}>
            {getLabel(level)}
          </span>
        </div>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-500', getColor(level))}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
