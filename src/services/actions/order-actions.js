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

export function getOrderRequest() {
    return {
        type: GET_ORDER_REQUEST,
        orderReq: true
    };
}
export function getOrderSuccess(res) {
    if (res && res.success) {
        return {
            type: GET_ORDER_SUCCESS,
            createdOrder: res
        };
    }
}
export function getOrderError() {
    return function(dispatch) {
        dispatch({
            type: GET_ORDER_ERROR
        });
    }
}
export function orderFetchData(orderIds) { 
    return (dispatch) => {
        dispatch(getOrderRequest());
        fetch(`${url}/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              "authorization": getCookie('accessToken')
            },
            body: JSON.stringify({"ingredients": orderIds})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(ings => {
                dispatch(getOrderSuccess(ings))
                dispatch((updateIngredients([])));
                dispatch(addBun({}));
            })
            .catch((err) => {
                console.log(err)
                dispatch(getOrderError())
            });
    }
}

export function deleteOrderModal() {
    return {
        type: DELETE_ORDER_MODAL,
        createdOrder: {}
    }
}

export function addOrderIds(res) {
    return {
        type: ADD_ORDER_IDS,
        orderIds: res
    }
}
