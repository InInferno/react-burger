import { ReactNode } from 'react';
import { store } from '../services/store';

export type RootState = ReturnType<typeof store.getState>;

export interface ICard {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  uuid: string;
  __v: number;
  _id: string;
}

export interface ILocation {
  hash: string;
  pathname: string;
  search: string;
  state: any;
} 

export interface IConstructorCard {
  id: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  constructorCard: ICard;
} 

export interface IIngredientCard {
  card: ICard;
}

export interface IIngredientDetails {
  success: boolean;
  data: Array<ICard>;
}

export interface IModal {
  children: ReactNode;
  closeModal: () => void;
}

export interface IModalOverlay {
  closeModal: () => void;
}

export interface IOrderInfo {
  success: boolean;
  name: string;
  order: {
    ingredients: Array<ICard>;
    _id: string;
    owner: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    },
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
}

export interface IRest {
  exact?: boolean;
  path: string;
  children: ReactNode;
  rest?: {
    path: string;
    exact: boolean,
    location: {
      pathname: string;
      search: string;
      hash: string;
      key: string;
    },
    computedMatch: {
      path: string;
      url: string;
      isExact: true,
      params: any
    }
  }
}

export interface IOrderListComponent {
  url: string;
}

export interface IOrderCard {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface IOrdersInfo {
  total: number;
  totalToday: number;
  orders: Array<IOrderCard>
}

export interface IOrder {
  url: string;
  orderInfo: IOrderCard;
}

export interface IUniqueIngredientsObj {
  [key: string]: ICard;
}
