import React, { useCallback, useEffect, useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { url } from '../../utils/constants';
import { 
  updateIngredients, 
  orderFetchData, 
  addOrderIds, 
  addIngredient, 
  addBun
} from '../../services/actions';
import { useDrop } from "react-dnd";
import update from 'immutability-helper';
import ConstructorCard from '../constructor-card/constructor-card';

export default function BurgerConstructor() {

  const dispatch = useDispatch();
  let history = useHistory();

  const addIngredientInConstructor = (card) => {
    if(card.card.type === 'bun') {
      dispatch(addBun(card.card))
    } else {
      dispatch(addIngredient(card.card))
    }
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      addIngredientInConstructor(item);
    },
  });

  const dataIngs = useSelector(store => store.constructorReducer.ingredientsInConstructor);
  const bunBurger = useSelector(store => store.bunReducer.bunInConstructor);
  const orderIds = useSelector(store => store.orderReducer.orderIds);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(addOrderIds([
      bunBurger._id,
      ...dataIngs.map(item => item._id),
      bunBurger._id
    ]))

    setTotalPrice(
      () => {
        const totalPrice = [
          ...Array(2).fill(bunBurger.price),
          ...dataIngs.map(item => item.price)
        ].reduce((acc, price) => price ? acc + price : acc, 0);
        return totalPrice;
      }
    )
  }, [dataIngs, bunBurger, dispatch])


  const { name } = useSelector(store => store.profileReducer);

  const isOpenModal = () => {
    name 
    ? dispatch(orderFetchData(url, orderIds))
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
      {bunBurger._id && 
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
          {dataIngs.map((card, index)=> {
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
      
      {bunBurger._id && 
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
        {bunBurger._id ?
          <div onClick={isOpenModal}>
            <Button type="primary" size="medium">
              Оформить заказ
            </Button>
          </div>
          :
          <p className={`text text_type_main-default ml-5 ${styles.choice}`}>Выберите булку, чтобы сделать заказ</p>
        }
      </div>

    </section>
  )
}
