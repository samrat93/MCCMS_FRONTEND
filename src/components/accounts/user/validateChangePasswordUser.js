const ValidateChangePasswordUser = (values) => {
  let errors = {};

  if (!values.new_password) {
    errors.new_password = "New Password Field Required";
  }
  if (!values.conf_password) {
    errors.conf_password = "Confirm password field is required";
  } else if (values.new_password !== values.conf_password) {
    errors.conf_password = "New password and Confirm password doesn't match";
  }
  if (!values.old_password) {
    errors.old_password = "Old Password field is required";
  }
  return errors;
};
export default ValidateChangePasswordUser;
