import React from 'react';
import styles from './order-stat.module.css';
import { useSelector } from '../../services/hooks';
import { IOrderCard } from '../../utils/types';

const OrderStat: React.FC = () => {

  const ordersInfo = useSelector(store => store.wsReducer.ordersInfo)
  const ready = ordersInfo.orders && [...ordersInfo.orders.filter((item: IOrderCard) => 
    item.status === 'done' && item.status
  )].map(item => item.number)
  const inWork = ordersInfo.orders && [...ordersInfo.orders.filter((item: IOrderCard) => 
    item.status !== 'done' && item.status
  )].map(item => item.number)

  return (
    <div className={styles.container}>
      <div className={`${styles.box} mt-15 mb-6`}>
        <div className={`${styles.work} mr-10`}>
          <p className='text text_type_main-medium'>Готовы:</p>
          {ready && <ul className={styles.list}>
             {ready.map((item: number, index: number) => {
              return <li key={index} className={`${styles.text} text text_type_digits-default`}>{item}</li>
            })}
          </ul>}
        </div>
        <div className={`${styles.work} ml-2`}>
          <p className='text text_type_main-medium'>В работе:</p>
          {inWork && <ul className={styles.list}>
            {inWork.map((item: IOrderCard, index: number) => {
              return <li key={index} className="text text_type_digits-default">{item}</li>
            })}  
          </ul>}
        </div>
      </div>
      <div className={`${styles.info} mb-15`}>
        <p className='text text_type_main-medium'>Выполнено за все время:</p>
        <p className={`${styles.number} text text_type_digits-large`}>{ordersInfo.total}</p>
      </div>
      <div className={styles.info}>
        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
        <p className={`${styles.number} text text_type_digits-large`}>{ordersInfo.totalToday}</p>
      </div>
    </div>
  )
}

export default OrderStat;
