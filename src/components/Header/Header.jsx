import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo_3.png";
import Dropdown from "react-bootstrap/Dropdown";
function Header() {
  return (
    <div id="headerContainer">
      <div id="logoCont">
        <a href='/'><img src={Logo} alt="logo" /></a>
      </div>
      <div id="headerContent">
        {/* <p id="lang">English</p> */}
        <Dropdown>
          <Dropdown.Toggle variant="" style={{backgroundImage:'linear-gradient(to bottom right, #192449, #34447C)',color:'white'}} id="dropdown-basic">
            Language
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
