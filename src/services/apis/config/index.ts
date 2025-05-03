import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const axiosIntanceWithoutToken = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE,
});

const axiosInstanceWithToken = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BASE,
});

axiosInstanceWithToken.interceptors.request.use(
  async (config) => {
    const token = Cookies.get('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);

      // Verifica se o token está expirado
      const isTokenExpired = decodedToken.exp * 1000 < Date.now();
      if (isTokenExpired) {
        Cookies.remove('token');
        Cookies.remove('loginData');
        window.location.href = '/login'; // Redireciona para login
        return Promise.reject(new Error('Token expirado'));
      }

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosIntanceWithoutToken, axiosInstanceWithToken };
