import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';
import { IModalOverlay } from '../../utils/types';

export const ModalOverlay: React.FC<IModalOverlay> = ({closeModal}) => <div className={styles.overlay} onClick={closeModal}></div>

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
};
