export type TItems = 'CODE_COMPUTER' | 'BUILDING' | 'CAR' | 'SHOPPING' | 'AIRPLANE';

export interface IItem {
  name: string;
  price: number;
}

export interface ICategory {
  name: string;
  value: string;
}
