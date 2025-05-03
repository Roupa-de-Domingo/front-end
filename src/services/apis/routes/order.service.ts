import { axiosInstanceWithToken } from '../config';

const BASE_URL = import.meta.env.VITE_API_URL_BASE;

export const getDeliveries = async (
  codcli: number | string,
  valorTotal: number | string,
  pesoTotal: number | string
) => {
  try {
    const response = await axiosInstanceWithToken.post(`${BASE_URL}/fretes`, {
      codcli,
      valorTotal,
      pesoTotal,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const finalizeOrderSend = async (
  codfilial: number | string,
  codvendedor: number | string,
  cnpj: number | string,
  dtAberturaPedPalm: number | string,
  dtFechamentoPedPalm: number | string,
  codCob: number | string,
  codPlPag: number | string,
  codCli: number | string,
  observacoes: number | string,
  observacoesEntrega: number | string,
  vlfrete: number | string,
  itens: {
    numSeq: number | string;
    codprod: number | string;
    qt: number | string;
    pvenda: number | string;
  }[],
  codFornecFrete: number | string
) => {
  try {
    const response = await axiosInstanceWithToken.post(`${BASE_URL}/pedidos`, {
      codfilial,
      codvendedor,
      cnpj,
      dtAberturaPedPalm,
      dtFechamentoPedPalm,
      codCob,
      codPlPag,
      codCli,
      observacoes,
      observacoesEntrega,
      vlfrete,
      itens,
      codFornecFrete,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
