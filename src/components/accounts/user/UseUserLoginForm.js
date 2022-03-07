import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseUserLoginForm = (callback, validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const config = {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // };
    // axios.post("http://127.0.0.1:8000/api/register/", values, config);
    // localStorage.setItem("userInfo", JSON.stringify(values));

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, handleSubmit, values, errors };
};
export default UseUserLoginForm;
