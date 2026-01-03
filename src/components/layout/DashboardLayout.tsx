import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="lg:pl-64 min-h-screen flex flex-col">
        <Navbar />
        
        <main className={cn(
          'flex-1 p-4 lg:p-6',
          'pb-24 lg:pb-6' // Extra padding for mobile nav
        )}>
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
