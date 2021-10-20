import React from 'react';
import styles from './feed.module.css';
import OrderList from '../../components/order-list/order-list';
import OrderStat from '../../components/order-stat/order-stat';

export default function Feed() {

  return (
    <div>
      <OrderList />
      <OrderStat />
    </div>
  );
}
