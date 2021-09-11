import React from 'react';
import styles from './burger-container.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import data from '../../utils/data';

export default function BurgerContainer() {
  return (
    <main className={styles.box}>
        <h1 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h1>
        <div className={styles.container}>
            <BurgerIngredients data={data}/>
            <BurgerConstructor data={data}/>
        </div>
    </main>
  )
}
