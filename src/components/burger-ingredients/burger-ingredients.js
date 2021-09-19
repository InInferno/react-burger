import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCard from '../ingredient-card/ingredient-card'
import PropTypes from 'prop-types';
import { cardPropTypes } from '../types/types';

export default function BurgerIngredients({data, openModal, setModalData}) {
  
  const [current, setCurrent] = React.useState('bun');
  const typesIng = [
    {type: 'bun', title: 'Булки'}, 
    {type: 'sauce', title: 'Соусы'},
    {type: 'main', title: 'Начинки'}
  ];

  const dataFilter = type => {
    return data.filter(item => item.type === type)
  }

  const isOpenModal = (cardData) => {
    openModal();
    setModalData(cardData);
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
              {dataFilter(item.type).map((card) => {
                return <IngredientCard key={card._id} card={card} isOpenModal={isOpenModal}/>
                })
              }
            </ul>
          </div>
        })}
      </div>  
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
  openModal: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired
};
