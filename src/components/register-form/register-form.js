import React, { useRef, useState } from 'react';
import styles from './register-form.module.css';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function RegisterForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
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
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
            <Input
                type={'text'}
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
            <div className={styles.input}>
                <Input
                    type={'text'}
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
            </div>
        </form>
        
        <div className={`mt-6`}>
            <Button type="primary" size="medium">
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

export default RegisterForm;
