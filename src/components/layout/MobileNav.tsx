import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Briefcase,
  Search,
  FileText,
  Users,
  PlusCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const fresherNavItems = [
  { icon: LayoutDashboard, label: 'Home', path: '/dashboard' },
  { icon: Briefcase, label: 'Jobs', path: '/jobs' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: FileText, label: 'Report', path: '/talent-report' },
  { icon: User, label: 'Profile', path: '/profile' },
];

const recruiterNavItems = [
  { icon: LayoutDashboard, label: 'Home', path: '/dashboard' },
  { icon: Users, label: 'Talent', path: '/talent-search' },
  { icon: PlusCircle, label: 'Post', path: '/post-job' },
  { icon: Briefcase, label: 'Jobs', path: '/my-jobs' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function MobileNav() {
  const { role } = useAuth();
  const location = useLocation();

  const navItems = role === 'fresher' ? fresherNavItems : recruiterNavItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border lg:hidden">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-[64px]',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <div
                className={cn(
                  'p-1.5 rounded-lg transition-all duration-200',
                  isActive && 'bg-primary/10'
                )}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
