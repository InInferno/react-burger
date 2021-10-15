import { setCookie, getCookie } from '../../utils/cookie';
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

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR';

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_ERROR = 'GET_REGISTER_ERROR';

export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';

export const GET_FORGOT_REQUEST = 'GET_FORGOT_REQUEST';
export const GET_FORGOT_SUCCESS = 'GET_FORGOT_SUCCESS';
export const GET_FORGOT_ERROR = 'GET_FORGOT_ERROR';

export const GET_RESET_PASSWORD_REQUEST = 'GET_RESET_PASSWORD_REQUEST';
export const GET_RESET_PASSWORD_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';
export const GET_RESET_PASSWORD_ERROR = 'GET_RESET_PASSWORD_ERROR';

export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_ERROR = 'GET_LOGOUT_ERROR';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const GET_UPD_USER_REQUEST = 'GET_UPD_USER_REQUEST';
export const GET_UPD_USER_SUCCESS = 'GET_UPD_USER_SUCCESS';
export const GET_UPD_USER_ERROR = 'GET_UPD_USER_ERROR';

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
                dispatch(getIngredientsError())
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
        }
    }
}
export function getOrderError() {
    return function(dispatch) {
        dispatch({
            type: GET_ORDER_ERROR
        });
    }
}
export function orderFetchData(url, orderIds) { 
    return (dispatch) => {
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
                dispatch(getOrder(ings))
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


export function login(res) {
    return function(dispatch) {
        dispatch({
            type: GET_LOGIN_REQUEST,
            loginReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_LOGIN_SUCCESS,
                name: res.user.name,
                email: res.user.email
            });
        }
    }
}
export function loginError() {
    return function(dispatch) {
        dispatch({
            type: GET_LOGIN_ERROR
        });
    }
}
export function loginFetch(url, email, password) { 
    return (dispatch) => {
        fetch(`${url}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"email": email, "password": password})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                dispatch(login(res))
                setCookie('accessToken', res.accessToken);
                setCookie('refreshToken', res.refreshToken);
            })
            .catch((err) => {
                console.log('err', err)
                dispatch(loginError(err))
            });
    }
}

export function register(res) {
    return function(dispatch) {
        dispatch({
            type: GET_REGISTER_REQUEST,
            registerReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_REGISTER_SUCCESS,
                name: res.user.name,
                email: res.user.email
            });
        }
    }
}
export function registerError() {
    return function(dispatch) {
        dispatch({
            type: GET_REGISTER_ERROR
        });
    }
}
export function registerFetch(url, email, password, name) { 
    return (dispatch) => {
        fetch(`${url}/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"email": email, "password": password, "name": name })
        })
            .then(res => {
                console.log(JSON.stringify({"email": email, "password": password, "name": name }))
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                dispatch(register(res))
                setCookie('accessToken', res.accessToken);
                setCookie('refreshToken', res.refreshToken);
            })
            .catch((err) => {
                console.log('err', err)
                dispatch(registerError(err))
            });
    }
}

export function getForgotPassword(res) {
    return function(dispatch) {
        dispatch({
            type: GET_FORGOT_REQUEST,
            resetPasswordReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_FORGOT_SUCCESS,
                emailSent: true
            });
        }
    }
}
export function getForgotError() {
    return function(dispatch) {
        dispatch({
            type: GET_FORGOT_ERROR
        });
    }
}
export function resetForgotFetch(url, email) { 
    return (dispatch) => {
        fetch(`${url}/password-reset`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"email": email})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                console.log('res', res)
                dispatch(getForgotPassword(res))
            })
            .catch((err) => {
                console.log('err', err)
                dispatch(getForgotError())
            });
    }
}

export function getResetPassword(res) {
    return function(dispatch) {
        dispatch({
            type: GET_RESET_PASSWORD_REQUEST,
            resetPasswordReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_RESET_PASSWORD_SUCCESS,
                passwordReseted: true
            });
        }
    }
}
export function getResetPasswordError() {
    return function(dispatch) {
        dispatch({
            type: GET_RESET_PASSWORD_ERROR
        });
    }
}
export function resetPasswordFetch(url, password, token) { 
    return (dispatch) => {
        fetch(`${url}/password-reset/reset`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"password": password, "token": token})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                console.log('res', res)
                dispatch(getResetPassword(res))
            })
            .catch((err) => {
                console.log('err', err)
                dispatch(getResetPasswordError())
            });
    }
}

export function logout(res) {
    return function(dispatch) {
        dispatch({
            type: GET_LOGOUT_REQUEST,
            logoutReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_LOGOUT_SUCCESS,
                name: '',
                email: ''
            });
        }
    }
}
export function logoutError() {
    return function(dispatch) {
        dispatch({
            type: GET_LOGOUT_ERROR
        });
    }
}
export function logoutFetch(url) { 
    return (dispatch) => {
        fetch(`${url}/auth/logout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"token": getCookie('refreshToken')})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                console.log('res', res)
                dispatch(logout(res))
                setCookie('accessToken', '');
                setCookie('refreshToken', '');
            })
            .catch((err) => {
                console.log('err', err)
                dispatch(logoutError())
            });
    }
}

export function token(res) {
    return function(dispatch) {
        dispatch({
            type: GET_TOKEN_REQUEST,
            tokenReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_TOKEN_SUCCESS,
            });
        }
    }
}
export function tokenError() {
    return function(dispatch) {
        dispatch({
            type: GET_TOKEN_ERROR
        });
    }
}
export function tokenFetch(url) { 
    return (dispatch) => {
        fetch(`${url}/auth/token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"token": getCookie('refreshToken')})
        })
            .then(res => {
                
                // console.log(JSON.stringify({"token": getCookie('refreshToken')}))
                
                // console.log(
                // `{"token":"0e2b2927a116a801a2c4a954555c872af56cf9284a67112aa444044587602c6e6f647a9c8662c0a0"}` ===
                // JSON.stringify({"token": getCookie('refreshToken')}))

                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                setCookie('accessToken', res.accessToken);
                setCookie('refreshToken', res.refreshToken);
                dispatch(token(res))
            }).then(res => {
                dispatch(userFetch(url))
            })
            .catch((err) => {
                console.log('Пользователь не авторизован', err)
                dispatch(tokenError(err))
            });
    }
}

export function user(res) {
    return function(dispatch) {
        dispatch({
            type: GET_USER_REQUEST,
            tokenReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_USER_SUCCESS,
                name: res.user.name,
                email: res.user.email,
                isAuthenticated: true
            });
        }
    }
}
export function userError() {
    return function(dispatch) {
        dispatch({
            type: GET_USER_ERROR,
            isAuthenticated: false
        });
    }
}
export function userFetch(url) { 
    return (dispatch) => {
        fetch(`${url}/auth/user`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              "authorization": getCookie('accessToken')
            }
        })
            .then(res => {
                if (res.status === 403) {
                    throw dispatch(tokenFetch(url))
                } else if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                dispatch(user(res))
            })
            .catch((err) => {
                console.log(err)
                dispatch(userError(err))
            });
    }
}

export function updateUserInfo(res) {
    return function(dispatch) {
        dispatch({
            type: GET_UPD_USER_REQUEST,
            updateUserReq: true
        });
        if (res && res.success) {
            dispatch({
                type: GET_UPD_USER_SUCCESS,
            });
        }
    }
}
export function updateUserInfoError() {
    return function(dispatch) {
        dispatch({
            type: GET_UPD_USER_ERROR
        });
    }
}
export function updateUserInfoFetch(url, email, name, password) {
    
    return (dispatch) => {
        let body = {};
        if(email) {
            body.email = email;
        } if(name) {
            body.name = name;
        } if(password) {
            body.password = password;
        }

        fetch(`${url}/auth/user`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              "authorization": getCookie('accessToken')
            },
            body: JSON.stringify(body)
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                dispatch(updateUserInfo(res))
            })
            .catch((err) => {
                console.log(err)
                dispatch(updateUserInfoError(err))
            });
    }
}
