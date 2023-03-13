import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "./Addevent.css";
import {useState, useEffect} from "react"
import axios from "axios";
import swal from "sweetalert";

const apiUrl = `http://localhost:8080/api/v1/events/all`
const Removeevent = () => {
const [postAllEvents, setPostAllEvents] = useState([]);
useEffect(() => {
   axios.get(apiUrl).then((response) => {
     setPostAllEvents(response.data);
   })
 }, [setPostAllEvents]);

  function deleteEvent(id) {
    console.log(id);
    axios.delete(`http://localhost:8080/api/v1/event/${id}`).then(() => {
      console.log("post deleted!");
      const posts = postAllEvents.filter(item => item.id!== id);
      setPostAllEvents(posts);
      
    })
    swal({
      title: `Hello Admin !!`,
      text: "You have successfully removed an event!",

      icon: "success",
      buttons:{
        Ok: {text: "Great !"}
      }
    })
  }
      const allEvents = postAllEvents.map((event) => (
        <>
        <Container className="cont">
        <Row>
          <Col>{event.name}- {event.type} </Col>
          <Col>{event.instructor}</Col>
          <Col>{event.desc}</Col>
          <Col>{event.date}/{event.time}</Col>
          <Col>
            {" "}
            <Button type="submit" onClick = {() => deleteEvent(event.id)}>REMOVE EVENT</Button>
          </Col>
        </Row>
      </Container>
      </>
      ));
        return (
          <>
            <div className="header">
              <Link className="l1" to="/admin">
                Add Events
              </Link>
              <Link className="l1" to="/removeevent">
                Remove Events
              </Link>
            </div>
        {allEvents}
      </>
  );
};
export default Removeevent;

