import { v4 as uuidv4 } from 'uuid';
import { ICard } from '../../utils/types';
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    UPDATE_INGREDIENTS
} from './action-types';

export function addIngredient(res: ICard) {
    return {
        type: ADD_INGREDIENT,
        ingredientsInConstructor: {
            ...res,
            uuid: uuidv4()
        }
    }
}

export function deleteIngredient(ingredient: ICard) {
    return {
        type: DELETE_INGREDIENT,
        ingredient
    }
}

export function updateIngredients(res: Array<ICard>) {
    return {
        type: UPDATE_INGREDIENTS,
        ingredientsInConstructor: res
    }
}
