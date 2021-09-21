import React, { useContext, useEffect, useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalBurgersContext } from '../../context/modal-burgers-context';
import { OpenModalContext } from '../../context/open-modal-context';
import { BunContext } from '../../context/bun-context';
import { OrderDataContext } from '../../context/order-data-context';
import { IngredientsContext } from '../../context/ingredients-context';

export default function BurgerConstructor() {
  
  const [setModalData] = useContext(ModalBurgersContext);
  const openModal = useContext(OpenModalContext);
  const dataIngs = useContext(IngredientsContext);
  const bunBurger = useContext(BunContext);
  const orderData = useContext(OrderDataContext);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (bunBurger !== null) {
      let count = bunBurger.price * 2;
      for (let key in dataIngs) {
        count += dataIngs[key].price;
      };
      setTotalPrice(count);
    }
  }, [dataIngs, bunBurger])

  const isOpenModal = (cardData) => {
    openModal();
    setModalData(cardData);
  }

  return (
    <section className={styles.box}>
      {bunBurger && 
        <div className="ml-10 pl-9">
        <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bunBurger.name} (верх)`}
        price={bunBurger.price}
        thumbnail={bunBurger.image}
        />
        </div>
      }

      <ul className={ `${styles.container} ${styles.scroll} mt-4 mb-4`}>
        {dataIngs.map((card, index)=> {
          return <li
            key={index}
            className={`${styles.card}`}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text={card.name}
              price={card.price}
              thumbnail={card.image}
          />
          </li>
          })
        }
      </ul>
      
      {bunBurger && 
        <div className="ml-10 pl-9">
        <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${bunBurger.name} (низ)`}
        price={bunBurger.price}
        thumbnail={bunBurger.image}
        />
        </div>
      }
      
      <div className={`${styles.info} mt-10`}>
        <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
        <CurrencyIcon type="primary"/>
        <div onClick={() => isOpenModal(orderData)}>
          <Button type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>

    </section>
  )
}
