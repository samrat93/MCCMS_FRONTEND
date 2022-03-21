const ValidateComplaintCategory = (values) => {
  let errors = {};

  if (!values.category_name) {
    errors.category_name = "Complaint Category is required";
  }
  return errors;
};
export default ValidateComplaintCategory;
