import React from 'react';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'

export default function Modal(props) {
  return (
    <>
      <ModalOverlay />
      <section className={styles.modal}>
          <div className={styles.icon}>
              <CloseIcon type="primary"/>
          </div>
          {props.children}
      </section>
    </>
  )
}