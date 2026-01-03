import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Briefcase,
  Search,
  FileText,
  ChartBar,
  Users,
  PlusCircle,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const fresherNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: User, label: 'My Profile', path: '/profile' },
  { icon: Briefcase, label: 'Jobs', path: '/jobs' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: FileText, label: 'Talent Report', path: '/talent-report' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const recruiterNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Talent Search', path: '/talent-search' },
  { icon: PlusCircle, label: 'Post Job', path: '/post-job' },
  { icon: Briefcase, label: 'My Jobs', path: '/my-jobs' },
  { icon: ChartBar, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { role, logout, user } = useAuth();
  const location = useLocation();

  const navItems = role === 'fresher' ? fresherNavItems : recruiterNavItems;

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 hidden lg:flex flex-col',
        collapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">SkillBridge</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto">
            <Briefcase className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn('shrink-0', collapsed && 'mx-auto')}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User section */}
      <div className="p-3 border-t border-border">
        {!collapsed ? (
          <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name || 'User'}</p>
              <p className="text-xs text-muted-foreground capitalize">{role}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={logout} className="shrink-0">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <Button variant="ghost" size="icon" onClick={logout} className="w-full">
            <LogOut className="w-4 h-4" />
          </Button>
        )}
      </div>
    </aside>
  );
}
