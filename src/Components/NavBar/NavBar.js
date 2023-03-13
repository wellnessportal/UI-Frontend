import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import PopUp from "../PopUp/PopUp";
import { Link } from "react-router-dom";
import LogOut from "../Log/LogOut";
import { currentUserName } from "../Log/LogIn";

const NavBar = (props) => {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const changedLogging = props.changedLogging;
  const [flagAdmin, setFlagAdmin] = useState(false);

  return !props.isLogged ? (
    <Nav>
      <logo>
        <Link to="/home">
        <img src={process.env.PUBLIC_URL + "/logo.png"} />
        </Link>
      </logo>
      <ul class="topnav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <button onClick={handleShow}>Login</button>
          <PopUp
            show={show}
            handleClose={handleClose}
            changedLogging={changedLogging}
            setFlagAdmin={setFlagAdmin}
          />
        </li>
      </ul>
    </Nav>
  ) : (
    <Nav>
      <logo>
      <Link to="/home">
        <img src={process.env.PUBLIC_URL + "/logo.png"} />
        </Link>
      </logo>
      <ul class="topnav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        {flagAdmin ? (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        ) : <></>}
        <li class="hiUser">
          Hi {currentUserName}
        </li>
        <li>
          <LogOut changedLogging={changedLogging} />
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;


