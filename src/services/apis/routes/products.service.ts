import { axiosInstanceWithToken } from '../config';

const BASE_URL = import.meta.env.VITE_API_URL_BASE;

export const getAllProductsWithFilters = async (
  numregiao: number,
  codfilial: number,
  codprod: string,
  codfab: string,
  descricao: string,
  aplicacao: string,
  refauxiliar: string,
  codmarca: number | string,
  colunaTabelaPrecos: number,
  sortBy: string,
  sortDirection: string,
  page: string | number,
  pageSize: string
) => {
  try {
    const params = {
      numregiao,
      codfilial,
      codprod,
      codfab,
      descricao,
      aplicacao,
      refauxiliar,
      codmarca,
      colunaTabelaPrecos,
      sortBy,
      sortDirection,
      page,
      'page-size': pageSize,
    };

    // Filtra os parâmetros removendo undefined, null e strings vazias
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(
        ([, value]) => value !== undefined && value !== null && value !== ''
      )
    );

    const response = await axiosInstanceWithToken.get(
      `${BASE_URL}/produtos/simplificado`,
      {
        params: filteredParams,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (codprod: string) => {
  try {
    const response = await axiosInstanceWithToken.get(
      `${BASE_URL}/produtos/${codprod}`,
      {
        headers: {
          'api-key': 'ntcur0Fd7Gd3gsH351a8S95MmXrln9',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
