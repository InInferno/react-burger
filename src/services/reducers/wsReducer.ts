import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../actions/action-types';

type TWsState = {
  wsConnected: boolean;
  ordersInfo: any;
  error: any;
}

const initialState: TWsState = {
  wsConnected: false,
  ordersInfo: [],
  error: undefined
};
  
export const wsReducer = (state = initialState, action: any): TWsState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        ordersInfo: action.payload
      };
    default:
      return state;
  }
}; 
