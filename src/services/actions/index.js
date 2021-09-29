import { v4 as uuidv4 } from 'uuid';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQ';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const ADD_BUN = 'ADD_BUN';
export const ADD_CART_MODAL = 'ADD_CART_MODAL';
export const DELETE_CART_MODAL = 'DELETE_CART_MODAL';
export const ADD_ORDER_IDS = 'ADD_ORDER_IDS';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';
export const DELETE_ORDER_MODAL = 'DELETE_ORDER_MODAL';

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
        } else {
            dispatch({
                type: GET_INGREDIENTS_ERROR
            });
        }
    }
}
export function ingredientsFetchData(url) { 
    return (dispatch) => {
        fetch(url)
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
            });
    }
}

export function addIngredient(res) {
    return {
        type: ADD_INGREDIENT,
        ingredientsInConstructor: {
            ...res,
            uuid: uuidv4()
        }
    }
}

export function deteleIngredient(ingredient) {
    return {
        type: DELETE_INGREDIENT,
        ingredient
    }
}

export function updateIngredients(res) {
    return {
        type: UPDATE_INGREDIENTS,
        ingredientsInConstructor: res
    }
}

export function addBun(res) {
    return {
        type: ADD_BUN,
        bunInConstructor: {
            ...res,
            uuid: uuidv4()
        }
    }
}

export function addCartModal(res) {
    return {
        type: ADD_CART_MODAL,
        viewedIngredient: res
    }
}

export function deleteCartModal() {
    return {
        type: DELETE_CART_MODAL,
        viewedIngredient: {}
    }
}

export function addOrderIds(res) {
    return {
        type: ADD_ORDER_IDS,
        orderIds: res
    }
}

export function getOrder(res) {
    return function(dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST,
            orderReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_ORDER_SUCCESS,
                createdOrder: res
            });
        } else {
            dispatch({
                type: GET_ORDER_ERROR
            });
        }
    }
}
export function orderFetchData(url, orderIds) { 
    return (dispatch) => {
        fetch(`${url}/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
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
                dispatch(getOrder(ings))
            })
            .catch((err) => {
                console.log(err)
            });
    }
}

export function deleteOrderModal() {
    return {
        type: DELETE_ORDER_MODAL,
        createdOrder: {}
    }
}
