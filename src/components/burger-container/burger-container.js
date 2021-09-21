import React, { useEffect, useState } from 'react';
import styles from './burger-container.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { url } from '../../utils/constants';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { DataBurgersContext } from '../../context/data-burgers-context'
import { ModalBurgersContext } from '../../context/modal-burgers-context'
import { OpenModalContext } from '../../context/open-modal-context'
import { BunContext } from '../../context/bun-context';
import { OrderDataContext } from '../../context/order-data-context';
import { IngredientsContext } from '../../context/ingredients-context';


export default function BurgerContainer() {
// Sorry... Context is pain for me. I will do everything beautifully for redux. 
  const [data, setData] = useState([]);
  const [isIngrs, setIsIngrs] = useState([]);
  const [bun, setBun] = useState(null);
  const [isModalIngr, setIsModalIngr] = useState(false);
  const [isModalOrder, setIsModalOrder] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [orderIds, setOrderIds] = useState(null);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    fetch(`${url}/ingredients`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => {
        setData(res.data);
        setIsIngrs(res.data.filter(ing => ing.type !== 'bun'));
        setBun(res.data.filter(ing => ing.type === 'bun')[0])
        setOrderIds(res.data.map((item) => item._id));
      })
      .catch((err) => {
        console.log(err);
      });

       
      if(orderIds) {
        fetch(`${url}/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({"ingredients": orderIds})
        })
        .then(res => {
          if (res.status !== 200) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(res => {
          setOrderData(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }

  }, [orderIds])

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

  const escButtonHandler = (e) => {
    if(e.key === 'Escape') {
      closeModal()
    }
  }

  return (
    <main className={styles.box}>
      {isModalIngr &&
        <Modal children={<IngredientDetails data={modalData} />} closeModal={closeModal} escButtonHandler={escButtonHandler}/>
      }
      {isModalOrder &&
        <Modal children={<OrderDetails data={modalData}/>} closeModal={closeModal} escButtonHandler={escButtonHandler}/>
      }
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
      <div className={styles.container}>
        <DataBurgersContext.Provider value={data}>
          <IngredientsContext.Provider value={isIngrs}>
            <BunContext.Provider value={bun}>
              <OrderDataContext.Provider value={orderData}>
                <ModalBurgersContext.Provider value={[setModalData]}>
                  <OpenModalContext.Provider value={openOrder}>
                    <BurgerIngredients data={data} openModal={openIngr} setModalData={setModalData}/>
                    <BurgerConstructor />
                  </OpenModalContext.Provider>
                </ModalBurgersContext.Provider>
              </OrderDataContext.Provider>  
            </BunContext.Provider>
          </IngredientsContext.Provider>
        </DataBurgersContext.Provider>
      </div>
    </main>
  )
}
