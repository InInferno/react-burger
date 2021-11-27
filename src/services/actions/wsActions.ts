import { any } from 'cypress/types/bluebird';
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
  } from './action-types';

export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly error?: any;
    readonly payload?: any;
}

export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: any;
}

export interface IWsSendMessageAction {
    readonly type?: typeof WS_SEND_MESSAGE;
    readonly payload?: any;
}

export type TWsActions = 
| IWsConnectionSuccessAction
| IWsConnectionErrorAction
| IWsConnectionClosedAction
| IWsGetMessageAction
| IWsSendMessageAction;
  
export const wsConnectionSuccess = (): IWsConnectionSuccessAction => ({
    type: WS_CONNECTION_SUCCESS
});

export const wsConnectionError = (): IWsConnectionErrorAction => ({
    type: WS_CONNECTION_ERROR
});

export const wsConnectionClosed = (): IWsConnectionClosedAction => ({
    type: WS_CONNECTION_CLOSED
});

export const wsGetMessage = (message: any): IWsGetMessageAction => ({
    type: WS_GET_MESSAGE,
    payload: message
});

export const wsSendMessage = (message: any): IWsSendMessageAction  => ({
    type: WS_SEND_MESSAGE,
    payload: message
});
