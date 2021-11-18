import React, { useCallback, useEffect, useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { orderFetchData, addOrderIds } from '../../services/actions/order-actions';
import { addBun } from '../../services/actions/bun-actions';
import { addIngredient, updateIngredients } from '../../services/actions/constructor-actions';
import { useDrop } from "react-dnd";
import update from 'immutability-helper';
import ConstructorCard from '../constructor-card/constructor-card';
import { ICard, RootState } from '../../utils/types';

const BurgerConstructor: React.FC = () => {

  const dispatch = useDispatch();
  let history = useHistory();

  const addIngredientInConstructor = (card: {card: ICard}) => {
    if(card.card.type === 'bun') {
      dispatch(addBun(card.card))
    } else {
      dispatch(addIngredient(card.card))
    }
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: {card: ICard}) {
      addIngredientInConstructor(item);
    },
  });

  const dataIngs = useSelector<RootState, Array<ICard>>(store => store.constructorReducer.ingredientsInConstructor);
  const bunBurger = useSelector<RootState, ICard | null>(store => store.bunReducer.bunInConstructor);
  const orderIds = useSelector<RootState, Array<string>>(store => store.orderReducer.orderIds);
  const orderReq = useSelector<RootState, boolean>(store => store.orderReducer.orderReq);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    bunBurger &&
    dispatch(addOrderIds([
      bunBurger._id,
      ...dataIngs.map((item: ICard) => item._id),
      bunBurger._id
    ]))

    setTotalPrice(
      () => {
        const totalPrice = [
          ...Array(2).fill(bunBurger && bunBurger.price),
          ...dataIngs.map((item: ICard) => item.price)
        ].reduce((acc, price) => price ? acc + price : acc, 0);
        return totalPrice;
      }
    )
  }, [dataIngs, bunBurger, dispatch])

  const name = useSelector<RootState, string>(store => store.profileReducer.name);

  const isOpenModal = () => {
    name 
    ? dispatch(orderFetchData(orderIds))
    : history.push('/login')
  }

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = dataIngs[dragIndex];
    dispatch(updateIngredients(
      update(dataIngs, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
        ],
      })
    ))

  }, [dataIngs, dispatch]);

  return (
    <section ref={dropTarget} className={styles.box}>
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

      {dataIngs.length >= 1 ?
        <ul className={ `${styles.container} ${styles.scroll} mt-4 mb-4`}>
          {dataIngs.map((card: ICard, index: number) => {
            return <ConstructorCard 
            constructorCard={card} 
            key={card.uuid} 
            index={index} 
            id={card._id} 
            moveCard={moveCard}
            />
            })
          }
        </ul>
        :
        <p className={`${styles.container} text text_type_main-default pt-30 pb-30`}>
          Добавьте ингредиенты
        </p>
      }
      
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
          {bunBurger ?
            <div onClick={isOpenModal}>
              {orderReq ?
                <p className={`text text_type_main-default ml-5 ${styles.choice}`}>Идёт загрузка заказа...</p>
              : 
              <Button type="primary" size="medium">
                Оформить заказ
              </Button>
              }
            </div>
            :
            <p className={`text text_type_main-default ml-5 ${styles.choice}`}>Выберите булку, чтобы сделать заказ</p>
          }
      </div>

    </section>
  )
}

export default BurgerConstructor;
