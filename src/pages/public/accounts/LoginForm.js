import React, { useState } from "react";
import User_login from "./user_login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitLoginForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div>
        {!isSubmitted ? (
          <User_login submitLoginForm={submitLoginForm} />
        ) : (
          navigate("/usersignup")
        )}
      </div>
    </>
  );
};
export default LoginForm;
