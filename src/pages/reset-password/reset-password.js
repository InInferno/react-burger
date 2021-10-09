import React, { useRef, useState } from 'react';
import styles from './reset-password.module.css';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { url } from '../../utils/constants';

function ResetPassword() {

    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')

    const inputRef = useRef(null)

    const [passwordType, setPasswordType] = useState('password')
    const onIconClick = () => {
        if(passwordType === 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }


    function resetPasswordFetch(url, password, code) { 
        return () => {
            fetch(`${url}/password-reset/reset`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({"password": password, "token": code})
            })
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(res => {
                    console.log('res', res)
                })
                .catch((err) => {
                    console.log('err', err)
                });
        }
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
                onChange={e => setCode(e.target.value)}
                icon={undefined}
                value={code}
                name={'code'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
        </form>
        
        <div className={`mt-6`}>
            <Button type="primary" size="medium" onClick={resetPasswordFetch(url, password, code)}>
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
