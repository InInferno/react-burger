import * as types from "../actions/action-types";
import { constructorReducer } from "./constructorReducer";
import { v4 as uuidv4 } from 'uuid';

describe('constructor reducer', () => {
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
  const initialStateConstructor = {
    ingredientsInConstructor: []
  };
  const initialStateConstructorDel = {
    ingredientsInConstructor: [ingOne, ingTwo]
  };

  it('should return the initial state', () => {
    expect(constructorReducer(undefined, {})).toEqual(
      {
        ingredientsInConstructor: []
      }
    )
  })
  it('should handle ADD_INGREDIENT', () => {
    expect(
      constructorReducer(initialStateConstructor, {
        type: types.ADD_INGREDIENT,
        ingredientsInConstructor: ingOne
      })
    ).toEqual(
      {
        ingredientsInConstructor: [ingOne]
      }
    )
  })
  it("should handle DELETE_INGREDIENT", () => {
    expect(
      constructorReducer(
        initialStateConstructorDel,
        {
          type: types.DELETE_INGREDIENT,
          ingredient: ingTwo
        }
      )
    ).toEqual(
      {ingredientsInConstructor: [ingOne]},
    )
  });
  it("should handle UPDATE_INGREDIENTS", () => {
    expect(
      constructorReducer(
        initialStateConstructorDel,
        {
          type: types.UPDATE_INGREDIENTS,
          ingredientsInConstructor: [ingTwo, ingOne]
        }
      )
    ).toEqual(
      {ingredientsInConstructor: [ingTwo, ingOne]},
    )
  });
}) 
