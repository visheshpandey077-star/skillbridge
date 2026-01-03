import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/cards/StatCard';
import { CandidateCard } from '@/components/cards/CandidateCard';
import { useAuth } from '@/contexts/AuthContext';
import { dummyCandidates, dummyStats } from '@/data/dummyData';
import { Briefcase, Users, Calendar, UserCheck, ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function RecruiterDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const stats = dummyStats.recruiter;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="font-display text-2xl lg:text-3xl font-bold">
            Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's your recruiting overview
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Active Jobs"
            value={stats.activeJobs.value}
            change={stats.activeJobs.change}
            changeType={stats.activeJobs.changeType}
            icon={<Briefcase className="w-6 h-6" />}
          />
          <StatCard
            title="Total Candidates"
            value={stats.totalCandidates.value.toLocaleString()}
            change={stats.totalCandidates.change}
            changeType={stats.totalCandidates.changeType}
            icon={<Users className="w-6 h-6" />}
          />
          <StatCard
            title="Interviews"
            value={stats.interviews.value}
            change={stats.interviews.change}
            changeType={stats.interviews.changeType}
            icon={<Calendar className="w-6 h-6" />}
          />
          <StatCard
            title="Successful Hires"
            value={stats.hires.value}
            change={stats.hires.change}
            changeType={stats.hires.changeType}
            icon={<UserCheck className="w-6 h-6" />}
          />
        </div>

        {/* Quick actions */}
        <div className="bg-gradient-hero rounded-2xl p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="font-display text-xl lg:text-2xl font-bold text-primary-foreground">
                Find Your Next Great Hire
              </h2>
              <p className="text-primary-foreground/80 mt-1">
                Post a new job or search our talent pool of 50K+ professionals
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => navigate('/post-job')}
                className="bg-primary-foreground/20 text-primary-foreground border-0 hover:bg-primary-foreground/30"
              >
                <Plus className="w-4 h-4" />
                Post a Job
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/talent-search')}
                className="bg-primary-foreground/20 text-primary-foreground border-0 hover:bg-primary-foreground/30"
              >
                Search Talent
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Top candidates */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold">Top Matching Candidates</h2>
            <Button variant="ghost" onClick={() => navigate('/talent-search')}>
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {dummyCandidates.slice(0, 4).map((candidate) => (
              <CandidateCard key={candidate.id} {...candidate} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
