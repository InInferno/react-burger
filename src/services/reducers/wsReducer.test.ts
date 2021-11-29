import * as types from "../actions/action-types";
import { wsReducer } from "./wsReducer";

describe('wsReducer', () => {

  const initialState = {
    wsConnected: false,
    ordersInfo: [],
    error: undefined
  };

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(
      wsReducer({
        wsConnected: false,
        ordersInfo: [],
        error: undefined
      }, {
        type: types.WS_CONNECTION_SUCCESS,
        error: undefined,
        wsConnected: true
      })
    ).toEqual(
      {
        wsConnected: true,
        ordersInfo: [],
        error: undefined
      }
    );
  })
  it('should handle WS_CONNECTION_ERROR', () => {
    expect(
      wsReducer({
        wsConnected: false,
        ordersInfo: [],
        error: undefined
      }, 
        {
          type: types.WS_CONNECTION_ERROR,
          wsConnected: false,
          error: 'error'
        })
    ).toEqual(
      {
        wsConnected: false,
        ordersInfo: [],
        error: undefined
      }
    )
  })
  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(
      wsReducer({
        wsConnected: true,
        ordersInfo: [],
        error: undefined
      }, 
        {
          type: types.WS_CONNECTION_CLOSED,
          error: undefined,
          wsConnected: false
        })
    ).toEqual(
      {
        wsConnected: false,
        ordersInfo: [],
        error: undefined
      }
    )
  })
  it('should handle WS_GET_MESSAGE', () => {
    expect(
      wsReducer(initialState, {
        type: types.WS_GET_MESSAGE,
        ordersInfo: {
          orders: [{1: 1}, {1: 2}],
          total: 6239,
          totalToday: 31
        },
        error: undefined
      })
    )
  })
});
