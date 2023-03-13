import { useState } from "react";
import Button from "react-bootstrap/Button";
import { currentUser } from "../../../Components/Log/LogIn";
import axios from "axios";
import swal from 'sweetalert';

const ButtonElement = (props) => {
  const [book, setBook] = useState(false);
  //so that for events that are already booked will have greyed buttons
  axios.get(`http://localhost:8080/api/v1/user/${currentUser}/event/${props.id}`).then((response) => {
    setBook(response.data);
    })
  
  function handleClick(){
    swal({
      title: "Event Booked!!!",
      text: `You have successfully reserved your position for the event.
  Check your Home Page to see your Booked Events :)`,
icon: "success"
    })
    console.log(props.id);
      axios.put(`http://localhost:8080/api/v1/users/${currentUser}`+`/bookevent/${props.id}`).then(() => {
        setBook(true);
        console.log("event booked!");
        console.log(book);
      })
      
      console.log("value of book after booking",book);
  }
  return (
    <Button onClick={handleClick} disabled={book}>{book?"Booked": "Book Now"}</Button>
  );
}
export default ButtonElement;