const ValidateCountryAndState = (values) => {
  let errors = {};

  if (!values.country_name) {
    errors.country_name = "Country Name required";
  }

  if (!values.state_name) {
    errors.state_name = "State Name required";
  }
  return errors;
};
export default ValidateCountryAndState;
