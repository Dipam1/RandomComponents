import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const NAVLINKS = () => {
    return (
      <>
        <div className="navlink">
          <NavLink
            to="/cards"
            activeClassName="selected"
            onClick={() => setBurgerClicked(false)}
          >
            Cards
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink
            to="/gallary"
            activeClassName="selected"
            onClick={() => setBurgerClicked(false)}
          >
            Gallary
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink
            to="/asdsa"
            activeClassName="selected"
            onClick={() => setBurgerClicked(false)}
          >
            Hello
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink
            to="/asdasd"
            activeClassName="selected"
            onClick={() => setBurgerClicked(false)}
          >
            Lively
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div className="father">
      <div className="main-navbar-container">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="navbar-links">
          <NAVLINKS />
        </div>
        <div
          className={`${burgerClicked ? "burger cross" : "burger"}`}
          onClick={() => setBurgerClicked(!burgerClicked)}
        >
          <div className="bur"></div>
          <div className="bur"></div>
          <div className="bur"></div>
        </div>
        <div className={burgerClicked ? "clicked" : "none"}>
          <NAVLINKS />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
