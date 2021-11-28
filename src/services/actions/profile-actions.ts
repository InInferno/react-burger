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
import { AppThunk, AppDispatch } from '../../utils/types';

export interface ILoginReqAction {
    readonly type: typeof GET_LOGIN_REQUEST;
    readonly loginReq: boolean;
}

export interface ILoginAction {
    readonly type: typeof GET_LOGIN_SUCCESS;
    readonly name: string;
    readonly email: string;
}

export interface ILoginErrorAction {
    readonly type: typeof GET_LOGIN_ERROR;
}

export interface IRegisterReqAction {
    readonly type: typeof GET_REGISTER_REQUEST;
    readonly registerReq: boolean;
}

export interface IRegisterAction {
    readonly type: typeof GET_REGISTER_SUCCESS;
    readonly name: string;
    readonly email: string;
}

export interface IRegisterErrorAction {
    readonly type: typeof GET_REGISTER_ERROR;
}

export interface IForgotReqAction {
    readonly type: typeof GET_FORGOT_REQUEST;
    readonly forgotReq: boolean;
}

export interface IForgotAction {
    readonly type: typeof GET_FORGOT_SUCCESS;
    readonly emailSent: boolean;
}

export interface IForgotErrorAction {
    readonly type: typeof GET_FORGOT_ERROR;
}

export interface IResetReqAction {
    readonly type: typeof GET_RESET_PASSWORD_REQUEST;
    readonly resetPasswordReq: boolean;
}

export interface IResetAction {
    readonly type: typeof GET_RESET_PASSWORD_SUCCESS;
    readonly passwordReseted: boolean;
}

export interface IResetErrorAction {
    readonly type: typeof GET_RESET_PASSWORD_ERROR;
}

export interface ILogoutReqAction {
    readonly type: typeof GET_LOGOUT_REQUEST;
    readonly logoutReq: boolean;
}

export interface ILogoutAction {
    readonly type: typeof GET_LOGOUT_SUCCESS;
    readonly name: string;
    readonly email: string;
}

export interface ILogoutErrorAction {
    readonly type: typeof GET_LOGOUT_ERROR;
}

export interface ITokenReqAction {
    readonly type: typeof GET_TOKEN_REQUEST;
    readonly tokenReq: boolean;
}

export interface ITokenAction {
    readonly type: typeof GET_TOKEN_SUCCESS;
}

export interface ITokenErrorAction {
    readonly type: typeof GET_TOKEN_ERROR;
}

export interface IUserReqAction {
    readonly type: typeof GET_USER_REQUEST;
    readonly userReq: boolean;
}

export interface IUserAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly name: string;
    readonly email: string;
    readonly isAuthenticated: boolean;
}

export interface IUserErrorAction {
    readonly type: typeof GET_USER_ERROR;
    readonly isAuthenticated: boolean;
}

export interface IUpdUserReqAction {
    readonly type: typeof GET_UPD_USER_REQUEST;
    readonly updateUserReq: boolean;
}

export interface IUpdUserAction {
    readonly type: typeof GET_UPD_USER_SUCCESS;
}

export interface IUpdUserErrorAction {
    readonly type: typeof GET_UPD_USER_ERROR;
}

export type TProfileActions = 
| ILoginReqAction
| ILoginAction
| ILoginErrorAction
| IRegisterReqAction
| IRegisterAction
| IRegisterErrorAction
| IForgotReqAction
| IForgotAction
| IForgotErrorAction
| IResetReqAction
| IResetAction
| IResetErrorAction
| ILogoutReqAction
| ILogoutAction
| ILogoutErrorAction
| ITokenReqAction
| ITokenAction
| ITokenErrorAction
| IUserReqAction
| IUserAction
| IUserErrorAction
| IUpdUserReqAction
| IUpdUserAction
| IUpdUserErrorAction;

export const loginReq = (boolean: boolean): ILoginReqAction => ({
    type: GET_LOGIN_REQUEST,
    loginReq: boolean
})
export const login: AppThunk = (res: {success: string; user: {email: string; name: string;}}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_LOGIN_SUCCESS,
        name: res.user.name,
        email: res.user.email
      });   
    }
};
export const loginError = (): ILoginErrorAction => ({
    type: GET_LOGIN_ERROR
})

export const loginFetch: AppThunk = (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch(loginReq(true));
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
            dispatch(loginReq(false));
        })
        .catch((err) => {
            dispatch(loginReq(false));
            console.log('err', err)
            dispatch(loginError())
        });
};

export const registerReq = (boolean: boolean): IRegisterReqAction => ({
    type: GET_REGISTER_REQUEST,
    registerReq: boolean
})
export const register: AppThunk = (res: {success: string; user: {email: string; name: string;}}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_REGISTER_SUCCESS,
        name: res.user.name,
        email: res.user.email
      });   
    }
};
export const registerError = (): IRegisterErrorAction => ({
    type: GET_REGISTER_ERROR
})
export const registerFetch: AppThunk = (email: string, password: string, name: string) =>  
    (dispatch: AppDispatch) => {
        dispatch(registerReq(true));
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
                dispatch(registerReq(false));
            })
            .catch((err) => {
                dispatch(registerReq(false));
                console.log('err', err)
                dispatch(registerError())
            });
    }

export const getForgotPasswordReq = (boolean: boolean): IForgotReqAction => ({
    type: GET_FORGOT_REQUEST,
    forgotReq: boolean
})
export const getForgotPassword: AppThunk = (res: {success: boolean, message: string}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_FORGOT_SUCCESS,
        emailSent: true
      });   
    }
};
export const getForgotError = (): IForgotErrorAction => ({
    type: GET_FORGOT_ERROR
})
export const resetForgotFetch: AppThunk = (email: string) => 
    (dispatch: AppDispatch) => {
        dispatch(getForgotPasswordReq(true));
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
                dispatch(getForgotPasswordReq(false));
            })
            .catch((err) => {
                dispatch(getForgotPasswordReq(false));
                console.log('err', err)
                dispatch(getForgotError())
            });
    }

export const getResetPasswordReq = (boolean: boolean): IResetReqAction => ({
    type: GET_RESET_PASSWORD_REQUEST,
    resetPasswordReq: boolean
})
export const getResetPassword: AppThunk = (res: {success: boolean, message: string}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_RESET_PASSWORD_SUCCESS,
        passwordReseted: true
      });   
    }
};
export const getResetPasswordError = (): IResetErrorAction => ({
    type: GET_RESET_PASSWORD_ERROR
})
export const resetPasswordFetch: AppThunk = (password: string, token: string) =>  
    (dispatch: AppDispatch) => {
        dispatch(getResetPasswordReq(true));
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
                dispatch(getResetPasswordReq(false));
            })
            .catch((err) => {
                dispatch(getResetPasswordReq(false));
                console.log('err', err)
                dispatch(getResetPasswordError())
            });
    }

export const logoutReq = (boolean: boolean): ILogoutReqAction => ({
    type: GET_LOGOUT_REQUEST,
    logoutReq: boolean
})
export const logout: AppThunk = (res: {success: boolean, message: string}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_LOGOUT_SUCCESS,
        name: '',
        email: ''
      });   
    }
};
export const logoutError = (): ILogoutErrorAction => ({
    type: GET_LOGOUT_ERROR
})
export const logoutFetch: AppThunk = () =>  
    (dispatch: AppDispatch) => {
        dispatch(logoutReq(true));
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
                dispatch(logoutReq(false));
            })
            .catch((err) => {
                dispatch(logoutReq(false));
                console.log('err', err)
                dispatch(logoutError())
            });
    }

export const tokenReq = (boolean: boolean): ITokenReqAction => ({
    type: GET_TOKEN_REQUEST,
    tokenReq: boolean
})
export const token: AppThunk = (res: {success: boolean, message: string}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_TOKEN_SUCCESS
      });   
    }
};
export const tokenError = (): ITokenErrorAction => ({
    type: GET_TOKEN_ERROR
})
export const tokenFetch: AppThunk = () =>  
    (dispatch: AppDispatch) => {
        dispatch(tokenReq(true));
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
                dispatch(tokenReq(false));
            }).then(() => {
                dispatch(userFetch())
            })
            .catch((err) => {
                dispatch(tokenReq(false));
                console.log('Пользователь не авторизован', err)
                dispatch(tokenError())
            });
    }

export const userReq = (boolean: boolean): IUserReqAction => ({
    type: GET_USER_REQUEST,
    userReq: boolean
})
export const user: AppThunk = (res: {success: boolean, message: string, user: {name: string; email: string;}}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_USER_SUCCESS,
        name: res.user.name,
        email: res.user.email,
        isAuthenticated: true
      });   
    }
};
export const userError = (): IUserErrorAction => ({
    type: GET_USER_ERROR,
    isAuthenticated: false
})
export const userFetch: AppThunk = () => 
    (dispatch: AppDispatch) => {
        dispatch(userReq(true));
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
            dispatch(userReq(false));
        })
        .catch(err => {
            dispatch(userReq(false));
            if (err.message === 'jwt expired') {
                console.log(err, 'Обновление токена')
                dispatch(tokenFetch())
            } else {
                console.log(err, 'Ошибка')
                // return Promise.reject(err);
            }
        })
    }

export const updateUserReq = (boolean: boolean): IUpdUserReqAction => ({
    type: GET_UPD_USER_REQUEST,
    updateUserReq: boolean
})
export const updateUserInfo: AppThunk = (res: {success: boolean, message: string}) => (dispatch: AppDispatch) => {
    if (res && res.success) {
      dispatch({
        type: GET_UPD_USER_SUCCESS
      });   
    }
};
export const updateUserInfoError = (): IUpdUserErrorAction => ({
    type: GET_UPD_USER_ERROR
})
export const updateUserInfoFetch: AppThunk = (email: string, name: string, password: string) =>
    (dispatch: AppDispatch) => {
        let body: {email?: string; name?: string; password?: string} = {};
        if(email) {
            body.email = email;
        } if(name) {
            body.name = name;
        } if(password) {
            body.password = password;
        }
        dispatch(updateUserReq(true));
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
                dispatch(updateUserReq(false));
            })
            .catch((err) => {
                dispatch(updateUserReq(false));
                console.log(err)
                dispatch(updateUserInfoError())
            });
    }
