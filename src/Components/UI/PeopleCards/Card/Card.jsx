import React, { useState } from "react";
import { AiFillInstagram, AiFillLinkedin, TiTree } from "react-icons/all";
import { motion } from "framer-motion";
import "./Card.css";

const Card = ({item}) => {
  const [toggle, settoggle] = useState("info");
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <motion.div
      className="card"
      onClick={() => {
        if (toggle === "info") {
          settoggle("up info");
        } else {
          settoggle("info");
        }
      }}
      initial={{ x: "-10vh" }}
      animate={{ x: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={spring}
    >
      <img src={`https://picsum.photos/40${item}/400`} alt="" loading="lazy" />
      <div className={toggle}>
        Click Me!
        <div className="card-body">
          <AiFillInstagram
            onClick={() => {
              window.open(
                "https://www.instagram.com/im.jack.skellington/",
                "_blank"
              );
            }}
          />
          <AiFillLinkedin
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/dipam-poudel/",
                "_blank"
              );
            }}
          />
          <TiTree
            onClick={() => {
              window.open("https://linktr.ee/LeakyBucket", "_blank");
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
