import React, { useRef, useState, FormEvent } from 'react';
import styles from './login.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { loginFetch } from '../../services/actions/profile-actions';
import { useDispatch, useSelector } from 'react-redux';
import { ILocation, RootState } from '../../utils/types';

const Login: React.FC = () =>  {
    
    const dispatch = useDispatch();
    const location: ILocation = useLocation();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)
    const [passwordType, setPasswordType] = useState<"password" | "text" | "email">('password')
    const onIconClick = () => {
        if(passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    const loginHandler = (e: FormEvent) => {
        e.preventDefault();
        dispatch(loginFetch(email, password));
    }

    const userName = useSelector<RootState, string>(store => store.profileReducer.name)
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
