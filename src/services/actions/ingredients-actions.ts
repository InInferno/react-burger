import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
} from './action-types'
import { url } from '../../utils/constants';
import { AppDispatch, ICard } from '../../utils/types';

export function getIngredients(res: {success: string; data: Array<ICard>}) {
    return function(dispatch: AppDispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST,
            listAllIngredientsReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                listAllIngredients: res
            });
        }
    }
}
export function getIngredientsError() {
    return {
        type: GET_INGREDIENTS_ERROR
    }
}

export function ingredientsFetchData() { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/ingredients`)
            .then((res: any) => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(ings => {
                dispatch(getIngredients(ings))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getIngredientsError())
            });
    }
}
