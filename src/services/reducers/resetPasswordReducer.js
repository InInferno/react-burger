import {
    GET_RESET_PASSWORD_REQUEST,
    GET_RESET_PASSWORD_SUCCESS,
    GET_RESET_PASSWORD_ERROR
} from '../actions';

const initialStateReset = {
    resetPasswordReq: false,
    resetPasswordError: false,
    resetPassword: {}
};
  
export const resetPasswordReducer = (state = initialStateReset, action) => {
    switch (action.type) {
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
                resetPassword: action.resetPassword, 
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
        default: {
            return state;
        }
    }
};
