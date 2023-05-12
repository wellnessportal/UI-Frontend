import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import arrow from "../../../images/arrow.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { currentUserImage,currentUser,currentUserName } from "../../../Components/Log/LogIn";
import { Container } from "react-bootstrap";

const Profile = () => {
    const [rating, setrating] = useState();
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/v1/users/rating/${currentUser}`).then((response)=>{
            setrating(response.data);
        })
    },[]);
    console.log("rating response is "+rating);

    const [rewards, setRewards] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/v1/userrewards/${currentUser}`).then((response)=>{
            setRewards(response.data);
        })
    },[setRewards]);
    console.log(rewards);

    const allRewards = rewards.map((rew)=>
    <>
    <Container className="cont">
        <Row>
            <Col>{rew.reward}</Col>
        </Row>
    </Container>
    </>
    )

    return(
        <>
        <h1 className="text-styling">Welcome {currentUserName}</h1>
        <div className = "center">
            <div className="div-items">
                <img className = "profile" src={currentUserImage} alt="User image" referrerPolicy="no-referrer"/>
                <img src={arrow} alt="arrow image"/>
                <div className="rating-circle">
                    <h1>{rating}%</h1>
                </div>
            </div>
        </div>
        <h2 className="text-align">You are {rating}% close to absolute wellbeing!</h2>
        <p className="para-style">Exciting rewards awaits you! But first, let's boost up your rating.</p>
        <h1 className="text-align">View your rewards here</h1>
        {allRewards}
    </>
    );
}
export default Profile;
