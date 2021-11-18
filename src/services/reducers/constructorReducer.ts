import { ICard } from '../../utils/types';
import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    UPDATE_INGREDIENTS
} from '../actions/action-types';
import { TApplicationActions } from '../../utils/types';

type TConstructorState = {
    ingredientsInConstructor: Array<ICard>;
} 

const initialStateConstructor: TConstructorState = {
    ingredientsInConstructor: []
};

export const constructorReducer = (state = initialStateConstructor, action: TApplicationActions): TConstructorState => {
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
