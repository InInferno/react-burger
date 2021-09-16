import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';

export default function IngredientDetails({data}) {
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
  )
}

IngredientDetails.propTypes = {
    data: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired
};
