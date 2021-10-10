import React, { useRef, useState } from 'react';
import styles from './reset-password.module.css';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { url } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { resetPasswordFetch } from '../../services/actions/index'

function ResetPassword() {

    const dispatch = useDispatch();

    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const inputRef = useRef(null)

    const [passwordType, setPasswordType] = useState('password')
    const onIconClick = () => {
        if(passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    const onClickReset = (url, password, token) => {
        dispatch(resetPasswordFetch(url, password, token));
    } 
    
  return (
    <div className={styles.container}>
        <p className="text text_type_main-medium mt-20">
            Вход
        </p>
        <form className={`${styles.form} mt-6`}>
            <Input
                type={passwordType}
                placeholder={'Введите новый пароль'}
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
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={e => setToken(e.target.value)}
                icon={undefined}
                value={token}
                name={'token'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
        </form>
        
        <div className={`mt-6`}>
            <Button 
                onClick={() => onClickReset(url, password, token)}
                type="primary" 
                size="medium" 
            >
                Сохранить
            </Button>
        </div>

        <div className={`${styles.info} mt-20`}>
            <p className="text text_type_main-default text_color_inactive pt-4">
                Вспомнили пароль?
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

export default ResetPassword;
