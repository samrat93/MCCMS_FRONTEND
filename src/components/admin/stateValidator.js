const ValidateState = (values) => {
  let errors = {};

  if (!values.state_name) {
    errors.state_name = "State Name required";
  }
  return errors;
};
export default ValidateState;
