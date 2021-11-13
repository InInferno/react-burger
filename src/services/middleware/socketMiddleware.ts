import type { Middleware, MiddlewareAPI } from 'redux';

import { 
  WS_CONNECTION_START, 
  WS_SEND_MESSAGE, 
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE
} from '../actions/action-types';

const wsActions = {
  wsInit: WS_CONNECTION_START,
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
      
      // const { dispatch, getState } = store;
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      // const { user } = getState().user;
      // if (type === wsInit && user) {
      //   socket = new WebSocket(`${wsUrl}?token=${user.token}`);
      // }
      
      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}`);
      }
      if (socket) {
        socket.onopen = event => {
          console.log('onopen');
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          console.log('onerror');
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          console.log('onmessage');
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          console.log('onclose');
          dispatch({ type: onClose, payload: event });
        };

        // if (type === wsSendMessage) {
        //   const message = { ...payload, token: user.token };
        //   socket.send(JSON.stringify(message));
        // }
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


// import type { Middleware, MiddlewareAPI } from 'redux';

// // import type { AppActions, AppDispatch, RootState } from '../types';

// // import { 
// //   WS_CONNECTION_START, 
// //   WS_SEND_MESSAGE, 
// //   WS_CONNECTION_SUCCESS,
// //   WS_CONNECTION_CLOSED,
// //   WS_CONNECTION_ERROR,
// //   WS_GET_MESSAGE
// // } from '../actions/action-types';

// // const wsActions = {
// //   wsInit: WS_CONNECTION_START,
// //   wsSendMessage: WS_SEND_MESSAGE,
// //   onOpen: WS_CONNECTION_SUCCESS,
// //   onClose: WS_CONNECTION_CLOSED,
// //   onError: WS_CONNECTION_ERROR,
// //   onMessage: WS_GET_MESSAGE
// // };

// export const socketMiddleware = (wsUrl: string): Middleware => {
//     return ((store: MiddlewareAPI<any, any>) => {
//         let socket: WebSocket | null = null;

//     return next => (action: any) => {
//       const { dispatch, getState } = store;
//       const { type, payload } = action;
 
//       if (type === 'WS_CONNECTION_START') {
//             // объект класса WebSocket
//         socket = new WebSocket(wsUrl);
//       }
//       if (socket) {

//                 // функция, которая вызывается при открытии сокета
//         socket.onopen = event => {
//           dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
//         };

//                 // функция, которая вызывается при ошибке соединения
//         socket.onerror = event => {
//           dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
//         };

//                 // функция, которая вызывается при получения события от сервера
//         socket.onmessage = event => {
//           const { data } = event;
//           dispatch({ type: 'WS_GET_MESSAGE', payload: data });
//         };
//                 // функция, которая вызывается при закрытии соединения
//         socket.onclose = event => {
//           dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
//         };

//         if (type === 'WS_SEND_MESSAGE') {
//           const message = payload;
//                     // функция для отправки сообщения на сервер
//           socket.send(JSON.stringify(message));
//         }
//       }

//       next(action);
//     };
//     }) as Middleware;
// }; 
