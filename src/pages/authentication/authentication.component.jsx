import React from "react";
//--Import Components----------------
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./authentication.styles.scss";

function Authentication() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
}

export default Authentication;
