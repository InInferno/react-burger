import React from 'react';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ICard, IIngredientCard, RootState } from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { addCartModal } from '../../services/actions/modal-actions';
import { useDrag } from "react-dnd";

const IngredientCard: React.FC<IIngredientCard> = ({ card }) =>  {
  const [{opacity}, dragRef] = useDrag({
    type: "ingredient",
    item: {card},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  const dispatch = useDispatch();
  const orderIds = useSelector<RootState, Array<string>>(store => store.orderReducer.orderIds);

  const openModal = (card: ICard) => {
    dispatch(addCartModal(card))
  }

  const counter = (item: string) => {
    const counts: any = {};
    for (const num of orderIds) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts[item] || 0;
  }

  return (
    <li 
      className={`${styles.card} mb-8`}
      onClick={() => openModal(card)}
      ref={dragRef}
      style={{opacity: `${opacity}`}}
    >
      {counter(card._id) > 0 && 
        <Counter count={counter(card._id)} size="default" />
      }
      <img src={card.image} alt="Ингредиент"/>
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

export default IngredientCard;
