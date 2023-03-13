import React,{useState, useEffect} from "react";
import axios from "axios";
import "./MyEvents.css";
import Card from "react-bootstrap/Card";
import { currentUser } from "../Log/LogIn";
import swal from "sweetalert";

const username =""+ currentUser;
// const url = new URL(`localhost:8080/api/v1/user/?x=${username}/events`);
console.log("checking before fetching1",currentUser);

//url.searchParams.append('x', currentUser);


const Fitness = () => {
  const apiUrl = `http://localhost:8080/api/v1/user/${currentUser}`+`/events`;
  console.log("checking before fetching2",currentUser);
  console.log("apiUrl: ", apiUrl);
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
       setPost(response.data);
       console.log("after fetching",username);
       console.log(response.data);
      // console.log(post.type);
    });
  }, [setPost]);

  function cancelEvent(id,name) {
    // window.location.replace();
    console.log(id);
    axios.delete(`http://localhost:8080/api/v1/user/${currentUser}/event/${id}`).then(() => {
      console.log("event canceled!");

      swal({
        title: "Event Cancelled!",
        text: `Booking for ${name} has been cancelled!`,
        icon: "warning"
      })
      const posts = post.filter(item => item.id!== id);
      setPost(posts);
    })
  }
  const myFit = post.map((post) => (
    <>
      <Card className="fitness">
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
            Date: {post.date}
            {/* <br></br>
            Time: {fit.time} */}
          </Card.Text>
          <button variant="primary" onClick={()=>cancelEvent(post.id,post.name)}>Cancel</button>
        </Card.Body>
      </Card>
    </>
  ));

  //()=>

  return (
    <>
      <div className="text">
        <h2>My Events</h2>
        {/* <h2>{post.type} it's working</h2>
        {console.log(post.data.type)} */}
      </div>
      {myFit}
    </>
  );
};

export default Fitness;
