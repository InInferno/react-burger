import React from 'react';
import styles from './order-list.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export default function OrderList() {

  return (
    <div className={`${styles.container} ${styles.scroll}`}>
      <div className={`${styles.cards} mr-2`}>
        <div className={`${styles.card}`}>
          <div className={styles.info}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <p className='text text_type_main-medium mt-6'>Death Start Starship Main бургер</p>
          <div className={`${styles.order} mt-6`}>
            <div className={styles.images}>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-medium mr-2">666</p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <p className='text text_type_main-medium mt-6'>Death Start Starship Main бургер</p>
          <div className={`${styles.order} mt-6`}>
            <div className={styles.images}>
              <div className={`${styles.radius} ${styles.dark}`}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
                <p className={`${styles.number} text text_type_digits-default`}>+3</p>
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-medium mr-2">666</p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <p className='text text_type_main-medium mt-6'>Death Start Starship Main бургер</p>
          <div className={`${styles.order} mt-6`}>
            <div className={styles.images}>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-medium mr-2">666</p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <p className='text text_type_main-medium mt-6'>Death Start Starship Main бургер</p>
          <div className={`${styles.order} mt-6`}>
            <div className={styles.images}>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-medium mr-2">666</p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <p className='text text_type_main-medium mt-6'>Death Start Starship Main бургер</p>
          <div className={`${styles.order} mt-6`}>
            <div className={styles.images}>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-medium mr-2">666</p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <p className='text text_type_main-medium mt-6'>Death Start Starship Main бургер</p>
          <div className={`${styles.order} mt-6`}>
            <div className={styles.images}>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-medium mr-2">666</p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <p className='text text_type_digits-default'>#034535</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <p className='text text_type_main-medium mt-6'>Death Start Starship Main бургер</p>
          <div className={`${styles.order} mt-6`}>
            <div className={styles.images}>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-02.png'} alt='Ингредиент' />
              </div>
              <div className={styles.radius}>
                <img className={styles.image} src={'https://code.s3.yandex.net/react/code/bun-01.png'} alt='Ингредиент' />
              </div>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-medium mr-2">666</p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
