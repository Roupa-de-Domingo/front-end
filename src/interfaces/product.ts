export interface ISizeTShirt {
  label: string;
  available: boolean;
}

export interface ITShirt {
  id: number;
  title: String;
  pricePix: number;
  priceCreditCard: number;
  sizes?: ISizeTShirt[];
}

export interface ITShirtInBag {
  id: number;
  title: String;
  pricePix: number;
  priceCreditCard: number;
  size: ISizeTShirt;
  quantity: number;
}
