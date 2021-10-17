import {
    ADD_CART_MODAL,
    DELETE_CART_MODAL
} from '../actions/action-types';

const initialStateModal = {
    viewedIngredient: {}
};
  
export const modalReducer = (state = initialStateModal, action) => {
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
