import { ICard } from '../../utils/types';
import {
    ADD_CART_MODAL,
    DELETE_CART_MODAL
} from '../actions/action-types';
import { TApplicationActions } from '../../utils/types';

type TModalState = {
    viewedIngredient: ICard | null;
}

const initialStateModal: TModalState = {
    viewedIngredient: null
};
  
export const modalReducer = (state = initialStateModal, action: TApplicationActions): TModalState => {
    switch (action.type) {
        case ADD_CART_MODAL:
            return {
                ...state,
                viewedIngredient: action.viewedIngredient
            };
        case DELETE_CART_MODAL:
        return {
            ...state,
            viewedIngredient: initialStateModal.viewedIngredient
        };  
        default: {
            return state;
        }
    }
};
