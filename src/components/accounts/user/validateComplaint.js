const ValidateComplaintForm = (values) => {
  let errors = {};

  if (!values.complaint_subject) {
    errors.complaint_subject = "Complaint subject required";
  }
  if (!values.complaint_category) {
    errors.complaint_category_id = "Complaint category field required";
  }
  if (!values.complaint_sub_category) {
    errors.complaint_sub_category_id = "Complaint sub-category field required";
  }
  if (!values.complaint_details) {
    errors.complaint_details = "Complaint details field required";
  }
  if (!values.complaint_subject) {
    errors.complaint_subject = "Complaint subject field required";
  }
  if (!values.state) {
    errors.state_id = "State field required";
  }
  return errors;
};
export default ValidateComplaintForm;
