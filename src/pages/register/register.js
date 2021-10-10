import React, { useRef, useState } from 'react';
import styles from './register.module.css';
import { Link, Redirect } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { url } from '../../utils/constants';
import { registerFetch } from '../../services/actions/index'
import { useDispatch, useSelector } from 'react-redux';

function Register() {

    const dispatch = useDispatch();

    const [name, setName] = useState('')
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

    const onClickRegister = (url, email, password, name) => {
        dispatch(registerFetch(url, email, password, name));
    }
    
    const userName = useSelector(store => store.profileReducer.name)
    if (userName) {
        return (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        );
    }

  return (
    <div className={styles.container}>
        <p className="text text_type_main-medium mt-20">
            Регистрация
        </p>
        <form className={`${styles.form} mt-6`}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setName(e.target.value)}
                icon={undefined}
                value={name}
                name={'name'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
                size={'default'}
            />
            <Input
                type={'email'}
                placeholder={'E-mail'}
                onChange={e => setEmail(e.target.value)}
                icon={undefined}
                value={email}
                name={'email'}
                error={false}
                ref={inputRef}
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
        </form>
        
        <div className={`mt-6`}>
            <Button 
                type="primary" 
                size="medium" 
                onClick={(() => onClickRegister(url, email, password, name))
            }>
                    Зарегистрироваться
            </Button>
        </div>


        <div className={`${styles.info} mt-20`}>
            <p className="text text_type_main-default text_color_inactive pt-4">
                Уже зарегистрированы?
            </p>
            <Link to='/login'>
                <Button type="secondary" size="medium">
                    Войти
                </Button>
            </Link>
        </div>
    </div>

  );
}

export default Register;
