import { v4 as uuidv4 } from 'uuid';
import { ICard } from '../../utils/types';
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    UPDATE_INGREDIENTS
} from './action-types';

export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredientsInConstructor: ICard;
}

export interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT;
    readonly ingredient: ICard;
}

export interface IUpdateIngredientAction {
    readonly type: typeof UPDATE_INGREDIENTS;
    readonly ingredientsInConstructor: Array<ICard>;
}

export type TConstructorActions = 
| IAddIngredientAction
| IDeleteIngredientAction
| IUpdateIngredientAction;

export const addIngredient = (res: ICard): IAddIngredientAction => ({
    type: ADD_INGREDIENT,
    ingredientsInConstructor: {
        ...res,
        uuid: uuidv4()
    }
})

export const deleteIngredient = (ingredient: ICard): IDeleteIngredientAction => ({
    type: DELETE_INGREDIENT,
    ingredient
})

export const updateIngredients = (res: Array<ICard>): IUpdateIngredientAction => {
    return {
        type: UPDATE_INGREDIENTS,
        ingredientsInConstructor: res
    }
}
