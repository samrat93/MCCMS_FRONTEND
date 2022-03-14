const ValidateUserVerifyForm = (values) => {
  let errors = {};

  if (values.is_active === false) {
    errors.is_active = "You Need to Check The User To Verify";
  }

  console.log(values);
  return errors;
};

export default ValidateUserVerifyForm;
