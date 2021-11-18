import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
} from './action-types'
import { url } from '../../utils/constants';
import { AppDispatch, AppThunk, ICard } from '../../utils/types';

export interface IGetIngredientsReqAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
    readonly listAllIngredientsReq: boolean;
}

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly listAllIngredients: {success: boolean; data: Array<ICard>};
}

export interface IGetIngredientsErrorAction {
    readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TIngredientsActions = 
| IGetIngredientsReqAction
| IGetIngredientsSuccessAction
| IGetIngredientsErrorAction;

export const getIngredientsReq = (boolean: boolean): IGetIngredientsReqAction => ({
    type: GET_INGREDIENTS_REQUEST,
    listAllIngredientsReq: boolean
})

export const getIngredientsSuccess: AppThunk = (res: {success: boolean; data: Array<ICard>}) => (dispatch: AppDispatch) => {
      if (res && res.success) {
        dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            listAllIngredients: res
        });
      }
}; 

export function getIngredientsError() {
    return {
        type: GET_INGREDIENTS_ERROR
    }
}

export function ingredientsFetchData() { 
    return (dispatch: AppDispatch) => {
        dispatch(getIngredientsReq(true));
        fetch(`${url}/ingredients`)
            .then((res: any) => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(ings=> {
                dispatch(getIngredientsReq(false));
                dispatch(getIngredientsSuccess(ings))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getIngredientsReq(false));
                dispatch(getIngredientsError())
            });
    }
}
