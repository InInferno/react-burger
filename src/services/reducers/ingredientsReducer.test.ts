import * as types from "../actions/action-types";
import { ingredientsReducer } from "./ingredientsReducer";
import { v4 as uuidv4 } from 'uuid';

describe('ingredients reducer', () => {
  const ingOne = {
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
  const ingTwo = {
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

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(
      ingredientsReducer({
        listAllIngredientsReq: false,
        listAllIngredientsError: false,
        listAllIngredients: {success: false, data: []}
      }, {
        type: types.GET_INGREDIENTS_REQUEST,
        listAllIngredientsReq: true
      })
    ).toEqual(
      {
        listAllIngredientsReq: true,
        listAllIngredientsError: false,
        listAllIngredients: {success: false, data: []}
      }
    )
  })
  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(
      ingredientsReducer({
        listAllIngredientsError: false,
        listAllIngredients: {success: false, data: []}, 
        listAllIngredientsReq: true
      }, {
        type: types.GET_INGREDIENTS_SUCCESS,
        listAllIngredients: {success: true, data: [ingOne, ingTwo]},
      })
    ).toEqual(
      {
        listAllIngredientsError: false,
        listAllIngredients: {success: true, data: [ingOne, ingTwo]}, 
        listAllIngredientsReq: false
      }
    )
  })
  it('should handle GET_INGREDIENTS_ERROR', () => {
    expect(
      ingredientsReducer({
        listAllIngredientsError: false,
        listAllIngredientsReq: true,
        listAllIngredients: {success: false, data: []}
      }, {
        type: types.GET_INGREDIENTS_ERROR
      })
    ).toEqual(
      {
        listAllIngredientsError: true,
        listAllIngredientsReq: false,
        listAllIngredients: {success: false, data: []}
      }
    );
  })
});
