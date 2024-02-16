import React from 'react';
import Modal from 'react-modal';

const ErrorModal = ({ isOpen, message, onClose }) => {
  return (

    <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className='modal-content'> {/* Add a div for the modal container */}
            <h2>Error!</h2>
            <p className=''>{message}</p>
            <button className='modal-close' onClick={onClose}>Close</button>
        </div>
  </Modal>
  
  );
};

export default ErrorModal;
