import { jwtDecode } from 'jwt-decode';
import { axiosIntanceWithoutToken } from '../config';
import Cookies from 'js-cookie';

const BASE_URL = import.meta.env.VITE_API_URL_BASE;

export const login = async (login: string, password: string) => {
  try {
    const response = await axiosIntanceWithoutToken.post(
      `${BASE_URL}/auth/login`,
      {
        login,
        password,
      }
    );

    if (response.data.token) {
      const token = response.data.token;

      Cookies.set('token', token, { expires: 1, secure: true });

      const loginData = jwtDecode(token);

      const loginDataStringfy = JSON.stringify(loginData);

      Cookies.set('loginData', loginDataStringfy, { expires: 1, secure: true });
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
