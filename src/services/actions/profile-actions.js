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
export function loginFetch(email, password) { 
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
export function registerFetch(email, password, name) { 
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
export function resetForgotFetch(email) { 
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
export function resetPasswordFetch(password, token) { 
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
export function logoutFetch() { 
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
export function tokenFetch() { 
    return (dispatch) => {
        fetch(`${url}/auth/token`, {
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
export function userFetch() { 
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
export function updateUserInfoFetch(email, name, password) {
    
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
