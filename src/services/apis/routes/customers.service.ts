import { axiosInstanceWithToken } from '../config';

const BASE_URL = import.meta.env.VITE_API_URL_BASE;

export const getAllCustomersWithFilters = async (
  codcli: string,
  cliente: string,
  fantasia: string,
  cnpj: string,
  sortBy: string,
  sortDirection: string,
  page: string | number,
  pageSize: string | number,
  codfilial: number
) => {
  try {
    const response = await axiosInstanceWithToken.get(
      `${BASE_URL}/clientes/simplificado`,
      {
        params: {
          codcli,
          cliente,
          fantasia,
          cnpj,
          sortBy,
          sortDirection,
          page,
          'page-size': pageSize,
          codfilial,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomerById = async (codcli: number) => {
  try {
    const response = await axiosInstanceWithToken.get(
      `${BASE_URL}/clientes/${codcli}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
