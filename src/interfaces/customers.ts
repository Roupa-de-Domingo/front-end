export interface Customer {
  codcli: number;
  cliente: string;
  fantasia: string;
  cnpj: string;
  ie: string;
  endereco: string;
  numero: null;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
  telefone: string;
}

export interface Filter {
  label: string;
  filterParam: string;
  value: string;
}

export interface CustomerFilters {
  codcli: Filter;
  cliente: Filter;
  fantasia: Filter;
  cnpj: Filter;
}

export type Endereco = {
  logradouro?: string;
  numero?: string;
  bairro?: string;
  telefone?: string;
  municipio: string;
  uf: string;
  cep?: string;
};

export type PlanoPagamento = {
  codplpag: number;
  colunaTabelaPrecos: number;
  descricao: string;
  numdias: number;
  tipoprazo: string;
  tipovenda: string;
  pertxfim: number;
  obs?: string;
  vlminpedido: number;
  vendabk?: string;
  enviaplanofv?: string;
  formaparcelamento: string;
  codfilial: string;
  usamultifilial?: string;
  naocobrartxboleto?: string;
  prazo1?: number | null;
  prazo2?: number | null;
  prazo3?: number | null;
  prazo4?: number | null;
  prazo5?: number | null;
  prazo6?: number | null;
  prazo7?: number | null;
  prazo8?: number | null;
  prazo9?: number | null;
  prazo10?: number | null;
  prazo11?: number | null;
  prazo12?: number | null;
};

export type RotaExpedicao = {
  codrota: number;
  descricao: string;
  prazoprevent: number;
  diadom: boolean;
  diaseg: boolean;
  diater: boolean;
  diaqua: boolean;
  diaqui: boolean;
  diasex: boolean;
  diasab: boolean;
};

export type Regiao = {
  codfilial: number;
  numregiao: number;
};

export type CustomerById = {
  cnpj: string;
  codcli: number;
  cliente: string;
  fantasia: string;
  ie: string;
  codRamoAtividade: number;
  enderecoEntrega: Endereco;
  enderecoCobranca: Endereco;
  enderecoComercial: Endereco;
  codVendedor: number;
  codpraca: number;
  obs?: string | null;
  email?: string | null;
  emailnfe?: string | null;
  codcob: string;
  codplpag: number;
  codcidadeibge: number;
  codfilialnf?: number | null;
  consumidorfinal: boolean;
  contribuinte: boolean;
  calculast: boolean;
  ativo: boolean;
  dtcadastro: string;
  dtultalter: string;
  dtexclusao?: string | null;
  codpais: number;
  ramo: string;
  cobranca: string;
  cobrancaBoleto: boolean;
  planopagamento: string;
  pais: string;
  qtcheckout?: number | null;
  limcred: number;
  limcreddisp: number;
  tipofj: string;
  freqvisita?: number | null;
  atendedomingo: boolean;
  atendesegunda: boolean;
  atendeterca: boolean;
  atendequarta: boolean;
  atendequinta: boolean;
  atendesexta: boolean;
  atendesabado: boolean;
  classevenda?: string | null;
  bloqueio: boolean;
  bloqueiosefaz: boolean;
  codRamoAtividadePrincipal?: number | null;
  ramoPrincipal?: string | null;
  perdesc?: number | null;
  roteirosVisita?: string | null;
  planosPagamento: PlanoPagamento[];
  contatos?: string | null;
  rotaExpedicao: RotaExpedicao;
  regioes: Regiao[];
  ramoNielsen?: string | null;
  planosPagamento308?: string[];
  telcelent?: string | null;
  sexo?: string | null;
  dtnasc?: string | null;
};
