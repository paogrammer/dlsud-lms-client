// components/Modal.js

import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element of your app

const CustomModal = ({ isOpen, onRequestClose, result }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Test Result"
    >
      <h2>Test Result</h2>
      <p>{result ? 'Success!' : 'Failure!'}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CustomModal;
