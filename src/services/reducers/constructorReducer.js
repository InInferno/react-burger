import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    UPDATE_INGREDIENTS
} from '../actions';

const initialStateConstructor = {
    ingredientsInConstructor: []
};
  
export const constructorReducer = (state = initialStateConstructor, action) => {
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
            ...state.ingredientsInConstructor.filter(ingredient => ingredient.uuid !== action.ingredient.uuid)
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
