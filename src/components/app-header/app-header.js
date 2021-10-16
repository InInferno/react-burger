import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useRouteMatch } from 'react-router-dom';

export default function AppHeader() {

    const isConstructor = !!useRouteMatch({ path: '/', exact: true});
    const isFeed = !!useRouteMatch('/feed');
    const isProfile = !!useRouteMatch('/profile');

  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <Link to='/' className={`${styles.link} mb-4 mt-4 mr-2 pl-5 pr-5 pb-5 pt-5`}>
                    <BurgerIcon type={`${isConstructor ? 'primary' : 'secondary'}`} />
                    <p className={`text text_type_main-default ${!isConstructor && 'text_color_inactive'} ml-2`}>
                        Конструктор
                    </p>
                </Link>
                <Link to='/feed' className={`${styles.link} mb-4 mt-4 pl-5 pr-5 pb-5 pt-5`}>
                    <ListIcon type={`${isFeed ? 'primary' : 'secondary'}`} />
                    <p className={`text text_type_main-default ${!isFeed && 'text_color_inactive'} ml-2`}>
                        Лента заказов
                    </p>
                </Link> 
            </nav>
            <Link to='/'>    
                <Logo />
            </Link>
            <Link to='/profile' className={`${styles.link} mb-4 mt-4 pl-5 pr-5 pb-5 pt-5`}>
                <ProfileIcon type={`${isProfile ? 'primary' : 'secondary'}`} />
                <p className={`text text_type_main-default ${!isProfile && 'text_color_inactive'} ml-2`}>
                    Личный кабинет
                </p>
            </Link>    
        </div>
    </header>
  )
}