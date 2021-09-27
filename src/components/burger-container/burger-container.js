import React from 'react';
import styles from './burger-container.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
// import { url } from '../../utils/constants';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { useSelector } from 'react-redux';

export default function BurgerContainer() {

  const isModalIngr = useSelector(store => store.modalReducer.viewedIngredient)
  const isModalOrder = useSelector(store => store.orderReducer.createdOrder)

  return (
    <main className={styles.box}>
      {isModalIngr._id &&
        <Modal children={<IngredientDetails />} />
      }
      {isModalOrder.success &&
        <Modal children={<OrderDetails />} />
      }
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
      <div className={styles.container}>
          <BurgerIngredients />
          <BurgerConstructor />
      </div>
    </main>
  )
}
