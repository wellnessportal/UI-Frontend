import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Meditation.css";
import Card from "react-bootstrap/Card";
import ButtonElement from "../Yoga/ButtonElement";
import ButtonAvailable from "../Yoga/ButtonAvailable";

const apiUrl = `http://localhost:8080/api/v1/events/type/meditation`
const Meditation = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setPost(response.data);
    })
  }, [setPost]);
  // const myYoga = yoga.map((yoga) => (
    const myMedi = post.map((post) => (
    <>
      <Card className="medi">
        <card-img>
          <Card.Img variant="top" src={post.image_link} />
        </card-img>
        <Card.Body>
          <Card.Title>
            <h4>{post.name}</h4>
          </Card.Title>
          <Card.Text>
            <b>Description: </b>
            {post.desc}
          </Card.Text>
          <Card.Text>
            <b>Bookings Available: </b>
            {post.capacity}
            <br></br>
            Date: {post.date}
            <br></br>
            Time: {post.time} 
            </Card.Text>
          <ButtonElement onClick="onClick" id={post.id}></ButtonElement>
          <ButtonAvailable onClick="onClick" id={post.id}></ButtonAvailable>
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
        <h3>Book Your Meditation Event</h3>
      </div>
      {myMedi}
    </>
  );
};

export default Meditation;
