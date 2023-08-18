import React from "react";
import "./index.css";
import ReactDom from "react-dom";

export default function Modal({ children, setShowModal,danger =false}) {
  let className = danger ?  "border-red" : "border-green";
  return ReactDom.createPortal(
    <div className="modal-component">
      <div className="modal-backdrop">
        {/* IN line css */}
        {/* dynamic class name */}
        <div className={`modal ${className}`} >
          {children}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
