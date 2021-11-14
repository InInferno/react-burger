import React, { useEffect } from 'react';
import styles from './orders.module.css';
import OrderList from '../../components/order-list/order-list';
import NavProfile from '../../components/nav-profile/nav-profile';
import { useDispatch } from 'react-redux';
import { WS_CONNECTION_START_USER } from '../../services/actions/action-types';

const Orders: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch({ type: WS_CONNECTION_START_USER });
    },
  [dispatch]);

  return (
    <div className={styles.container}>
      <div className='mt-20'>
        <NavProfile />
        <p className={`${styles.description} text text_type_main-default text_color_inactive mt-20`}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <div className={`${styles.box} mt-10`}>
        <OrderList url='profile/orders'/>
      </div>
    </div>
  );
}

export default Orders;
