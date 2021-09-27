import React from 'react';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardPropTypes } from '../types/types';
import { useDispatch } from 'react-redux';
import { addIngredient, addBun, addCartModal } from '../../services/actions';

export default function IngredientCard({ card }) {

  const dispatch = useDispatch();

  const addIngredientInConstructor = (card) => {
    if(card.type === 'bun') {
      dispatch(addBun(card))
    } else {
      dispatch(addIngredient(card))
    }
    dispatch(addCartModal(card))
  }

  return (
    <li 
      className={`${styles.card} mb-8`}
      onClick={() => addIngredientInConstructor(card)}
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
    card: cardPropTypes
};
