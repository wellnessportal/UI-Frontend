import { useState } from "react";
import Button from "react-bootstrap/Button";
import { currentUser } from "../../../Components/Log/LogIn";
import axios from "axios";
import swal from 'sweetalert';

const ButtonAvailable = (props) => {
    const [user, setUser] = useState(currentUser);
    console.log(user);
    const [event, setEvent] = useState(props.id);
    const [avail, setAvail] = useState(true);
    const eventid = props.id;
    const apiUrl = `http://localhost:8080/api/v1/waitinglist`;
    
    axios.get(`http://localhost:8080/api/v1/events/${event}`).then((response)=>{
        setAvail(response.data);
    })

    const [size, setSize] = useState();
    axios.get(apiUrl).then((response)=>{
      setSize(response.data+1);
    })


    function handleClick(){
      console.log(props.id);
      console.log("event id - "+ eventid);
      console.log("user email - "+currentUser);
      console.log("size of wt - "+size);

        axios.post(apiUrl,{position: size,email_id:currentUser,event_id:eventid}).then((response) => {
                swal({
                    title: "Waiting list",
                    text: response.data,
              icon: "info"
                  })
            }
        )
    }
    return (
        <>
      <Button onClick={handleClick} disabled ={avail}>add to waiting list</Button>

      </>
    );
  }
  export default ButtonAvailable;