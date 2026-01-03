import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'fresher' | 'recruiter' | 'client' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  role: UserRole;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => void;
  signup: (name: string, email: string, password: string, role: UserRole) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>(null);

  const login = (email: string, _password: string, selectedRole: UserRole) => {
    // Dummy login - no real authentication
    setUser({
      id: '1',
      name: email.split('@')[0],
      email,
      role: selectedRole,
      avatar: undefined,
    });
    setRole(selectedRole);
  };

  const signup = (name: string, email: string, _password: string, selectedRole: UserRole) => {
    // Dummy signup - no real authentication
    setUser({
      id: '1',
      name,
      email,
      role: selectedRole,
      avatar: undefined,
    });
    setRole(selectedRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        setRole,
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
