import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import "./Addevent.css";
import {useState, useEffect} from "react"
import axios from "axios";
import swal from "sweetalert";

const ViewUsers = (props) => {
  const [event, setEvent] = useState(props.id);
   const [userlist, setUserList] = useState([]);

const apiUrl = `http://localhost:8080/api/v1/event/${event}`+`/bookedusers`;

   function handleClick(){
    axios.get(apiUrl).then((response)=>{
      console.log(response.data);
      swal({
        title: "Booked Users",
        text: response.data,
  icon: "info"
      })
    })  
   }
   return (
    <>
  <Button onClick={handleClick} >View Booked Users</Button>
  </>
);
 }
 
export default ViewUsers;