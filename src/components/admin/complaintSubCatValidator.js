const ValidateComplaintSubCategory = (values) => {
  let errors = {};

  if (!values.sub_category_name) {
    errors.sub_category_name = "Sub Category is required";
  }
  return errors;
};
export default ValidateComplaintSubCategory;
