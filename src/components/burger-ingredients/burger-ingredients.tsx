import React, { useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCard from '../ingredient-card/ingredient-card'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ICard, RootState } from '../../utils/types';

const BurgerIngredients: React.FC = () => {

  let location = useLocation();

  const data = useSelector<RootState, Array<ICard>>(store => store.ingredientsReducer.listAllIngredients.data);
  
  const [current, setCurrent] = useState('bun');
  const typesIng = [
    {type: 'bun', title: 'Булки'}, 
    {type: 'sauce', title: 'Соусы'},
    {type: 'main', title: 'Начинки'}
  ];

  const dataFilter = (type: string) => {
    return data.filter(item => item.type === type)
  }

  const setTab = (tab: string) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const updateTabs = () => {
    const containerTop = (document.getElementById('container') as HTMLDivElement).getBoundingClientRect().top;
    const bunTop = (document.getElementById('bun') as HTMLDivElement).getBoundingClientRect().top;
    const sauceTop = (document.getElementById('sauce') as HTMLDivElement).getBoundingClientRect().top;
    const mainTop = (document.getElementById('main') as HTMLDivElement).getBoundingClientRect().top;
    if (bunTop >= containerTop && containerTop < sauceTop) {
      setCurrent('bun')
    } else if (sauceTop <= containerTop && containerTop < mainTop) {
      setCurrent('sauce')
    } else if (mainTop <= containerTop) {
      setCurrent('main')
    }
  }

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
        <div onScroll={updateTabs} id='container' className={`${styles.container} ${styles.scroll} mt-10`}>
          {typesIng.map((item, index) => {
            return <div
              key={index}
            >
              <p id={item.type} className="text text_type_main-medium mb-6">
                {item.title}
              </p>
              <ul className={`${styles.cards} ml-4 mr-4`}>
                {data && 
                  dataFilter(item.type).map((card: ICard) => {
                    return (
                      <Link
                        className={styles.link}
                        key={card._id}
                        to={{
                          pathname: `/ingredients/${card._id}`,
                          state: { ingredientModal: location }
                        }}
                      >
                        <IngredientCard card={card} />
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
          })}
        </div>
    </section>
  )
}

export default BurgerIngredients;
