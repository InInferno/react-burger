import React, { useEffect, useState } from 'react';
import styles from './burger-container.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { url } from '../../utils/constants';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

export default function BurgerContainer() {

  const [data, setData] = useState([]);
  const [isModalIngr, setIsModalIngr] = useState(false);
  const [isModalOrder, setIsModalOrder] = useState(false);
  const [modalData, setModalData] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const openIngr = () => {
    setIsModalIngr(true);
  }

  const openOrder = () => {
    setIsModalOrder(true);
  }

  const closeModal = () => {
    setIsModalIngr(false);
    setIsModalOrder(false);
  }

  return (
    <main className={styles.box}>
      {isModalIngr &&
        <Modal children={<IngredientDetails data={modalData} />} closeModal={closeModal}/>
      }
      {isModalOrder &&
        <Modal children={<OrderDetails data={modalData}/>} closeModal={closeModal}/>
      }
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
      <div className={styles.container}>
          <BurgerIngredients data={data} openModal={openIngr} setModalData={setModalData}/>
          <BurgerConstructor data={data} openModal={openOrder} setModalData={setModalData}/>
      </div>
    </main>
  )
}
