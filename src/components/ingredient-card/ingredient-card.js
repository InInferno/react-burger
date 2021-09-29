import React from 'react';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardPropTypes } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, addBun, addCartModal } from '../../services/actions';
import { useDrag } from "react-dnd";

export default function IngredientCard({ card }) {

  const [{opacity}, dragRef] = useDrag({
    type: "ingredient",
    item: {card},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  const dispatch = useDispatch();
  const orderIds = useSelector(store => store.orderReducer.orderIds);

  const addIngredientInConstructor = (card) => {
    if(card.type === 'bun') {
      dispatch(addBun(card))
    } else {
      dispatch(addIngredient(card))
    }
    dispatch(addCartModal(card))
  }

  const counter = (item) => {
    const counts = {};
    for (const num of orderIds) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts[item] || 0;
  }

  return (
    <li 
      className={`${styles.card} mb-8`}
      onClick={() => addIngredientInConstructor(card)}
      ref={dragRef}
      style={{opacity: `${opacity}`}}
    >
      <Counter count={counter(card._id)} size="default" />
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
