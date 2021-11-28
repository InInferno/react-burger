import React, { FormEvent, useRef, useState } from 'react';
import styles from './reset-password.module.css';
import { Link, Redirect } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../services/hooks';
import { resetPasswordFetch } from '../../services/actions/profile-actions';

const ResetPassword: React.FC = () => {

  const dispatch = useDispatch();

  const [password, setPassword] = useState<string>('')
  const [token, setToken] = useState<string>('')

  const inputRef = useRef(null)

  const [passwordType, setPasswordType] = useState<"password" | "text">('password')
  const onIconClick = () => {
      if(passwordType === 'password') {
          setPasswordType('text')
      } else {
          setPasswordType('password')
      }
  }

  const resetHandler = (e: FormEvent) => {
      e.preventDefault();
      dispatch(resetPasswordFetch(password, token));
  } 

  const name = useSelector(store => store.profileReducer.name);
  const passwordReseted = useSelector(store => store.profileReducer.passwordReseted);
  const emailSent = useSelector(store => store.profileReducer.emailSent);
  if (name) {
      return (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      );
  }
  if (!emailSent) {
      return (
        <Redirect
          to={{
            pathname: '/forgot-password'
          }}
        />
      );
  }
  if (passwordReseted) {
      return (
        <Redirect
          to={{
            pathname: '/login'
          }}
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
            onSubmit={resetHandler}
        >
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
            <div className={`${styles.button} mt-6`}>
                <Button type="primary" size="medium">
                    Сохранить
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

export default ResetPassword;
