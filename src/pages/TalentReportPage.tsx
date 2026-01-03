import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { SkillProgress } from '@/components/cards/SkillProgress';
import { dummySkills } from '@/data/dummyData';
import { TrendingUp, Target, Award, Zap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function TalentReportPage() {
  const overallScore = 72;
  const readinessLevel = overallScore >= 80 ? 'Ready' : overallScore >= 60 ? 'Almost Ready' : 'Building';

  const recommendations = [
    { text: 'Complete AWS certification to boost cloud skills', priority: 'high' },
    { text: 'Add 2 more portfolio projects', priority: 'medium' },
    { text: 'Practice system design interviews', priority: 'high' },
    { text: 'Improve Docker proficiency', priority: 'medium' },
  ];

  const achievements = [
    { label: 'Profile 90% Complete', achieved: true },
    { label: '5+ Skills Added', achieved: true },
    { label: 'Portfolio Updated', achieved: true },
    { label: 'Verified Email', achieved: true },
    { label: 'Passed Skills Assessment', achieved: false },
    { label: 'Received 3+ Reviews', achieved: false },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl lg:text-3xl font-bold">Talent Readiness Report</h1>
          <p className="text-muted-foreground mt-1">
            Your personalized career readiness analysis
          </p>
        </div>

        {/* Score overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main score */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold mb-6">Overall Readiness Score</h2>
            
            <div className="flex items-center gap-8">
              {/* Circular progress */}
              <div className="relative w-40 h-40 shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${overallScore * 4.4} 440`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(217, 91%, 50%)" />
                      <stop offset="100%" stopColor="hsl(199, 89%, 48%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold font-display">{overallScore}</span>
                  <span className="text-sm text-muted-foreground">out of 100</span>
                </div>
              </div>

              {/* Score breakdown */}
              <div className="flex-1">
                <div className={cn(
                  'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4',
                  overallScore >= 80 && 'bg-success/10 text-success',
                  overallScore >= 60 && overallScore < 80 && 'bg-primary/10 text-primary',
                  overallScore < 60 && 'bg-warning/10 text-warning'
                )}>
                  <Target className="w-4 h-4" />
                  {readinessLevel}
                </div>
                <p className="text-muted-foreground">
                  You're making great progress! Focus on the recommended improvements to boost your score and increase your chances of landing your dream job.
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-sm">This Month</span>
                </div>
                <span className="font-semibold text-success">+8 pts</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm">Top Skills</span>
                </div>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-warning" />
                  <span className="text-sm">To Improve</span>
                </div>
                <span className="font-semibold">4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold mb-6">Skills Assessment</h2>
            <div className="space-y-5">
              {dummySkills.map((skill) => (
                <SkillProgress key={skill.skill} {...skill} />
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold mb-4">Recommendations</h2>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3 p-3 rounded-xl border',
                      rec.priority === 'high' ? 'border-warning/50 bg-warning/5' : 'border-border bg-secondary/30'
                    )}
                  >
                    <AlertCircle className={cn(
                      'w-5 h-5 shrink-0 mt-0.5',
                      rec.priority === 'high' ? 'text-warning' : 'text-muted-foreground'
                    )} />
                    <span className="text-sm">{rec.text}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">
                Get Personalized Plan
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Achievements */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold mb-4">Achievements</h2>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center gap-2 p-3 rounded-xl text-sm',
                      achievement.achieved ? 'bg-success/10 text-success' : 'bg-secondary text-muted-foreground'
                    )}
                  >
                    <CheckCircle2 className={cn('w-4 h-4', !achievement.achieved && 'opacity-40')} />
                    <span className={!achievement.achieved ? 'opacity-60' : ''}>{achievement.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
