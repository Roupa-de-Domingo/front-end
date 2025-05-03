export interface Aplicacao {
  numSeq: number;
  codprod: number;
  codmarca: number;
  marca: string;
  aplicacao: string;
  local: string;
  nivelAcesso: number;
  codlinha: number;
  linha: string;
  codsec: number;
  secao: string;
  codcategoria: number;
  categoria: string;
}

export interface Especificacao {
  numSeq: number;
  codprod: number;
  especificacao: string;
  valor: string;
  nivelAcesso: number;
}

export interface ReferenciaAuxiliar {
  numSeq: number;
  codprod: number;
  referencia: string;
  referenciaLimpo: string;
  codMarca: number;
  marca: string;
  nivelAcesso: number;
  observacao: string | null;
}

export interface DadosExtras {
  aplicacoes: Aplicacao[];
  especificacoes: Especificacao[];
  produtosRelacionados: any[];
  produtosSimilares: any[];
  referenciasAuxiliares: ReferenciaAuxiliar[];
}

export interface Product {
  estoque: number;
  codprod: number;
  descricao: string;
  nomeecommerce: string | null;
  embalagem: string;
  pesoliq: number;
  pesobruto: number;
  codepto: number;
  departamento: string;
  codsec: number;
  secao: string;
  codcategoria: number | null;
  categoria: string | null;
  codsubcategoria: number | null;
  subcategoria: string | null;
  codmarca: number;
  marca: string;
  pvenda: number;
  dadosExtras: DadosExtras;
  codfab: number | string;
}

export interface ProductsResponseData {
  content: Product[];
  number: number;
  size: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  totalPages: number;
  hasContent: boolean;
  numberOfElements: number;
}

export interface ProductInCart {
  codprod: number;
  descricao: string;
  pvenda: number;
  marca: string;
  quantity: number;
  pesobruto: number;
  codfab: number | string;
}

export interface Filter {
  label: string;
  filterParam: string;
  value: string;
}

export interface Filters {
  codprod: Filter;
  codfab: Filter;
  descricao: Filter;
  aplicacao: Filter;
  refauxiliar: Filter;
  codmarca: Filter;
}

export interface DeliveryCalculation {
  codfornec: number;
  transportador: string;
  valor: number;
  diasEntrega: number;
}
