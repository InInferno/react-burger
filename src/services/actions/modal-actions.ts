import { 
    ADD_CART_MODAL,
    DELETE_CART_MODAL
} from './action-types';
import { ICard } from '../../utils/types';

export interface IAddCartModaltAction {
    readonly type: typeof ADD_CART_MODAL;
    readonly viewedIngredient: ICard;
}

export interface IDeleteCartModaltAction {
    readonly type: typeof DELETE_CART_MODAL;
    readonly viewedIngredient: null;
}

export type TModalActions = 
| IAddCartModaltAction
| IDeleteCartModaltAction;

export const addCartModal = (res: ICard): IAddCartModaltAction => ({
    type: ADD_CART_MODAL,
    viewedIngredient: res
})

export const deleteCartModal = (): IDeleteCartModaltAction => ({
    type: DELETE_CART_MODAL,
    viewedIngredient: null
})
