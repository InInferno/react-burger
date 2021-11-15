import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
    
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_ERROR,
    
    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_ERROR,
    
    GET_FORGOT_REQUEST,
    GET_FORGOT_SUCCESS,
    GET_FORGOT_ERROR,
    
    GET_RESET_PASSWORD_REQUEST,
    GET_RESET_PASSWORD_SUCCESS,
    GET_RESET_PASSWORD_ERROR,
    
    GET_LOGOUT_REQUEST,
    GET_LOGOUT_SUCCESS,
    GET_LOGOUT_ERROR,
    
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    
    GET_UPD_USER_REQUEST,
    GET_UPD_USER_SUCCESS,
    GET_UPD_USER_ERROR
} from './action-types';
import { setCookie, getCookie } from '../../utils/cookie';
import { url } from '../../utils/constants';
import { AppDispatch } from '../../utils/types';

export function login(res: {success: string; user: {email: string; name: string;}}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_LOGIN_ERROR
    }
}
export function loginFetch(email: string, password: string) { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"email": email, "password": password})
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
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
                dispatch(loginError())
            });
    }
}

export function register(res: {success: string; user: {email: string; name: string;}}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_REGISTER_ERROR
    }
}
export function registerFetch(email: string, password: string, name: string) { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"email": email, "password": password, "name": name })
        })
            .then((res) => {
                console.log(JSON.stringify({"email": email, "password": password, "name": name }))
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
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
                dispatch(registerError())
            });
    }
}

export function getForgotPassword(res: {success: boolean, message: string}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_FORGOT_ERROR
    }
}
export function resetForgotFetch(email: string) { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/password-reset`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"email": email})
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
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

export function getResetPassword(res: {success: boolean, message: string}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_RESET_PASSWORD_ERROR
    }
}
export function resetPasswordFetch(password: string, token: string) { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/password-reset/reset`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"password": password, "token": token})
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
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

export function logout(res: {success: boolean, message: string}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_LOGOUT_ERROR
    }
}
export function logoutFetch() { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/auth/logout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"token": getCookie('refreshToken')})
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
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

export function token(res: {success: boolean, message: string}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_TOKEN_ERROR
    }
}
export function tokenFetch() { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/auth/token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"token": getCookie('refreshToken')})
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
                }
                return res.json()
            })
            .then(res => {
                setCookie('accessToken', res.accessToken);
                setCookie('refreshToken', res.refreshToken);
                dispatch(token(res))
            }).then(() => {
                dispatch(userFetch())
            })
            .catch((err) => {
                console.log('Пользователь не авторизован', err)
                dispatch(tokenError())
            });
    }
}

export function user(res: {success: boolean, message: string, user: {name: string; email: string;}}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_USER_ERROR,
        isAuthenticated: false
    }
}
export function userFetch() { 
    return (dispatch: AppDispatch) => {
        fetch(`${url}/auth/user`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              "authorization": getCookie('accessToken') || 'null'
            }
        })
        .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
        .then(res => {
            console.log(res, 'Обновление информации о пользователе')
            dispatch(user(res))
        })
        .catch(err => {
            if (err.message === 'jwt expired') {
                console.log(err, 'Обновление токена')
                dispatch(tokenFetch())
            } else {
                console.log(err, 'Ошибка')
                return Promise.reject(err);
            }
        })
    }
}

export function updateUserInfo(res: {success: boolean, message: string}) {
    return function(dispatch: AppDispatch) {
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
    return {
        type: GET_UPD_USER_ERROR
    }
}
export function updateUserInfoFetch(email: string, name: string, password: string) {
    
    return (dispatch: AppDispatch) => {
        let body: {email?: string; name?: string; password?: string} = {};
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
              "authorization": getCookie('accessToken') || 'null'
            },
            body: JSON.stringify(body)
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                dispatch(updateUserInfo(res))
            })
            .catch((err) => {
                console.log(err)
                dispatch(updateUserInfoError())
            });
    }
}
