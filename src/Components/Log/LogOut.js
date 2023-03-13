import React from "react";
import { GoogleLogout } from "react-google-login";
import "./LogOut.css";
import swal from "sweetalert";

const clientId =
  "383065311131-hb1rcpo5r29dotjfn7t89arccfh0141t.apps.googleusercontent.com";

function Logout(props) {
  const onSuccess = () => {
    console.log("Logout made successfully");
    
    props.changedLogging();
    swal({

      title: "Log Out",
      text: "You have successfully logged out of WellnessPortal",
      icon: "info",
      buttons:{
        Ok: {text: "See You Next Time !"}}
    }).then(function(){
      window.location.replace("http://localhost:3000");
    })
  };

  return (
    <div className="logout">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Log Out
          </button>
        )}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;


