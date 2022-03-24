const ValidateProfileForm = (values) => {
  let errors = {};

  if (!values.contact_no) {
    errors.contact_no = "Contact number field required";
  }
  if (!values.address) {
    errors.address = "Address field required";
  }
  if (!values.pincode) {
    errors.pincode = "Pincode field required";
  }
  if (!values.gender) {
    errors.gender = "Gender field required";
  }
  if (!values.country) {
    errors.country = "Country field required";
  }
  if (!values.state) {
    errors.state = "State field required";
  }
  return errors;
};
export default ValidateProfileForm;
