import React from 'react';
import styles from './register-form.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function RegisterForm() {

    const [value, setValue] = React.useState('')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    

  return (
    <div className={styles.container}>

    
        <form className={styles.form}>
            <p className="text text_type_main-medium mt-20">
                Регистрация
            </p>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setValue(e.target.value)}
                icon={undefined}
                value={value}
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
                onChange={e => setValue(e.target.value)}
                icon={undefined}
                value={value}
                name={'email'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
            <Input
                type={'text'}
                placeholder={'Пароль'}
                onChange={e => setValue(e.target.value)}
                icon={'ShowIcon'}
                value={value}
                name={'password'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
        </form>

        <Button type="primary" size="medium">
            Зарегистрироваться
        </Button>

        <div className={styles.info}>
        <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
        </p>
        <Button type="secondary" size="medium">
            Войти
        </Button>
        </div>

    </div>
  );
}

export default RegisterForm;
