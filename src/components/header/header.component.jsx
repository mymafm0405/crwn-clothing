import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to={"/"}>
        <Logo />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to={"/shop"}>
        SHOP
      </Link>
      <Link className="option" to={"/contact"}>
        CONTACT
      </Link>
      <Link className="option" to={"/signin"}>
        SignIn
      </Link>
    </div>
  </div>
);

export default Header;
