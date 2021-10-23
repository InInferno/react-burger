import React from 'react';
import styles from './order-list.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { dataOrders } from '../../utils/constants'

export default function OrderList() {

  const data = dataOrders;
  
  return (
    <div className={`${styles.container} ${styles.scroll}`}>
      <ul className={`${styles.cards} mr-2`}>
        {data.map((item, index) => {
          return <li
            className={styles.card}
            key={index}
          >
            <div className={styles.info}>
              <p className='text text_type_digits-default'>{item.id}</p>
              <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
            </div>
            <p className='text text_type_main-medium mt-6'>{item.name}</p>
            <div className={`${styles.order} mt-6`}>
              <ul className={styles.images}>
                {item.images.forEach((image, index) => {
                  if (index < 6) { 
                    return (
                      <li key={index} style={{zIndex: item.images.length - index}} className={`${styles.radius} ${item.images.length > 6 && index === 5 && styles.blackout}`}>
                        <img className={`${styles.image}`} src={image} alt='Ингредиент' />
                        {item.images.length > 6 && index === 5 && 
                          <p className={`${styles.number} text text_type_digits-default`}>{`+${item.images.length - 6}`}</p>
                        }
                      </li>
                    )
                  }
                })}
              </ul>
              <div className={styles.price}>
                <p className="text text_type_digits-medium mr-2">{item.price}</p>
                <CurrencyIcon type="primary"/>
              </div>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}
