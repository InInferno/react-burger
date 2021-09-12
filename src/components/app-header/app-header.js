import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <a href="##" className={`${styles.link} mb-4 mt-4 mr-2 pl-5 pr-5 pb-5 pt-5`}>
                    <BurgerIcon type="primary" />
                    <p className="text text_type_main-default ml-2">
                        Конструктор
                    </p>
                </a>
                <a href="##" className={`${styles.link} mb-4 mt-4 pl-5 pr-5 pb-5 pt-5`}>
                    <ListIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive ml-2">
                        Лента заказов
                    </p>
                </a>
            </nav>

            <Logo />

            <a href="##" className={`${styles.link} mb-4 mt-4 pl-5 pr-5 pb-5 pt-5`}>
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default text_color_inactive ml-2">
                    Личный кабинет
                </p>
            </a>
        </div>
    </header>
  )
}