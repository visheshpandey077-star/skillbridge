import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/cards/StatCard';
import { JobCard } from '@/components/cards/JobCard';
import { useAuth } from '@/contexts/AuthContext';
import { dummyJobs, dummyStats } from '@/data/dummyData';
import { Eye, FileText, Calendar, Bookmark, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function FresherDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const stats = dummyStats.fresher;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="font-display text-2xl lg:text-3xl font-bold">
            Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your job search
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Profile Views"
            value={stats.profileViews.value.toLocaleString()}
            change={stats.profileViews.change}
            changeType={stats.profileViews.changeType}
            icon={<Eye className="w-6 h-6" />}
          />
          <StatCard
            title="Applications"
            value={stats.applications.value}
            change={stats.applications.change}
            changeType={stats.applications.changeType}
            icon={<FileText className="w-6 h-6" />}
          />
          <StatCard
            title="Interviews"
            value={stats.interviews.value}
            change={stats.interviews.change}
            changeType={stats.interviews.changeType}
            icon={<Calendar className="w-6 h-6" />}
          />
          <StatCard
            title="Saved Jobs"
            value={stats.savedJobs.value}
            change={stats.savedJobs.change}
            changeType={stats.savedJobs.changeType}
            icon={<Bookmark className="w-6 h-6" />}
          />
        </div>

        {/* Quick actions */}
        <div className="bg-gradient-hero rounded-2xl p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="font-display text-xl lg:text-2xl font-bold text-primary-foreground">
                Boost Your Profile
              </h2>
              <p className="text-primary-foreground/80 mt-1">
                Complete your profile to increase visibility by 40%
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => navigate('/profile')}
                className="bg-primary-foreground/20 text-primary-foreground border-0 hover:bg-primary-foreground/30"
              >
                Update Profile
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/talent-report')}
                className="bg-primary-foreground/20 text-primary-foreground border-0 hover:bg-primary-foreground/30"
              >
                <TrendingUp className="w-4 h-4" />
                View Report
              </Button>
            </div>
          </div>
        </div>

        {/* Recent jobs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold">Recommended Jobs</h2>
            <Button variant="ghost" onClick={() => navigate('/jobs')}>
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {dummyJobs.slice(0, 4).map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
