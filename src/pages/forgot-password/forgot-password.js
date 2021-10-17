import React, { useRef, useState } from 'react';
import styles from './forgot-password.module.css';
import { Link, Redirect } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { resetForgotFetch } from '../../services/actions/profile-actions';
import { useDispatch, useSelector } from 'react-redux';

function ForgorPassword() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const resetHandler = (e) => {
      e.preventDefault();
      dispatch(resetForgotFetch(email))
    }

    const { emailSent, name } = useSelector(store => store.profileReducer);
    if (emailSent) {
        return (
          <Redirect
            to={{
              pathname: '/reset-password'
            }}
          />
        );
    }

    if (name) {
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
            Восстановление пароля
        </p>
        <form 
          className={`${styles.form} mt-6`}
          onSubmit={resetHandler}
        >
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
          <div className={`${styles.button} mt-6`}>
            <Button type="primary" size="medium">
                Восстановить
            </Button>
          </div>
        </form>
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
