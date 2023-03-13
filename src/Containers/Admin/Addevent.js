import "./Addevent.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";

const addEventUrl = `http://localhost:8080/api/v1/events`;
const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); 
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};
function Addevent() {
  const [event, setEvent] = useState([]);
  const [name, setName] = useState(""); 
  const [capacity,setCapacity]=useState();
  const [instructor,setInstructor]=useState("");
  const [zLink,setZlink]=useState("");
  const [desc,setDesc]=useState("");
  const [date,setDate]=useState("");
  const [time,setTime]=useState("");
  const [type,setType]=useState("");
  const [image_link,setImgLink]=useState("");

  useEffect(() => {
    axios.get(addEventUrl).then((response) => {
      setEvent(response.data);
    });
  }, []);

  function createEvent() {
    axios
      .post(addEventUrl, {
        name,type,zLink,capacity,instructor,desc,date,time, image_link
      })
      .then((response) => {
        setEvent(response.data);
      });
  }
  const handleClick = (e) => {
    e.preventDefault();
    createEvent();
    //for checking
    setDate("");
    setDesc("");
    setName("");
    setZlink("");
    setCapacity("");
    setImgLink("");
    setInstructor("");
    setTime("");
    setType("");
    console.log(name);
    console.log(time);
    console.log(type);
    console.log(instructor);
    console.log(zLink);
    
    swal({
      title: `Hello Admin !!`,
      text: "You have successfully added an event!",

      icon: "success",
      buttons:{
        Ok: {text: "Great !"}
      }
    })
  };
  
  return (
    <>
      <div className="header">
        <Link className="l1" to="/admin/addevent">
          Add Events
        </Link>
        <Link className="l1" to="/admin/removeevent">
          Remove Events
          
        </Link>
      </div>
      <div className="container">
        <Form>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Event Name:
            </Form.Label>
            <Col sm={2}>
              <Form.Control
                type="text"
                placeholder="Event Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Col>
            <Col sm={2}></Col>
            <Form.Label column sm={2}>
              Date:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="date"  min={disablePastDate()}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Event Type:
            </Form.Label>
            <Col sm={2}>
              <Form.Control as="select"  
              onChange={(e) => {
                setType(e.target.value);
              }}
              value={type}>
                <option value="">Not selected</option>
                <option value="yoga">Yoga</option>
                <option value="therapy">Therapy</option>
                <option value="mindfulness">MindFulness</option>
                <option value="fitness">Fitness</option>
                <option value="meditation">Meditation</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Capacity:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="Number" min="0" placeholder="Capacity"
              onChange={(e) => {
                setCapacity(e.target.value);
              } }
              value={capacity}/>
            </Col>
            <Col sm={2}></Col>
            <Form.Label column sm={2}>
              Time:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="time" placeholder="Time" 
                  onChange={(e) => {
                  setTime(e.target.value);
                }}
                value={time}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Instructor:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="text" placeholder="Instructor Name" 
              onChange={(e) => {
                setInstructor(e.target.value);
              }}
              value={instructor}/>
            </Col>
            <Col sm={2}></Col>
            <Form.Label column sm={2}>
              Image Link:
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="text" placeholder="Image Link" 
              onChange={(e) => {
                setImgLink(e.target.value);
              }}
              value={image_link}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-group">
            <Form.Label column sm={2}>
              Zoom Link:
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Zoom Link"
                className="form-control"
                onChange={(e) => {
                  setZlink(e.target.value);
                }}
                value={zLink}
              />
            </Col>
            <Col sm={1}></Col>
            <Form.Label column sm={2}>
              Event Description:
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Event Description"
                className="form-control"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                value={desc}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="btn-deco">
            <Col sm={{ span: 10, offset: 2 }}>
              <button className="btn" onClick={handleClick} >
                ADD EVENT
              </button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Addevent;