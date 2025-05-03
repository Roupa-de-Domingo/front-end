import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import React from 'react';

const isAuthenticated = () => {
  const token = Cookies.get('token');

  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token);

    return decoded.exp * 1000 > Date.now();
  } catch (error) {
    return false;
  }
};

interface ProtectedRouteProps {
  children: React.ReactNode;
  path?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, path }) => {
  // if (isAuthenticated() && path === '/clientes') {
  //   return children;
  // }

  // if (isAuthenticated()) {
  //   return <Navigate to="/clientes" replace />;
  // }

  // if (isAuthenticated() && path === '/login') {
  //   return <Navigate to="/clientes" replace />;
  // }

  if (isAuthenticated()) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
