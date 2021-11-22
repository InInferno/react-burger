import { ICard } from '../../utils/types';
import {
    GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    GET_INGREDIENTS_ERROR
} from '../actions/action-types';
import { TApplicationActions } from '../../utils/types';

type TIngredientsState = {
    listAllIngredientsReq: boolean;
    listAllIngredientsError: boolean;
    listAllIngredients: {success: boolean; data: Array<ICard>};
} 

const initialStateIngredients: TIngredientsState = {
    listAllIngredientsReq: false,
    listAllIngredientsError: false,
    listAllIngredients: {success: false, data: []}
};

export const ingredientsReducer = (state = initialStateIngredients, action: TApplicationActions): TIngredientsState => {
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
