import React from 'react';
import styles from './orders.module.css';
import OrderList from '../../components/order-list/order-list';
import NavProfile from '../../components/nav-profile/nav-profile';

export default function Orders() {

  return (
    <div className={styles.container}>
      <div className='mt-20'>
        <NavProfile />
        <p className={`${styles.description} text text_type_main-default text_color_inactive mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={`${styles.box} mt-10`}>
        <OrderList />
      </div>
    </div>
  );
}
