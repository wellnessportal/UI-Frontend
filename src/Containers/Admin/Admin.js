import React from "react";
import { useParams } from "react-router-dom";
import Addevent from "./Addevent";
import Removeevent from "./Removeevent";
import Home from "../User/Home/home";

const Admin = (props) => {
  const { type } = useParams();
  return (
    <>
      {type === "addevent" && <Addevent />}
      {type === "removeevent" && <Removeevent />}
    </>
  );
};

export default Admin;
