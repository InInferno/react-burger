import React, { useEffect, useState } from 'react';
import styles from './order-details.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ICard, IOrderCard, IOrdersInfo, IUniqueIngredientsObj, RootState } from '../../utils/types';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const OrderDetails: React.FC = () => {

  const dataOrders = useSelector<RootState, IOrdersInfo>(store => store.wsReducer.ordersInfo)
  const ingredients = useSelector<RootState, Array<ICard>>(store => store.ingredientsReducer.listAllIngredients.data)

  const [data, setData] = useState<IOrderCard>();
  const params = useParams<{id: string}>();

  useEffect(
    () => {
      setData(dataOrders.orders && dataOrders.orders.find(({ _id }: {_id: string}) => _id === params.id))
    },
    [params.id, data, dataOrders]
  );

  const date = data && new Date(data.createdAt)
  .toLocaleString("ru", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short"
  })

  const orderIngs = 
  data?.ingredients.reduce(
    (acc: Array<ICard | undefined>, orderId: string) => {
      for(let i = 0; i < ingredients.length; i++) {
        if(ingredients[i]._id === orderId) {
          acc.push(ingredients[i])
        } 
      }
      return acc;
  }, []);

  let uniqueIngredientsObj = 
  orderIngs && orderIngs.reduce((acc: IUniqueIngredientsObj, item: ICard | undefined) => {
    if (!acc._id && item) {
      acc[item._id] = item;
    }
    return acc;
  }, {});
  const uniqueIngredients = uniqueIngredientsObj && Object.values(uniqueIngredientsObj);

  const totalPrice = orderIngs && orderIngs.reduce((acc: number, item: ICard | undefined) => item && item.price ? acc + item.price : acc, 0);

  const counter = (item: string) => {
    const counts: any = {};
    if(data?.ingredients) {
      for (const num of data?.ingredients) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
    }
    return counts[item] || 0;
  }

  return (
    <div className={`${styles.container}`}>
      <p className={`text text_type_digits-default mt-20 ${styles.id}`}>#{data && data.number}</p>
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
        <p className='text text_type_main-default text_color_inactive'>{date}</p>
        <div className={styles.price}>
          <p className='text text_type_digits-default mr-2'>{totalPrice}</p>
          <CurrencyIcon type="primary"/>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails;
