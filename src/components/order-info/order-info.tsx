import React from 'react';
import styles from './order-info.module.css';
import orderAccepted from '../../images/order-accepted.gif'
import { useSelector } from 'react-redux';
import { RootState, IOrderInfo } from '../../utils/types';

const OrderInfo: React.FC = () => {

  const data = useSelector<RootState, IOrderInfo | null>(store => store.orderReducer.createdOrder)

  return (
    <div className={`${styles.container} pt-30 pr-25 pb-30 pl-25`}>
        <p className={`${styles.shadow} text text_type_digits-large`}>{data && data.order.number}</p>
        <p className="text text_type_main-medium mt-8">
          идентификатор заказа
        </p>
        <img className={`${styles.image} mt-15`} src={orderAccepted} alt="success"/>
        <p className="text text_type_main-default mt-15">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default">
          {data && data.name}
        </p>
        <p className="text text_type_main-default text_color_inactive mt-2">
          Дождитесь готовности на орбитальной станции
        </p>
    </div> 
  )
}

export default OrderInfo;
