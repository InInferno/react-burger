import * as types from "../actions/action-types";
import { profileReducer } from "./profileReducer";

describe('profile reducer', () => {
  const initialStateProfile = {
    loginReq: false,
    loginError: false,
    registerReq: false,
    registerError: false,
    forgotReq: false,
    forgotError: false,
    emailSent: false,
    passwordReseted: false,
    resetPasswordReq: false,
    resetPasswordError: false,
    logoutReq: false,
    logoutError: false,
    isAuthenticated: false, 
    tokenReq: false,
    tokenError: false,
    userReq: false,
    userError: false,
    updateUserReq: false,
    updateUserError: false,
    name: '',
    email: ''
  };

  it('should handle GET_REGISTER_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_REGISTER_REQUEST,
          registerReq: true
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: true,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_REGISTER_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_REGISTER_SUCCESS,
          name: 'name',
          email: 'email@email.com'
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: 'name',
        email: 'email@email.com'
      }
    )
  })
  it('should handle GET_REGISTER_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_REGISTER_ERROR
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: true,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_LOGIN_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile,
        {
          type: types.GET_LOGIN_REQUEST,
          loginReq: true
        })
    ).toEqual(
      {
        loginReq: true,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_LOGIN_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_LOGIN_SUCCESS,
          name: 'name',
          email: 'email@email.com'
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: 'name',
        email: 'email@email.com'
      }
    )
  })
  it('should handle GET_LOGIN_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_LOGIN_ERROR
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: true,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_FORGOT_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile,
        {
          type: types.GET_FORGOT_REQUEST,
          forgotReq: true
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: true,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_FORGOT_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_FORGOT_SUCCESS,
        emailSent: true
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: true,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_FORGOT_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_FORGOT_ERROR
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: true,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_RESET_PASSWORD_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile,
        {
          type: types.GET_RESET_PASSWORD_REQUEST,
          resetPasswordReq: true
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: true,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_RESET_PASSWORD_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_RESET_PASSWORD_SUCCESS,
        passwordReseted: true 
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: true,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_RESET_PASSWORD_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_RESET_PASSWORD_ERROR
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: true,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_LOGOUT_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile,
        {
          type: types.GET_LOGOUT_REQUEST,
          logoutReq: true
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: true,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_LOGOUT_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_LOGOUT_SUCCESS,
        name: '',
        email: ''
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_LOGOUT_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_LOGOUT_ERROR
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: true,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_TOKEN_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile,
        {
          type: types.GET_TOKEN_REQUEST,
          tokenReq: true
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: true,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_TOKEN_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_TOKEN_SUCCESS
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_TOKEN_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_TOKEN_ERROR
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: true,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_USER_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile,
        {
          type: types.GET_USER_REQUEST,
          userReq: true
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: true,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_USER_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_USER_SUCCESS,
        name: 'name',
        email: 'email@email.com',
        isAuthenticated: true
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: true, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: 'name',
        email: 'email@email.com'
      }
    )
  })
  it('should handle GET_USER_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_USER_ERROR,
          isAuthenticated: false
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: true,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_UPD_USER_REQUEST', () => {
    expect(
      profileReducer(initialStateProfile,
        {
          type: types.GET_UPD_USER_REQUEST,
          updateUserReq: true
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: true,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_UPD_USER_SUCCESS', () => {
    expect(
      profileReducer(initialStateProfile, {
        type: types.GET_UPD_USER_SUCCESS
      })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: false,
        name: '',
        email: ''
      }
    )
  })
  it('should handle GET_UPD_USER_ERROR', () => {
    expect(
      profileReducer(initialStateProfile, 
        {
          type: types.GET_UPD_USER_ERROR
        })
    ).toEqual(
      {
        loginReq: false,
        loginError: false,
        registerReq: false,
        registerError: false,
        forgotReq: false,
        forgotError: false,
        emailSent: false,
        passwordReseted: false,
        resetPasswordReq: false,
        resetPasswordError: false,
        logoutReq: false,
        logoutError: false,
        isAuthenticated: false, 
        tokenReq: false,
        tokenError: false,
        userReq: false,
        userError: false,
        updateUserReq: false,
        updateUserError: true,
        name: '',
        email: ''
      }
    )
  })
});
