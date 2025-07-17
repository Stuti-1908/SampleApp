import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: (_u: string, _p: string) => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = (u: string, p: string) => {
    if (u === "user" && p === "password") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const logout = () => setIsAuthenticated(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
