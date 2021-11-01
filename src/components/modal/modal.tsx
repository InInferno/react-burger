import React, { useEffect } from 'react';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from '../modal-overlay/modal-overlay'
import { IModal } from '../../utils/types';

const Modal: React.FC<IModal> = ({children, closeModal}) => {
  useEffect(() => {
    document.addEventListener('keydown', escButtonHandler)
    return () => {
      document.removeEventListener('keydown', escButtonHandler)
    }
  })

  const escButtonHandler = (e: KeyboardEvent) => {
    e.preventDefault();
    if(e.key === 'Escape') {
      closeModal();
    }
  }

  return (
    <>
      <ModalOverlay closeModal={closeModal}/>
      <div className={styles.modal}>
          <div className={styles.icon} onClick={closeModal}>
              <CloseIcon type="primary"/>
          </div>
          {children}
      </div>
    </>
  )
}

export default Modal;
