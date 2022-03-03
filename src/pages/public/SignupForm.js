import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User_Signup from "./user_signup";
const SignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div>
        {!isSubmitted ? (
          <User_Signup submitForm={submitForm} />
        ) : (
          navigate("/userlogin")
        )}
      </div>
    </>
  );
};
export default SignupForm;
