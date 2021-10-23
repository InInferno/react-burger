import React from 'react';
import styles from './nav-profile.module.css';
import { NavLink } from 'react-router-dom';
import { logoutFetch } from '../../services/actions/profile-actions';
import { useDispatch } from 'react-redux';

function NavProfile() {
    const dispatch = useDispatch();

    const onClickLogout = () => {
        dispatch(logoutFetch())
    }
    
    return (
        <nav className={styles.nav}>
            <NavLink 
                exact
                to='/profile' 
                className={`${styles.text} text text_type_main-medium text_color_inactive`}
                activeStyle={{color: "#fff"}}
            >
                Профиль
            </NavLink>
            <NavLink 
                to='/profile/orders' 
                className={`${styles.text} text text_type_main-medium text_color_inactive`}
                activeStyle={{color: "#fff"}}
            >
                История заказов
            </NavLink>
            <div 
                to='/profile' 
                className={`${styles.link}`}
                onClick={(() => onClickLogout())}
            >
                <p className={`${styles.text}text text_type_main-medium text_color_inactive`}>
                    Выход
                </p>
            </div>
        </nav>
    );
}

export default NavProfile;
