import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";
import { useEffect, useState } from "react";
import axios from "axios";


const apiUrl = `http://localhost:8080/api/v1/upcomingevents`



const Header = () => {
  const [post, setPost] = useState([]);
useEffect(() => {
  axios.get(apiUrl).then((response) => {
    setPost(response.data);
  })
  }, [setPost]);

  const UpcomingEvents = post.map((event)=>(
    <Carousel.Item>
        <img src={event.image_link} alt="Could not load image"/>
        <Carousel.Caption>
        <h3>{event.name}</h3>
        <h5>{event.date}</h5>
        <h5>{event.time}</h5>
        <p>{event.desc}</p>
        </Carousel.Caption>
        </Carousel.Item>
  ))
  return (
    <Carousel className="header">{UpcomingEvents}</Carousel>
  );
  
};

export default Header;