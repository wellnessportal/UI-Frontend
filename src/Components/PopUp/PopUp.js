import React from "react";
import Modal from "react-bootstrap/Modal";
import LogIn from "../Log/LogIn";
import "./PopUp.css";

function PopUp(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>LOGIN</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="auth">
            <LogIn handleClose={props.handleClose} changedLogging={props.changedLogging} setFlagAdmin={props.setFlagAdmin}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;
