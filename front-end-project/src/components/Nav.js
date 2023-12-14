import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <img src={logo} alt="Little lemon logo" />
      </div>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/menu"> Menu </NavLink>
        <NavLink to="/reservations"> Reservation </NavLink>
        <NavLink to="/login"> Login </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
