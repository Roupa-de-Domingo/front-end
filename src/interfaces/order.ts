export interface IAccordionExpanded {
  deliver: boolean;
  freight: boolean;
  payment: boolean;
}

export interface IdeliverAddress {
  cep: string;
  city: string;
  complement: string;
  neighborhood: string;
  number: string;
  street: string;
  uf: string;
}

export interface IFreight {
  id: number;
  title: string;
  deliveryTime: number;
  value: number;
}

export interface ICreditCard {
  numberCard: string;
  nameCard: string;
  expiration: string;
  cvv: string;
  parcel: number;
}

export interface IParcel {
  quantityParcela: number;
  valueParcela: number;
}

export interface IPaymentSelected {
  type: 'creditCard' | 'billet' | 'pix';
  value: number;
}
