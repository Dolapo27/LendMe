// ConfirmationModal.js

import React from 'react';
import Modal from 'react-modal';

    const SuccessModal = ({ isOpen, message, onClose }) => {
        return (
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <h2>Success</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </Modal>
            





        //   <div className="modal-container">
        //     <div className="modal-content success">
        //       <span className="modal-close" onClick={onClose}>&times;</span>
        //       <div className="modal-header">Success</div>
        //       <div className="modal-body">
        //         {message}
        //       </div>
        //     </div>
        //   </div>
        );
      };



export default SuccessModal;
