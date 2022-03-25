import React, { useState } from "react";
import User_Signup from "./user_signup";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout/Layout";

const SignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <Layout>
        <div>
          {!isSubmitted ? (
            <User_Signup submitForm={submitForm} />
          ) : (
            navigate("/userlogin")
          )}
        </div>
      </Layout>
    </>
  );
};
export default SignupForm;
