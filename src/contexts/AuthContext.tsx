import React, { createContext, useContext, ReactNode } from 'react';

export type UserRole = 'recruiter' | 'client';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User;
  role: UserRole;
  isAuthenticated: boolean;
}

// Default recruiter user for demo purposes
const defaultUser: User = {
  id: '1',
  name: 'John Recruiter',
  email: 'john@skillbridge.com',
  role: 'recruiter',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider
      value={{
        user: defaultUser,
        role: defaultUser.role,
        isAuthenticated: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
