import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  return (
    <div className="main-navbar-container">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="navbar-links">
        <div className="navlink">
          <NavLink to="/cards" activeClassName="selected">
            Cards
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink to="/asd" activeClassName="selected">
            Talk
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink to="/asdsa" activeClassName="selected">
            Hello
          </NavLink>
        </div>
        <div className="navlink">
          <NavLink to="/asdasd" activeClassName="selected">
            Lively
          </NavLink>
        </div>
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
        <div className="navlink">Cards</div>
        <div className="navlink">Talk</div>
        <div className="navlink">Hello</div>
        <div className="navlink">Lively</div>
      </div>
    </div>
  );
};

export default NavBar;
