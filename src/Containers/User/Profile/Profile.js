import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import arrow from "../../../images/arrow.png";

import { currentUserImage,currentUser,currentUserName } from "../../../Components/Log/LogIn";

const Profile = () => {
    const [rating, setrating] = useState();
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/v1/users/rating/${currentUser}`).then((response)=>{
            setrating(response.data);
        })
    },[]);
    console.log("rating response is "+rating);
    return(
        <>
        <h1 className="text-styling">Welcome {currentUserName}</h1>
        <div className = "center">
            <div className="div-items">
                <img className = "profile" src={currentUserImage} alt="User image" referrerpolicy="no-referrer"/>
                <img src={arrow} alt="arrow image"/>
                <div className="rating-circle">
                    <h1>{rating}%</h1>
                </div>
            </div>
        </div>
        <h2 className="text-align">You are {rating}% close to absolute wellbeing!</h2>
        <p className="para-style">Exciting rewards awaits you! But first, let's boost up your rating.</p>
    </>
    );
}
export default Profile;
