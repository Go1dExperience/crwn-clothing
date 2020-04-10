import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, ...rest }) {
  return (
    <button
      className={`${rest.isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default CustomButton;
