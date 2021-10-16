import { v4 as uuidv4 } from 'uuid';
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    UPDATE_INGREDIENTS
} from './action-types';

export function addIngredient(res) {
    return {
        type: ADD_INGREDIENT,
        ingredientsInConstructor: {
            ...res,
            uuid: uuidv4()
        }
    }
}

export function deleteIngredient(ingredient) {
    return {
        type: DELETE_INGREDIENT,
        ingredient
    }
}

export function updateIngredients(res) {
    return {
        type: UPDATE_INGREDIENTS,
        ingredientsInConstructor: res
    }
}
