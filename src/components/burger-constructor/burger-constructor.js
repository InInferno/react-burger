import React, { useEffect, useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '../../utils/constants';
import { orderFetchData } from '../../services/actions';

export default function BurgerConstructor() {

  const dispatch = useDispatch();
  
  const dataIngs = useSelector(store => store.constructorReducer.ingredientsInConstructor);
  const bunBurger = useSelector(store => store.bunReducer.bunInConstructor)

  const [orderIds, setOrderIds] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if(dataIngs.length >= 1 || bunBurger.data) {
      let totalArr = [...dataIngs];
      if(bunBurger.data) {
        totalArr.push(bunBurger);
      }
      setOrderIds(totalArr.map((item) => item.data._id))
    
      setTotalPrice(
        () => {
        let sum = 0;
        for (let i = 0; i < totalArr.length; i++){
          if(totalArr[i].type === 'bun') {
            sum += totalArr[i].data.price * 2
          } else {
            sum += totalArr[i].data.price
          }
        }
          return sum
        }
      )
    }
  }, [dataIngs, bunBurger])

  const isOpenModal = () => {
    dispatch(orderFetchData(url, orderIds))
  }

  return (
    <section className={styles.box}>
      {bunBurger.data && 
        <div className="ml-10 pl-9">
        <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bunBurger.data.name} (верх)`}
        price={bunBurger.data.price}
        thumbnail={bunBurger.data.image}
        />
        </div>
      }

      {dataIngs.length >= 1 ?
        <ul className={ `${styles.container} ${styles.scroll} mt-4 mb-4`}>
          {dataIngs.map((card, index)=> {
            return <li
              key={card.id}
              className={`${styles.card}`}
            >
              <DragIcon type="primary" />
              <ConstructorElement
                text={card.data.name}
                price={card.data.price}
                thumbnail={card.data.image}
            />
            </li>
            })
          }
        </ul>
        :
        <p className={`${styles.container} text text_type_main-default pt-30 pb-30`}>
          Добавьте ингредиенты
        </p>
      }
      
      {bunBurger.data && 
        <div className="ml-10 pl-9">
        <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${bunBurger.data.name} (низ)`}
        price={bunBurger.data.price}
        thumbnail={bunBurger.data.image}
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
