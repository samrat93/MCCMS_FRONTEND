import classes from "../../../css/public_css/publicForms.module.css";
import classesDashboard from "../../../css/public_css/publicDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import msg from "../../../css/msg/msg.module.css";
import Validator from "../../../components/accounts/user/FeedbackValidator";
import { registerFeedbackAction } from "../../../redux/actions/userActions/FeedbackAction";

const PublicFeedBack = () => {
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const c_id = userInfo.user_Info.id;
  const AddFeedbackR = useSelector((state) => state.AddFeedbackR);
  const { loading, error, success } = AddFeedbackR;

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const mess = Validator(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(registerFeedbackAction(values));
      setValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <div className={classesDashboard["home-content"]}>
        <div className={classesDashboard["sales-boxes"]}>
          <div className={classesDashboard["recent-sales"]}>
            <div className={classes.ContentBody}>
              <div className={classes.container}>
                <div className={classes.title}>We Value Your Feedback</div>
                <div className={classes.content}>
                  <form onSubmit={submitHandler}>
                    <div className={classes["user-details"]}>
                      {/* {loading && <p>Loading...</p>} */}

                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Name</span>
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                        {message.name && (
                          <p className={msg.error}>{message.name}</p>
                        )}
                        <input
                          type="hidden"
                          name="user_id"
                          // value={c_id}
                          // onChange={handleChange}
                        />
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Email</span>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Enter your valid email"
                        />
                        {message.email && (
                          <p className={msg.error}>{message.email}</p>
                        )}
                      </div>
                      <div className={classes["input-box"]}>
                        <span className={classes.signinspan}>Subject</span>
                        <input
                          type="text"
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          placeholder="Enter a complaint subject"
                        />
                        {message.subject && (
                          <p className={msg.error}>{message.subject}</p>
                        )}
                      </div>

                      <div className={classes["input-textarea"]}>
                        <span className={classes.signinspan}>Message</span>
                        <textarea
                          className={classes.textarea}
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                        />
                        {message.message && (
                          <p className={msg.error}>{message.message}</p>
                        )}
                        {error && <p className={msg.error}>{error}</p>}
                        {success && (
                          <p className={msg.success}>
                            {"Thankyou for your feedback."}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={classes.btndiv}>
                      <div className={classes.singleBtnDiv}>
                        <div className={classes.button}>
                          <input type="submit" value="Register Feedback" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublicFeedBack;
