import * as types from "../actions/action-types";
import { orderReducer } from "./orderReducer";
import { v4 as uuidv4 } from 'uuid';

describe('order reducer', () => {
  const ingredient = {
    _id: "60d3b41abdacab0026a733cd",
    name: "Соус фирменный Space Sauce",
    type: "sauce",
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    __v: 0,
    uuid: uuidv4()
  }
  const order = {
    success: true,
    name: 'name',
    order: {
      ingredients: [ingredient, ingredient],
      _id: '_id',
      owner: {
        name: 'name',
        email: 'email',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
      status: 'status',
      name: 'status',
      createdAt: 'status',
      updatedAt: 'status',
      number: 123,
      price: 123,
    }
  }

  it('should handle GET_ORDER_REQUEST', () => {
    expect(
      orderReducer({
        orderReq: false,
        orderError: false,
        createdOrder: null,
        orderIds: []
      }, {
        type: types.GET_ORDER_REQUEST,
        orderReq: true,
      })
    ).toEqual(
      {
        orderReq: true,
        orderError: false,
        createdOrder: null,
        orderIds: []
      }
    )
  })
  it('should handle GET_ORDER_SUCCESS', () => {
    expect(
      orderReducer({
        orderReq: true,
        orderError: false,
        createdOrder: null,
        orderIds: []
      }, {
        type: types.GET_ORDER_SUCCESS,
        createdOrder: order,
      })
    ).toEqual(
      {
        orderReq: false,
        orderError: false,
        createdOrder: order,
        orderIds: []
      }
    )
  })
  it('should handle GET_ORDER_ERROR', () => {
    expect(
      orderReducer({
        orderReq: true,
        orderError: false,
        createdOrder: null,
        orderIds: []
      }, {
        type: types.GET_ORDER_ERROR
      })
    ).toEqual(
      {
        orderReq: false,
        orderError: true,
        createdOrder: null,
        orderIds: []
      }
    );
  })
  it('should handle DELETE_ORDER_MODAL', () => {
    expect(
      orderReducer({
        orderReq: false,
        orderError: false,
        createdOrder: order,
        orderIds: []
      }, {
        type: types.DELETE_ORDER_MODAL,
        createdOrder: null
      })
    ).toEqual(
      {
        orderReq: false,
        orderError: false,
        createdOrder: null,
        orderIds: []
      }
    )
  })
  it('should handle ADD_ORDER_IDS', () => {
    expect(
      orderReducer({
        orderReq: false,
        orderError: false,
        createdOrder: order,
        orderIds: []
      }, {
        type: types.ADD_ORDER_IDS,
        orderIds: ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd"]
      })
    ).toEqual(
      {
        orderReq: false,
        orderError: false,
        createdOrder: order,
        orderIds: ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd"]
      }
    )
  })
});
