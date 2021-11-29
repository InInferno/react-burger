import * as types from "../actions/action-types";
import { modalReducer } from "./modalReducer";
import { v4 as uuidv4 } from 'uuid';

describe('modal reducer', () => {
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

  it('should handle ADD_CART_MODAL', () => {
    expect(
      modalReducer({
        viewedIngredient: null
      }, {
        type: types.ADD_CART_MODAL,
        viewedIngredient: ingredient
      })
    ).toEqual(
      {
        viewedIngredient: ingredient
      }
    )
  })
  it('should handle DELETE_CART_MODAL', () => {
    expect(
      modalReducer({
        viewedIngredient: ingredient
      }, {
        type: types.DELETE_CART_MODAL,
        viewedIngredient: null
      })
    ).toEqual(
      {
        viewedIngredient: null
      }
    )
  })
});
