import React from "react";
import classes from './Modal.module.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={classes.modalBackdrop} onClick={onClose}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className={classes.closeButton}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
