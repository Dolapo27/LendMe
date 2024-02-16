// ConfirmationModal.js

import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ isOpen, onClose, onConfirm,success, loanAmount, loanPurpose }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
      className="modal-container"
    >
      {success ? (
        <div className='modal-content'>
          <h2 className='modal-header'>Success!</h2>
          <p className='modal-body'> You have successfully invested the {loanAmount} into {loanPurpose} loan.</p>
          <button className='modal-button'  onClick={onClose}>Close</button>
        </div>
      ) 
      :
      (
      <div className='modal-content'>  
        <h2 className='modal-header'>Confirmation</h2>
        <p className='modal-body'>You are about to invest in a sum of ${loanAmount}. Are you sure you want to continue?</p>
        <button className='modal-button' onClick={onClose}>Cancel</button>
        <button className='modal-button' onClick={onConfirm}>Continue</button>
      </div>
        )}
    </Modal>
  );
};

export default ConfirmationModal;
