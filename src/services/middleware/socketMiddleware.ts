import type { Middleware, MiddlewareAPI } from 'redux';
import { getCookie } from '../../utils/cookie';

import { 
  WS_CONNECTION_START, 
  WS_SEND_MESSAGE, 
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
  WS_CONNECTION_START_USER
} from '../actions/action-types';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsInitUser: WS_CONNECTION_START_USER,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export const socketMiddleware = (wsUrl: string): Middleware => {
  return (store: MiddlewareAPI<any, any>) => {
    let socket: WebSocket | null = null;

    return next => action => {

      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsInitUser, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      const accessToken: string | undefined = getCookie('accessToken');
      const token = accessToken && accessToken.split(" ")[1];

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === wsInitUser) {
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          console.log('send');
          const message = { ...payload };
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
