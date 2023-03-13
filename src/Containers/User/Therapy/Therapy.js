import React from "react";
import "./Therapy.css";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonElement from "../Yoga/ButtonElement";

const apiUrl = `http://localhost:8080/api/v1/events/type/therapy`

const Ther = () => {
  const [therapy, setTherapy] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setTherapy(response.data);
    })
  }, [setTherapy]);
  
  const mytherapy = therapy.map((therapy) => (
    <>
       <Card className="therapy"> 
         <card-img>
          <Card.Img variant="top" src={therapy.image_link} />
        </card-img>  
        <Card.Body>
          <Card.Title>
            <h4>{therapy.title}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description:</b>
            {therapy.desc}
          </Card.Text>
          <Card.Text>
            <b>Bookings Available:</b>
            {therapy.Book_Avai}
            <br></br>
            Date:{therapy.date}
            <br></br>
            Time:{therapy.time}
          </Card.Text>
          {/* <Button variant="primary" onClick={()=>alert("You have booked the event Successfully!")}>Book Now</Button> */}
          <ButtonElement onClick="onClick" id={therapy.id}></ButtonElement>
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
              "Mental strength is not the ability to stay out of the dark, It's
              the ability to sit present in the darkness knowing that the light
              will shine again"
            </i>
          </h5>
        </div>
        <h3>Book Your therapy Event</h3>
      </div>
      {mytherapy}
    </>
  );
};

export default Ther;
