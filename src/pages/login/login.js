import React, { useRef, useState } from 'react';
import styles from './login.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { loginFetch } from '../../services/actions/profile-actions';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const location = useLocation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputRef = useRef(null)
    const [passwordType, setPasswordType] = useState('password')
    const onIconClick = () => {
        if(passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginFetch(email, password));
    }
    
    const userName = useSelector(store => store.profileReducer.name)
    if (userName) {
        return (
          <Redirect
            to={
                location.state?.from || '/' 
            }
          />
        );
    }

  return (
    <div className={styles.container}>
        <p className="text text_type_main-medium mt-20">
            Вход
        </p>
        <form 
            className={`${styles.form} mt-6`}
            onSubmit={loginHandler}
        >
            <Input
                type={'email'}
                placeholder={'E-mail'}
                onChange={e => setEmail(e.target.value)}
                icon={undefined}
                value={email}
                name={'email'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
            <Input
                type={passwordType}
                placeholder={'Пароль'}
                onChange={e => setPassword(e.target.value)}
                icon={'ShowIcon'}
                value={password}
                name={'password'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
            <div className={`${styles.button} mt-6`}>
                <Button type="primary" size="medium">
                    Войти
                </Button>
            </div>
        </form>
        <div className={`${styles.info} mt-20`}>
            <p className="text text_type_main-default text_color_inactive pt-4">
                Вы - новый пользователь?
            </p>
            <Link to='/register'>
                <Button type="secondary" size="medium">
                    Зарегистрироваться
                </Button>
            </Link>
        </div>
        <div className={`${styles.info}`}>
            <p className="text text_type_main-default text_color_inactive pt-4">
                Забыли пароль?
            </p>
            <Link to='/forgot-password'>
                <Button type="secondary" size="medium">
                    Восстановить пароль
                </Button>
            </Link>
        </div>
    </div>

  );
}

export default Login;
