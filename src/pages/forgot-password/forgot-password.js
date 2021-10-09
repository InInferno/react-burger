import React, { useRef, useState } from 'react';
import styles from './forgot-password.module.css';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { url } from '../../utils/constants';
import { resetPasswordFetch } from '../../services/actions/index';
import { useDispatch } from 'react-redux';

function ForgorPassword() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const onClickResetPassword = () => {
        dispatch(resetPasswordFetch(url, email));
    }
    
  return (
    <div className={styles.container}>
        <p className="text text_type_main-medium mt-20">
            Восстановление пароля
        </p>
        <form className={`${styles.form} mt-6`}>
            <Input
                type={'email'}
                placeholder={'Укажите e-mail'}
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
        </form>
        
        <div className={`mt-6`}>
            <Button onClick={onClickResetPassword} type="primary" size="medium">
                Восстановить
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

export default ForgorPassword;
