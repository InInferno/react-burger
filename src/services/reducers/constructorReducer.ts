import { ICard } from '../../utils/types';
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    UPDATE_INGREDIENTS
} from '../actions/action-types';

const initialStateConstructor = {
    ingredientsInConstructor: []
};

export const constructorReducer = (state = initialStateConstructor, action: {type: string; ingredientsInConstructor: Array<ICard>; ingredient: ICard}) => {
    switch (action.type) {
        case ADD_INGREDIENT:
        return { 
            ingredientsInConstructor: [
            ...state.ingredientsInConstructor, 
            action.ingredientsInConstructor
            ] 
        };
        case DELETE_INGREDIENT:
        return {
            ...state, 
            ingredientsInConstructor: [
            ...state.ingredientsInConstructor.filter((ingredient: {uuid: string}) => ingredient.uuid !== action.ingredient.uuid)
            ]
        }; 
        case UPDATE_INGREDIENTS:
        return {
            ...state, 
            ingredientsInConstructor: action.ingredientsInConstructor
        }; 
        default: {
        return state;
        }
    }
};
