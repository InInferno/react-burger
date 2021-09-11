import React, { useEffect } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

export default function BurgerIngredients(props) {

  const dataFilter = type => {
    return props.data.filter(item => item.type === type)
  }
  const [current, setCurrent] = React.useState('bun');
  const [dataIng, setData] = React.useState(dataFilter(current));
  const [title, setTitle] = React.useState('Булки');
  
  useEffect(() => {
    setData(props.data.filter(item => item.type === current))
    if(current === 'bun') {
      setTitle('Булки')
    } else if (current === 'sauce') {
      setTitle('Соусы')
    } else if(current === 'main') {
      setTitle('Начинки')
    }
  }, [current, props.data]);

  return (
    <section className={styles.box}>
      <div className={`${styles.tabs} mt-5 mb-10`}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={`${styles.container} ${styles.scroll} mt-10`}>
          <p className="text text_type_main-medium mb-6">
            {title}
          </p>
          <ul className={`${styles.cards} ml-4 mr-4`}>
            {dataIng.map((card, index)=> {
              return <li 
                className={`${styles.card} mb-8`}
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
    </section>
  )
}

const cardPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired
});

BurgerIngredients.propTypes = {
  props: PropTypes.arrayOf(cardPropTypes.isRequired)
};