const FeedbackValidator = (values) => {
  let errors = {};
  if (!values.name) {
    values.name = "Name field required.";
  }

  if (!values.email) {
    errors.email = "Email field is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid.";
  }

  if (!values.subject) {
    errors.subject = "Subject field is required.";
  } else if (values.subject.length < 10) {
    errors.subject = "Subject must be 6 characters or more.";
  }
  if (!values.message) {
    errors.message = "Message field is required.";
  }

  return errors;
};

export default FeedbackValidator;
