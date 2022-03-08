const ValidateLoginForm = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default ValidateLoginForm;
