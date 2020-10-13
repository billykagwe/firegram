import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = e => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
      className="backdrop"
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        alt="enlarged pic"
        src={selectedImage}
      />
    </motion.div>
  );
};

export default Modal;
