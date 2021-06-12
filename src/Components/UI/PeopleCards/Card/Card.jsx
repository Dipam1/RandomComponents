import React, { useState } from "react";
import image from "../../../../assets/image.png";
import { AiFillInstagram, AiFillLinkedin, TiTree } from "react-icons/all";
import "./Card.css";

const Card = () => {
  const [toggle, settoggle] = useState("info");

  return (
    <div
      className="card"
      onClick={() => {
        if (toggle === "info") {
          settoggle("up info");
        } else {
          settoggle("info");
        }
      }}
    >
      <img src={image} alt="" loading="lazy" />
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
    </div>
  );
};

export default Card;
