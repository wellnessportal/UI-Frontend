import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Yoga.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { currentUser } from "../../../Components/Log/LogIn";
import swal from 'sweetalert';
import ButtonElement from "./ButtonElement";

//const apiUrl = `http://localhost:8080/api/v1/events/all`
const apiUrl = `http://localhost:8080/api/v1/events/type/yoga`
const Yoga = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setPost(response.data);
    })
  }, [setPost]);


  // useEffect(() => {
    
  // }, [setBook]);
  // const myYoga = yoga.map((yoga) => (
    const myYoga = post.map((post) => (
    <>
      <Card className="yoga">
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
            Date:{post.date}
            <br></br>
            Time:{post.time}
          </Card.Text>
          <ButtonElement onClick="onClick" id={post.id}></ButtonElement>
          {/* <Button variant="primary" onClick = {() => handleClick(post.id)}>Book Now</Button> */}
        </Card.Body>
      </Card>
      {/* {changedValue()} */}
    </>
  ));
  return (
    <>
      <div className="text">
        <div>
          <h5>
            <i>
            "Yoga happens beyond the mat, Anything you do with attention to how you feel is doing Yoga"
            </i>
          </h5>
        </div>
        <h3>Book Your Yoga Event</h3>
      </div>
      {myYoga}
    </>
  );
};

export default Yoga;

