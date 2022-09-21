import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui two item menu">
      <NavLink to="/tweets" className="item">
        New Tweets
      </NavLink>
      <NavLink to="/rules" className="item">
        Manage Rules
      </NavLink>
    </div>
  );
};

export default Navbar;