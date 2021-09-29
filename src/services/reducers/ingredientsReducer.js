import {
    GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_ERROR
} from '../actions';

const initialStateIngredients = {
    listAllIngredientsReq: false,
    listAllIngredientsError: false,
    listAllIngredients: []
};
  
export const ingredientsReducer = (state = initialStateIngredients, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
            ...state,
            listAllIngredientsReq: true
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return { 
                ...state, 
                listAllIngredientsError: false,
                listAllIngredients: action.listAllIngredients, 
                listAllIngredientsReq: false 
            };
        }
        case GET_INGREDIENTS_ERROR: {
            return { 
                ...state, 
                listAllIngredientsError: true, 
                listAllIngredientsReq: false 
            };
        }
        default: {
            return state;
        }
    }
};
