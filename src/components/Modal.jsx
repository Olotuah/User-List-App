import React from 'react';
import { motion } from 'framer-motion'; // For smooth animation

const Modal = ({ user, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
      >
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name}</p>
        <button onClick={closeModal}>Close</button>
      </motion.div>
    </div>
  );
};

export default Modal;


 