import React from 'react';
import styles from './orders.module.css';
import OrderList from '../../components/order-list/order-list';
import NavProfile from '../../components/nav-profile/nav-profile';

const Orders: React.FC = () =>  {
  return (
    <div className={styles.container}>
      <div className='mt-20'>
        <NavProfile />
        <p className={`${styles.description} text text_type_main-default text_color_inactive mt-20`}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <div className={`${styles.box} mt-10`}>
        <OrderList />
      </div>
    </div>
  );
}

export default Orders;
