import React, { useRef, useState } from 'react';
import styles from './reset-password.module.css';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPassword() {

    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')

    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    
  return (
    <div className={styles.container}>
        <p className="text text_type_main-medium mt-20">
            Вход
        </p>
        <form className={`${styles.form} mt-6`}>
            <Input
                type={'password'}
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
            <Button type="primary" size="medium">
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
