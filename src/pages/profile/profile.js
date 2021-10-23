import React, { useEffect, useRef, useState } from 'react';
import styles from './profile.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { logoutFetch, updateUserInfoFetch } from '../../services/actions/profile-actions';
import { useDispatch, useSelector } from 'react-redux';
import NavProfile from '../../components/nav-profile/nav-profile';

function Profile() {
    const dispatch = useDispatch();
    const profileName = useSelector(store => store.profileReducer.name)
    const profileEmail = useSelector(store => store.profileReducer.email)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setName(`${profileName}`);
        setEmail(`${profileEmail}`);
    }, [setName, setEmail, profileName, profileEmail])

    const inputNameRef = useRef(null)
    const inputLoginRef = useRef(null)
    const inputPasswordRef = useRef(null)

    const onIconClickName = () => {
        inputNameRef.current.disabled = !inputNameRef.current.disabled
    }

    const onIconClickLogin = () => {
        inputLoginRef.current.disabled = !inputLoginRef.current.disabled
    }

    const onIconClickPassword = () => {
        inputPasswordRef.current.disabled = !inputPasswordRef.current.disabled
    }

    const saveHandled = (e) => {
        e.preventDefault();
        dispatch(updateUserInfoFetch(email, name, password))
        setPassword('');
    }

    const onClickCancel = () => {
        setName(`${profileName}`);
        setEmail(`${profileEmail}`);
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className='mr-15 mt-20'>
                <NavProfile />
            </div>
            <form 
                className={`${styles.form} mt-20`}
                onSubmit={saveHandled}
            >
                <Input
                    disabled
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    icon={'EditIcon'}
                    value={name}
                    name={'name'}
                    error={false}
                    ref={inputNameRef}
                    onIconClick={onIconClickName}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    disabled={true}
                    type={'email'}
                    placeholder={'Логин'}
                    onChange={e => setEmail(e.target.value)}
                    icon={'EditIcon'}
                    value={email}
                    name={'email'}
                    error={false}
                    ref={inputLoginRef}
                    onIconClick={onIconClickLogin}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    disabled={true}
                    type={'password'}
                    placeholder={'Пароль'}
                    onChange={e => setPassword(e.target.value)}
                    icon={'EditIcon'}
                    value={password}
                    name={'password'}
                    error={false}
                    ref={inputPasswordRef}
                    onIconClick={onIconClickPassword}
                    errorText={'Ошибка'}
                    size={'default'}
                />

                <div className={styles.buttons}>
                    <div className={styles.button}>
                        <Button type="primary" size="medium">
                            Сохранить
                        </Button>
                    </div>
                    <div className={styles.button}>
                        <Button 
                            type="primary" 
                            size="medium" 
                            onClick={(() => onClickCancel())}
                        >
                            Отмена
                        </Button>
                    </div>
                </div>
            </form>
        </div>
        <div className={`${styles.info} mt-20`}>
            <p className={`${styles.description} text text_type_main-default text_color_inactive`}>
                В этом разделе вы можете изменить свои персональные данные
            </p>
        </div>
    </div>
  );
}

export default Profile;
