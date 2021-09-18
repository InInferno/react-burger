import React from 'react';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { cardPropTypes } from '../types/types';

export default function IngredientCard({card, isOpenModal}) {
  return (
    <li 
        className={`${styles.card} mb-8`}
        onClick={() => isOpenModal(card)}
    >
        <Counter count={1} size="default" />
        <img src={card.image} alt="ingredient"/>
        <div className={`${styles.info} mt-1 mb-1`}>
        <p className="text text_type_digits-default mr-2">{card.price}</p>
        <CurrencyIcon type="primary"/>
        </div>
        <p className="text text_type_main-default pb-6">
        {card.name}
        </p>
    </li>  
  )
}

IngredientCard.propTypes = {
    card: cardPropTypes,
    isOpenModal: PropTypes.func.isRequired,
};
