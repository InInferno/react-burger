import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import { store } from '../services/store';

export const cardPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired
});

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
  succuss: boolean;
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

export interface IOrderList {
  id: string;
  date: string;
  name: string;
  ingredients: Array<ICard>;
  price: string;
}
