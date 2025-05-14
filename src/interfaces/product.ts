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
  urlImage: string;
}

export interface ITShirtInBag {
  id: number;
  title: String;
  pricePix: number;
  priceCreditCard: number;
  sizeSelected: ISizeTShirt;
  quantity: number;
  urlImage: string;
}
