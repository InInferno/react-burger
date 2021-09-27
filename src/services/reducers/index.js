import { combineReducers } from 'redux';
import {
  GET_INGREDIENTS_REQUEST, 
  GET_INGREDIENTS_SUCCESS, 
  GET_INGREDIENTS_ERROR,
  ADD_INGREDIENT,
  ADD_BUN,
  ADD_CART_MODAL,
  DELETE_CART_MODAL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  DELETE_ORDER_MODAL
} from '../actions';

const initialStateIngredients = {
  listAllIngredientsReq: false,
  listAllIngredientsError: false,
  listAllIngredients: []
};

export const ingredientsReducer = (state = initialStateIngredients, action) => {
    switch (action.type) {
      case GET_INGREDIENTS_REQUEST: {
        return {
          ...state,
          listAllIngredientsReq: true
        };
      }
      case GET_INGREDIENTS_SUCCESS: {
        return { 
            ...state, 
            listAllIngredientsError: false,
            listAllIngredients: action.listAllIngredients, 
            listAllIngredientsReq: false 
        };
      }
      case GET_INGREDIENTS_ERROR: {
        return { 
            ...state, 
            listAllIngredientsError: true, 
            listAllIngredientsReq: false 
        };
      }
      default: {
        return state;
      }
    }
};

const initialStateConstructor = {
  ingredientsInConstructor: []
};

export const constructorReducer = (state = initialStateConstructor, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return { 
        ingredientsInConstructor: [
          ...state.ingredientsInConstructor, 
          action.ingredientsInConstructor
        ] 
      };
    default: {
      return state;
    }
  }
};

const initialStateBun = {
  bunInConstructor: {}
}

export const bunReducer = (state = initialStateBun, action) => {
  switch (action.type) {
    case ADD_BUN:
      return {
        ...state,
        bunInConstructor: action.bunInConstructor
      };
    default: {
      return state;
    }
  }
};

const initialStateModal = {
  viewedIngredient: {}
};

export const modalReducer = (state = initialStateModal, action) => {
  switch (action.type) {
    case ADD_CART_MODAL:
      return {
        ...state,
        viewedIngredient: action.viewedIngredient
      };
    case DELETE_CART_MODAL:
      return {
        ...state,
        viewedIngredient: initialStateModal.viewedIngredient
    };  
    default: {
      return state;
    }
  }
};

const initialStateOrder = {
  orderReq: false,
  orderError: false,
  createdOrder: {}
};

export const orderReducer = (state = initialStateOrder, action) => {
    switch (action.type) {
      case GET_ORDER_REQUEST: {
        return {
          ...state,
          orderReq: true
        };
      }
      case GET_ORDER_SUCCESS: {
        return { 
            ...state, 
            orderError: false,
            createdOrder: action.createdOrder, 
            orderReq: false 
        };
      }
      case GET_ORDER_ERROR: {
        return { 
            ...state, 
            orderError: true, 
            orderReq: false 
        };
      }
      case DELETE_ORDER_MODAL: {
        return { 
          ...state,
          createdOrder: initialStateOrder.createdOrder
        };
      }
      default: {
        return state;
      }
    }
};


export const rootReducer = combineReducers({
  ingredientsReducer,
  constructorReducer,
  bunReducer,
  modalReducer,
  orderReducer
});
