import React, { useCallback, useEffect, useState } from 'react';
import styles from './order-details.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { dataOrders } from '../../utils/constants';
import { ICard, IOrderList } from '../../utils/types';
import { useParams } from 'react-router';

const OrderDetails: React.FC = () => {

  const [data, setData] = useState<IOrderList>();
  const [ingredients, setIngredients] = useState<Array<ICard>>();
  const [ingredientIds, setIngredientIds] = useState<Array<string>>();
  const params = useParams<{id: string}>();

  const loadIndredient = useCallback(
    () => {
      const card: IOrderList | undefined = (dataOrders.find(({ id }) => id === params.id));
      setData(card);
      setIngredients(card && card.ingredients)
      setIngredientIds(card && card.ingredients.map((item: ICard ) => item._id))
    },
    [params]
  );

  useEffect(
    () => {
      loadIndredient();
    },
    [params.id, loadIndredient]
  );

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      () => {
        if(ingredients) {
          const totalPrice = [
            ...ingredients.map(item => item.price)
          ].reduce((acc: any, price: number) => price ? acc + price : acc, 0);
          return totalPrice;
        }
      }
    )
  }, [ingredients])

  const counter = (item: string) => {
    const counts: any = {};
    if(ingredientIds) {
      for (const num of ingredientIds) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
    }
    return counts[item] || 0;
  }

  let uniqueIngredients = 
  ingredients && ingredients.reduce((acc: any, item: ICard) => {
    if (!acc._id) {
      acc[item._id] = item;
    }
    return acc;
  }, {});
  if(ingredients) uniqueIngredients = Object.values(uniqueIngredients);

  return (
    <div className={`${styles.container}`}>
      <p className={`text text_type_digits-default mt-20 ${styles.id}`}>{data && data.id}</p>
      <p className='text text_type_main-medium mt-10'>{data && data.name}</p>
      <p className={`${styles.status} text text_type_main-default mt-3`}>Выполнен</p>
      <p className='text text_type_main-medium mt-15'>Состав:</p>
      <div className={`${styles.box} ${styles.scroll}`}>
        <ul className={`${styles.list} mt-6`}>
          {uniqueIngredients && uniqueIngredients.map((item: ICard) => {
            return <li
              key={item._id}
              className={`${styles.card} mb-4`}
            >
              <div className={`${styles.radius} mr-4`}>
                <img className={`${styles.image}`} src={item.image} alt='Ингредиент' />        
              </div>
              <p className={`text text_type_main-default mr-4 ${styles.text}`}>{item.name}</p>
              <div className={`${styles.price} mr-6`}>
                <p className='text text_type_digits-default mr-2'>
                  {counter(item._id)} x {item.price}
                </p>
                <CurrencyIcon type="primary"/>
              </div>
            </li>
          })}
        </ul>
      </div>    
      <div className={`${styles.info} mt-10`}>
        <p className='text text_type_main-default text_color_inactive'>{data && data.date}</p>
        <div className={styles.price}>
          <p className='text text_type_digits-default mr-2'>{totalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails;
