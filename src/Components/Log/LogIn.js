import React, { useEffect,useState } from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../utils/refreshToken";
import { gapi } from "gapi-script";
import "./LogIn.css";
import GoogleLogo from "../../Logos/GoogleLogo.png";

import swal from 'sweetalert';
import { useHistory } from "react-router-dom";


const clientId =
  "383065311131-hb1rcpo5r29dotjfn7t89arccfh0141t.apps.googleusercontent.com";
let currentUser="";
let currentUserName="";

function Login(props) {
  const adminEmail = "itspooja1607@gmail.com";
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);


  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    console.log("Login Success: currentUser:", res.profileObj.email);
    currentUser = res.profileObj.email;
    currentUserName = res.profileObj.name;

    if(adminEmail === res.profileObj.email){
      props.setFlagAdmin(true);
    }


    refreshTokenSetup(res);
    props.handleClose();
    props.changedLogging();
    swal({
      title: `Hello ${currentUserName} !!`,
      text: "You have successfully logged in!",

      icon: "success",
      buttons:{
        Ok: {text: "Great !"}
      }
    })
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    
  };

  return (
    <div className="login">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <img src={GoogleLogo} className="icon"></img>
            <span className="buttonText">LogIn with Google</span>
          </button>
        )}
      />
    </div>
  );
}

export default Login;
export {currentUser};
export{currentUserName};
