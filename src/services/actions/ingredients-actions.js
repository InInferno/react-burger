import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
} from './action-types'
import { url } from '../../utils/constants';

export function getIngredients(res) {
    return function(dispatch) {
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
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_ERROR
        });
    }
}
export function ingredientsFetchData() { 
    return (dispatch) => {
        fetch(`${url}/ingredients`)
            .then(res => {
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