import React from 'react';
import styles from './burger-container.module.css';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import Modal from '../../components/modal/modal';
import OrderInfo from '../../components/order-info/order-info';
import { useSelector } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { deleteCartModal } from '../../services/actions/modal-actions';
import { deleteOrderModal } from '../../services/actions/order-actions';
import { useDispatch } from 'react-redux';
import { RootState, IOrderInfo } from '../../utils/types';

const BurgerContainer: React.FC = () => {

  const dispatch = useDispatch();

  const isModalOrder = useSelector<RootState, IOrderInfo | null>(store => store.orderReducer.createdOrder)
  
  const closeModal = () => {
    dispatch(deleteCartModal());
    dispatch(deleteOrderModal());
  }

  return (
    <main className={styles.box}>      
      {isModalOrder && isModalOrder.success &&
        <Modal children={<OrderInfo />} closeModal={closeModal}/>
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

export default BurgerContainer;
