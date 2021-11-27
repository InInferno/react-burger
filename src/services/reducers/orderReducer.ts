import { IOrderInfo } from '../../utils/types';
import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    DELETE_ORDER_MODAL,
    ADD_ORDER_IDS
} from '../actions/action-types';
import { TApplicationActions } from '../../utils/types';

type TOrderState = {
    orderReq: boolean;
    orderError: boolean;
    createdOrder: IOrderInfo | null;
    orderIds: Array<string>;
} 

const initialStateOrder: TOrderState = {
    orderReq: false,
    orderError: false,
    createdOrder: null,
    orderIds: []
};

export const orderReducer = (state = initialStateOrder, action: TApplicationActions): TOrderState => {
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
