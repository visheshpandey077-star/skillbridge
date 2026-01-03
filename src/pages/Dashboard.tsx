import { useAuth } from '@/contexts/AuthContext';
import FresherDashboard from './FresherDashboard';
import RecruiterDashboard from './RecruiterDashboard';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (role === 'fresher') {
    return <FresherDashboard />;
  }

  // Recruiter and Client share the same dashboard
  return <RecruiterDashboard />;
}
