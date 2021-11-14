import React, { useEffect } from 'react';
import styles from './feed.module.css';
import OrderList from '../../components/order-list/order-list';
import OrderStat from '../../components/order-stat/order-stat';
import { useDispatch } from 'react-redux';
import { WS_CONNECTION_START } from '../../services/actions/action-types';
import { wsGetMessage } from '../../services/actions/wsActions';

const Feed: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch({ type: WS_CONNECTION_START });
      wsGetMessage();
    },
  [dispatch]);

  return (
    <div className={`${styles.container} mt-10`}>
      <div className={styles.box}>
        <p className="text text_type_main-large mb-5">
          Лента заказов
        </p>
        <OrderList url='feed'/>
      </div>
      <OrderStat />
    </div>
  );
}

export default Feed;
