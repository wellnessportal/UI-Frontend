import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Mindfulness.css";

import Card from "react-bootstrap/Card";
import ButtonElement from "../Yoga/ButtonElement";


const apiUrl = `http://localhost:8080/api/v1/events/type/mindfulness`
const Mindfulness = () => {

  const [mind, setmind] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setmind(response.data);
    })
  }, [setmind]);

  const myMind = mind.map((mind) => (
    <>
      <Card className="mind">
        <card-img>
          <Card.Img variant="top" src={mind.image_link} />
        </card-img>
        <Card.Body>
          <Card.Title>
            <h4>{mind.name}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description:</b>
            {mind.desc}
          </Card.Text>
          <Card.Text>
            <b>Bookings Available:</b>
            {mind.capacity}
            <br></br>
            Date:{mind.date}
            <br></br>
            Time:{mind.time}
          </Card.Text>
          <ButtonElement onClick="onClick" id={mind.id}></ButtonElement>
          {/* <Button variant="primary" onClick={()=>alert("You have booked the event Successfully!")}>Book Now</Button> */}
        </Card.Body>
      </Card>
    </>
  ));
  return (
    <>
      <div className="text">
        <div>
          <h5>
            <i>
              "The mind is definitely something that can be transformed, And
              meditation is a means to transform it"
            </i>
          </h5>
        </div>
        <h3>Book Your Mindfulness Event</h3>
      </div>

      {myMind}
    </>
  );
  };

export default Mindfulness;
