import React, { useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCard from '../ingredient-card/ingredient-card'
import { useSelector } from 'react-redux';

export default function BurgerIngredients() {

  const data = useSelector(store => store.ingredientsReducer.listAllIngredients.data);
  
  const [current, setCurrent] = useState('bun');
  const typesIng = [
    {type: 'bun', title: 'Булки'}, 
    {type: 'sauce', title: 'Соусы'},
    {type: 'main', title: 'Начинки'}
  ];

  const dataFilter = type => {
    return data.filter(item => item.type === type)
  }

  const setTab = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.box}>
      <div className={`${styles.tabs} mt-5 mb-10`}>
        <Tab value="bun" active={current === 'bun'} onClick={setTab}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.container} ${styles.scroll} mt-10`}>
        {typesIng.map((item, index) => {
          return <div
            key={index}
          >
            <p id={item.type} className="text text_type_main-medium mb-6">
              {item.title}
            </p>
            <ul className={`${styles.cards} ml-4 mr-4`}>
              {data && 
                dataFilter(item.type).map((card) => {
                  return <IngredientCard key={card._id} card={card} />
                })
              }
            </ul>
          </div>
        })}
      </div>  
    </section>
  )
}
