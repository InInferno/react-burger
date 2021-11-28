import React from 'react';
import styles from './order-list.module.css';
import { IOrderListComponent, IOrderCard } from '../../utils/types';
import { useSelector } from '../../services/hooks';
import Order from '../order/order';

const OrderList: React.FC<IOrderListComponent> = ({url}) => {

  const ordersInfo = useSelector(store => store.wsReducer.ordersInfo)

  return (
    <div className={`${styles.container} ${styles.scroll}`}>
      <ul className={`${styles.cards} mr-2`}>
        {ordersInfo.orders && ordersInfo.orders.map((item: IOrderCard, index: number) => {
          return <Order key={index} url={url} orderInfo={item}/>
        })}
      </ul>
    </div>
  )
}

export default OrderList;
