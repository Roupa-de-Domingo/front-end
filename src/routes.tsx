import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { TShirts } from './pages/TShirts';
import { TShirtsDetails } from './pages/TShirtsDetails';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/camisetas" element={<TShirts />} />
        <Route path="/detalhes-camiseta/:id" element={<TShirtsDetails />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};
