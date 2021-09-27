import React, { useEffect } from 'react';
import styles from './modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from '../modal-overlay/modal-overlay'
import { deleteCartModal, deleteOrderModal } from '../../services/actions';
import { useDispatch } from 'react-redux';

export default function Modal({children}) {

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', escButtonHandler)
    return () => {
      document.removeEventListener('keydown', escButtonHandler)
    }
  })

  const closeModal = () => {
    dispatch(deleteCartModal());
    dispatch(deleteOrderModal());
  }

  const escButtonHandler = (e) => {
    e.preventDefault();
    if(e.key === 'Escape') {
      dispatch(deleteCartModal());
      dispatch(deleteOrderModal());
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
};
