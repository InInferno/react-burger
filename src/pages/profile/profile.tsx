import React, { useEffect, useRef, useState, FormEvent } from 'react';
import styles from './profile.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserInfoFetch } from '../../services/actions/profile-actions';
import { useDispatch, useSelector } from 'react-redux';
import NavProfile from '../../components/nav-profile/nav-profile';
import { RootState } from '../../utils/types';

const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const profileName = useSelector<RootState, string>(store => store.profileReducer.name)
    const profileEmail = useSelector<RootState, string>(store => store.profileReducer.email)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        setName(`${profileName}`);
        setEmail(`${profileEmail}`);
    }, [setName, setEmail, profileName, profileEmail])

    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputLoginRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const onIconClickName = () => {
        const current = inputNameRef.current;
        if(current) {
            current.disabled = !current.disabled;
        }
    }

    const onIconClickLogin = () => {
        const current = inputLoginRef.current;
        if (current) {
            current.disabled = !current.disabled;
        }
    }

    const onIconClickPassword = () => {
        const current = inputPasswordRef.current;
        if (current) {
            current.disabled = !current.disabled
        }
    }

    const saveHandled = (e: FormEvent) => {
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
        <div className='mt-20'>
            <NavProfile />
            <p className={`${styles.description} text text_type_main-default text_color_inactive mt-20`}>
                В этом разделе вы можете изменить свои персональные данные
            </p>
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
  );
}

export default Profile;
