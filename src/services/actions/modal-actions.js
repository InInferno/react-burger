import { 
    ADD_CART_MODAL,
    DELETE_CART_MODAL
} from './action-types';

export function addCartModal(res) {
    return {
        type: ADD_CART_MODAL,
        viewedIngredient: res
    }
}

export function deleteCartModal() {
    return {
        type: DELETE_CART_MODAL,
        viewedIngredient: {}
    }
}
