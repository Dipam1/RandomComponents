import React from "react";
import "./Modal.css";

const Modal = ({ url, show, setShow }) => {
  return (
    <div
      className={show ? `gallary-modal` : `display-none`}
      onClick={(e) => {
        if (e.target.classList.contains("gallary-modal")) setShow(false);
      }}
    >
      <img src={url} alt="big-one" />
    </div>
  );
};

export default Modal;
