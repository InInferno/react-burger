import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    DELETE_ORDER_MODAL,
    ADD_ORDER_IDS
} from './action-types';
import { url } from '../../utils/constants';
import { getCookie } from '../../utils/cookie';
import { addBun } from './bun-actions';
import { updateIngredients } from './constructor-actions';
import { AppDispatch, IOrderInfo } from '../../utils/types';

export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
    readonly orderReq: boolean;
}

export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly createdOrder: IOrderInfo;
}

export interface IGetOrderErrorAction {
    readonly type: typeof GET_ORDER_ERROR;
}

export interface IDeleteOrderErrorAction {
    readonly type: typeof DELETE_ORDER_MODAL;
    readonly createdOrder: null;
}

export interface IAddOrderIdsErrorAction {
    readonly type: typeof ADD_ORDER_IDS;
    readonly orderIds: Array<string>;
}

export type TOrderActions = 
| IGetOrderRequestAction
| IGetOrderSuccessAction
| IGetOrderErrorAction
| IDeleteOrderErrorAction
| IAddOrderIdsErrorAction;

export const getOrderRequest = (): IGetOrderRequestAction => ({
    type: GET_ORDER_REQUEST,
    orderReq: true
})
export const getOrderSuccess = (res: IOrderInfo): IGetOrderSuccessAction => ({
    type: GET_ORDER_SUCCESS,
    createdOrder: res
})
export const getOrderError = (): IGetOrderErrorAction => ({
    type: GET_ORDER_ERROR
})

export function orderFetchData(orderIds: Array<string>) { 
    return (dispatch: AppDispatch) => {
        dispatch(getOrderRequest());
        fetch(`${url}/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              "authorization": getCookie('accessToken') || 'null'
            },
            body: JSON.stringify({"ingredients": orderIds})
        })
            .then((res: any) => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(ings => {
                dispatch(getOrderSuccess(ings))
                dispatch((updateIngredients([])));
                dispatch(addBun(null));
            })
            .catch((err) => {
                console.log(err)
                dispatch(getOrderError())
            });
    }
}

export const deleteOrderModal = (): IDeleteOrderErrorAction => ({
    type: DELETE_ORDER_MODAL,
    createdOrder: null
})

export const addOrderIds = (res: Array<string>): IAddOrderIdsErrorAction => ({
    type: ADD_ORDER_IDS,
    orderIds: res
})
