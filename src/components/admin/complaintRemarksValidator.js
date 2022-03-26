const ComplaintRemarksValidator = (values) => {
  let errors = {};
  if (!values.complaint_status) {
    errors.complaint_status = "Complaint Status Field Is Required";
  }
  if (!values.remarks) {
    errors.remarks = "Remarks Fields Is Required";
  }
  return errors;
};
export default ComplaintRemarksValidator;
