import React, { useEffect, useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { cardPropTypes } from '../types/types';
import { url } from '../../utils/constants';

export default function BurgerConstructor({dataIngs, bunBurger, setModalData, openModal}) {

  const [orderIds, setOrderIds] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {

    if (bunBurger !== null) {
      let count = bunBurger.price * 2;
      for (let key in dataIngs) {
        count += dataIngs[key].price;
      };
      setTotalPrice(count);

      let totalArr = dataIngs;
      totalArr.push(bunBurger);
      setOrderIds(totalArr.map((item) => item._id))
    }
  }, [dataIngs, bunBurger])

  const isOpenModal = () => {
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
      setModalData(res);
      openModal();
    })
    .catch((err) => {
      console.log('err', err);
    });
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
        <div onClick={isOpenModal}>
          <Button type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>

    </section>
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired,
  dataIngs: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
  bunBurger: cardPropTypes
};
