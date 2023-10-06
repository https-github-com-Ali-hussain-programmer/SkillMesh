import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center h-[100vh] z-50 ">
      <div
        className="fixed inset-0 bg-black opacity-90 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="bg-green-700  rounded-lg z-10 transform transition-transform duration-300">
        {children}
      </div>
    </div>
  );
};

export default Modal;
