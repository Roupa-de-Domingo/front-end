import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { TShirts } from './pages/TShirts';
import { TShirtsDetails } from './pages/TShirtsDetails';
import { Bag } from './pages/Bag';
import { FinalizeOrder } from './pages/FinalizeOrder';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/camisetas" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/camisetas" element={<TShirts />} />
        <Route path="/sacola" element={<Bag />} />
        <Route path="/detalhes-camiseta/:id" element={<TShirtsDetails />} />
        <Route path="/finalizar-pedido" element={<FinalizeOrder />} />
        <Route path="*" element={<Navigate to="/camisetas" replace />} />
      </Routes>
    </>
  );
};
