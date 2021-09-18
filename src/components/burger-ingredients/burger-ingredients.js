import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
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
              {dataFilter(item.type).map((card, index) => {
                return <li 
                  className={`${styles.card} mb-8`}
                  onClick={() => isOpenModal(card)}
                  key={index}
                >
                  <Counter count={1} size="default" />
                  <img src={card.image} alt="ingredient"/>
                  <div className={`${styles.info} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-2">{card.price}</p>
                    <CurrencyIcon type="primary"/>
                  </div>
                  <p className="text text_type_main-default pb-6">
                    {card.name}
                  </p>
                </li>
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
