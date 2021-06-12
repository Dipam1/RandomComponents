import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/all";
import "./Gallary.css";
import Modal from "./Modal/Modal";

const Gallary = () => {
  const [files, setFiles] = useState([
    "http://picsum.photos/1000",
    "http://picsum.photos/1005",
    "http://picsum.photos/1004",
  ]);
  const [modalUrl, setModalUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const uploadButton = useRef();

  const filesChanged = (event) => {
    const allFiles = event.target.files;
    console.log(allFiles);
    Object.keys(allFiles).forEach(function (key) {
      setFiles([...files, URL.createObjectURL(allFiles[key])]);
    });
    setTimeout(function () {
      window.scroll({ top: document.body.offsetHeight, left: 0 });
    }, 300);
  };

  const modalTime = (file) => {
    setModalUrl(file);
    setShowModal(true);
  };

  return (
    <div className="gallary-container">
      <div className="images">
        {files.map((file, index) => {
          return (
            <div className="image" key={index}>
              <AnimatePresence>
                <motion.img
                  src={file}
                  alt="small-one"
                  initial={{ x: "-20vh", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  layout
                  onClick={() => modalTime(file)}
                />
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <input
        ref={uploadButton}
        type="file"
        id="myFile"
        name="filename"
        onChange={(event) => filesChanged(event)}
        accept="image/*"
        hidden
      />
      <div
        className="file-upload"
        onClick={() => {
          uploadButton.current.click();
        }}
      >
        <AiOutlinePlus size={50} />
      </div>
      <Modal url={modalUrl} show={showModal} setShow={setShowModal} />
    </div>
  );
};

export default Gallary;
