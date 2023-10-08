import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './../Modal.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p className='modaltext'>This is the modal content. Click 'x' or outside to close.</p>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;