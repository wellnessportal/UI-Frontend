import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import event from "./EventList";
import "./Events.css"
import PopUp from "../PopUp/PopUp";

const Events = (props) => {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const changedLogging = props.changedLogging;
  const [flagAdmin, setFlagAdmin] = useState(false);
  const eventList = event.map((event) => (
    event.position === "left" ?
    (<Card className="cards">
      <card-img>
      <Card.Img variant="top" src={event.photo} />  
      </card-img>
      <Card.Body>
        <Card.Title><h3>{event.title}</h3></Card.Title>
        <Card.Text>
          {event.desc}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Book Event</Button>
        <PopUp
            show={show}
            handleClose={handleClose}
            changedLogging={changedLogging}
            setFlagAdmin={setFlagAdmin}
          />
      </Card.Body>
    </Card>) : (
      <Card className="cards">
        <Card.Body>
        <Card.Title><h3>{event.title}</h3></Card.Title>
        <Card.Text>
          {event.desc}
        </Card.Text>
        <Button variant="primary"onClick={handleShow}>Book Event</Button>
        <PopUp
            show={show}
            handleClose={handleClose}
            changedLogging={changedLogging}
            setFlagAdmin={setFlagAdmin}
          />
      </Card.Body>
      <card-img>
      <Card.Img variant="top" src={event.photo} />  
      </card-img>
    </Card>
    )
  ));
  return <>
  {eventList}
  </>;
};

export default Events;