import React, { useEffect } from 'react';
import styles from './modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from '../modal-overlay/modal-overlay'

export default function Modal({children, closeModal}) {

  useEffect(() => {
    document.addEventListener('keydown', escButtonHandler)
    return () => {
      document.removeEventListener('keydown', escButtonHandler)
    }
  })

  const escButtonHandler = (e) => {
    if(e.key === 'Escape') {
      closeModal()
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

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
};
