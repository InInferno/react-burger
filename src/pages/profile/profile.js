import React, { useRef, useState } from 'react';
import styles from './profile.module.css';
import { Link } from 'react-router-dom';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { url } from '../../utils/constants';
import { logoutFetch } from '../../services/actions/index'
import { useDispatch } from 'react-redux';


function Profile() {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputNameRef = useRef(null)
    const inputLoginRef = useRef(null)
    const inputPasswordRef = useRef(null)

    const onIconClickName = () => {
        inputNameRef.current.disabled = !inputNameRef.current.disabled
    }

    const onIconClickLogin = () => {
        inputLoginRef.current.disabled = !inputLoginRef.current.disabled
    }

    const onIconClickPassword = () => {
        inputPasswordRef.current.disabled = !inputPasswordRef.current.disabled
    }

    const onClickLogout = (url) => {
        dispatch(logoutFetch(url))
    }
    
  return (
    <div className={styles.container}>

        <div className={styles.box}>
            <nav className={`${styles.nav} mr-15 mt-20`}>
                <Link to='/profile' className={`${styles.link}`}>
                    <p className={`${styles.text}text text_type_main-medium`}>
                        Профиль
                    </p>
                </Link>
                <Link to='/profile/orders' className={`${styles.link}`}>
                    <p className={`${styles.text}text text_type_main-medium text_color_inactive`}>
                        История заказов
                    </p>
                </Link>
                <div 
                    to='/profile' 
                    className={`${styles.link}`}
                    onClick={(() => onClickLogout(url))}
                >
                    <p className={`${styles.text}text text_type_main-medium text_color_inactive`}>
                        Выход
                    </p>
                </div>
            </nav>

            <form className={`${styles.form} mt-20`}>
                <Input
                    disabled={true}
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    icon={'EditIcon'}
                    value={name}
                    name={'name'}
                    error={false}
                    ref={inputNameRef}
                    onIconClick={onIconClickName}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    disabled={true}
                    type={'email'}
                    placeholder={'Логин'}
                    onChange={e => setEmail(e.target.value)}
                    icon={'EditIcon'}
                    value={email}
                    name={'email'}
                    error={false}
                    ref={inputLoginRef}
                    onIconClick={onIconClickLogin}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    disabled={true}
                    type={'password'}
                    placeholder={'Пароль'}
                    onChange={e => setPassword(e.target.value)}
                    icon={'EditIcon'}
                    value={password}
                    name={'password'}
                    error={false}
                    ref={inputPasswordRef}
                    onIconClick={onIconClickPassword}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </form>
        </div>    
        <p className={`${styles.description} text text_type_main-default text_color_inactive mt-20`}>
            В этом разделе вы можете изменить свои персональные данные
        </p>
    </div>

  );
}

export default Profile;
