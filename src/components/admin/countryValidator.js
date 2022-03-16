const ValidateCountry = (values) => {
  let errors = {};

  if (!values.country_name) {
    errors.country_name = "Country Name required";
  }
  return errors;
};
export default ValidateCountry;
