import React from "react";
import yoda from "../images/yoda.jpg";

const Header = props => {
  return (
    <header className="header">
      <img className="header_img" src={yoda} alt="yoda" />
      <h1 className="header_h1">Yoda's Garage</h1>
    </header>
  );
};

export default Header;
