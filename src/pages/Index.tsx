import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { AuthScreen } from '@/components/AuthScreen';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && role) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, role, navigate]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return <AuthScreen />;
};

export default Index;
