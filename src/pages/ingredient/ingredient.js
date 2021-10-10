import React from 'react';
import styles from './ingredient.module.css';
// import { Link, Redirect } from 'react-router-dom';
// import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
// import { url } from '../../utils/constants';
// import { loginFetch } from '../../services/actions/index'
// import { useDispatch, useSelector } from 'react-redux';
// import IngredientDetails from '../../components/ingredient-details/ingredient-details';

export default function Ingredient() {
    
    const data = {
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
        __v: 0
    }

  return (
    <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
        <p className="text text_type_main-medium">
            Детали ингредиента
        </p>
        <img src={data.image} alt='ingredient'/>
        <p className="text text_type_main-default mt-4">
            {data.name}
        </p>
        <div className={`${styles.info} mt-8`}> 
            <div>
                <p className="text text_type_main-default text_color_inactive">
                    Калории, ккал
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    {data.calories}
                </p>
            </div>
            <div>
                <p className="text text_type_main-default text_color_inactive">
                    Белки, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    {data.proteins}
                </p>
            </div>
            <div>
                <p className="text text_type_main-default text_color_inactive">
                    Жиры, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    {data.fat}
                </p>
            </div>
            <div>
                <p className="text text_type_main-default text_color_inactive">
                    Углеводы, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    {data.carbohydrates}
                </p>
            </div>
        </div>
    </div>
  );
}

