export interface OrderItem {
  numseq: number;
  codprod: number;
  pvenda: number;
  qt: number;
  qtFaturada: number;
  observacaoPc: string;
  corte: boolean;
}

export interface OrderResponse {
  numped: number;
  numpedrca: number;
  observacao: string;
  codusur: number;
  cgccli: string;
  dtHoraPedido: string;
  dtInclusao: string;
  posicaoAtual: string;
  dtAlteracao: string;
  chavenfe: string;
  itens: OrderItem[];
}
