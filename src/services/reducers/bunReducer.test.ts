import { ADD_BUN } from "../actions/action-types";
import { bunReducer } from "./bunReducer";

describe('bunReducer', () => {
  it("should handle ADD_BUN", () => {
    const bunInConstructor = {
      _id: "60d3b41abdacab0026a733c7",
      name: "Флюоресцентная булка R2-D3",
      type: "bun",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
      __v: 0,
      uuid: "30362650-7577-4a9d-9384-ed4bc4f5df9a"
    }
    expect(
      bunReducer(
        {
          bunInConstructor: null
        },
        {
          type: ADD_BUN,
          bunInConstructor: bunInConstructor
        }
      )
    ).toEqual(
      {
        bunInConstructor: bunInConstructor
      }
    );
  });
});
