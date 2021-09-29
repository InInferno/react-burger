import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    DELETE_ORDER_MODAL,
    ADD_ORDER_IDS
} from '../actions';

const initialStateOrder = {
    orderReq: false,
    orderError: false,
    createdOrder: {},
    orderIds: []
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
        case ADD_ORDER_IDS: {
            return { 
                ...state,
                orderIds: action.orderIds
            };
        }
        default: {
            return state;
        }
    }
};
