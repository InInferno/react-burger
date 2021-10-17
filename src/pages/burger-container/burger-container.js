import React from 'react';
import styles from './burger-container.module.css';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import Modal from '../../components/modal/modal';
import OrderDetails from '../../components/order-details/order-details';
import { useSelector } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { deleteCartModal } from '../../services/actions/modal-actions';
import { deleteOrderModal } from '../../services/actions/order-actions';
import { useDispatch } from 'react-redux';

export default function BurgerContainer() {

  const dispatch = useDispatch();

  const isModalOrder = useSelector(store => store.orderReducer.createdOrder)

  const closeModal = () => {
    dispatch(deleteCartModal());
    dispatch(deleteOrderModal());
  }

  return (
    <main className={styles.box}>      
      {isModalOrder.success &&
        <Modal children={<OrderDetails />} closeModal={closeModal}/>
      }
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
        </DndProvider> 
      </div>
    </main>
  )
}
