import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_ERROR,
    GET_FORGOT_REQUEST,
    GET_FORGOT_SUCCESS,
    GET_FORGOT_ERROR,
    GET_RESET_PASSWORD_REQUEST,
    GET_RESET_PASSWORD_SUCCESS,
    GET_RESET_PASSWORD_ERROR,
    GET_LOGOUT_REQUEST,
    GET_LOGOUT_SUCCESS,
    GET_LOGOUT_ERROR,
    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_ERROR
} from '../actions';

const initialStateProfile = {
    loginReq: false,
    loginError: false,
    registerReq: false,
    registerError: false,
    forgotReq: false,
    forgotError: false,
    resetPasswordReq: false,
    resetPasswordError: false,
    logoutReq: false,
    logoutError: false, 
    tokenReq: false,
    tokenError: false,
    name: '',
    email: ''
};
  
export const profileReducer = (state = initialStateProfile, action) => {
    switch (action.type) {

        case GET_REGISTER_REQUEST: {
            return {
                ...state,
                registerReq: true
            };
        }
        case GET_REGISTER_SUCCESS: {
            return { 
                ...state, 
                registerError: false,
                name: action.name,
                email: action.email, 
                registerReq: false 
            };
        }
        case GET_REGISTER_ERROR: {
            return { 
                ...state, 
                registerError: true, 
                registerReq: false 
            };
        }

        case GET_LOGIN_REQUEST: {
            return {
                ...state,
                loginReq: true
            };
        }
        case GET_LOGIN_SUCCESS: {
            return { 
                ...state, 
                loginError: false,
                name: action.name,
                email: action.email, 
                loginReq: false 
            };
        }
        case GET_LOGIN_ERROR: {
            return { 
                ...state, 
                loginError: true, 
                loginReq: false 
            };
        }

        case GET_FORGOT_REQUEST: {
            return {
                ...state,
                forgotReq: true
            };
        }
        case GET_FORGOT_SUCCESS: {
            return { 
                ...state, 
                forgotError: false,
                forgotReq: false 
            };
        }
        case GET_FORGOT_ERROR: {
            return { 
                ...state, 
                forgotError: true, 
                forgotReq: false 
            };
        }

        case GET_RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordReq: true
            };
        }
        case GET_RESET_PASSWORD_SUCCESS: {
            return { 
                ...state, 
                resetPasswordError: false,
                resetPasswordReq: false 
            };
        }
        case GET_RESET_PASSWORD_ERROR: {
            return { 
                ...state, 
                resetPasswordError: true, 
                resetPasswordReq: false 
            };
        }

        case GET_LOGOUT_REQUEST: {
            return {
                ...state,
                logoutReq: true
            };
        }
        case GET_LOGOUT_SUCCESS: {
            return { 
                ...state, 
                logoutError: false,
                logoutReq: false 
            };
        }
        case GET_LOGOUT_ERROR: {
            return { 
                ...state, 
                logoutError: true, 
                logoutReq: false 
            };
        }

        case GET_TOKEN_REQUEST: {
            return {
                ...state,
                tokenReq: true
            };
        }
        case GET_TOKEN_SUCCESS: {
            return { 
                ...state, 
                tokenError: false,
                tokenReq: false 
            };
        }
        case GET_TOKEN_ERROR: {
            return { 
                ...state, 
                tokenError: true, 
                tokenReq: false 
            };
        }

        default: {
            return state;
        }
    }
};
