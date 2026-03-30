import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, title, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };