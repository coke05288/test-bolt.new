import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  register: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (email: string, password: string) => {
    // 실제 구현에서는 서버에 인증 요청을 보내고 토큰을 받아와야 합니다.
    localStorage.setItem('token', 'dummy_token');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const register = (email: string, password: string) => {
    // 실제 구현에서는 서버에 회원가입 요청을 보내야 합니다.
    localStorage.setItem('token', 'dummy_token');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};