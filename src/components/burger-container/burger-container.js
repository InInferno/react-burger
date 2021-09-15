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

  return (
    <main className={styles.box}>
      {isModalIngr &&
        <Modal children={<IngredientDetails />}/>
      }
      {isModalOrder &&
        <Modal children={<OrderDetails />}/>
      }
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
      <div className={styles.container}>
          <BurgerIngredients data={data}/>
          <BurgerConstructor data={data}/>
      </div>
    </main>
  )
}
