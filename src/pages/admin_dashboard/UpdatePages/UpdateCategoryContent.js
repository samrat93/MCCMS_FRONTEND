import classes from "../../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../../css/account_css/UserAccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import msg from "../../../css/msg/msg.module.css";
import { UpdateCategoryAction } from "../../../redux/actions/adminActions/ComplaintCategoryAction";
import validate from "../../../components/admin/complaintCategoryValidator";
import swal from "sweetalert";

const UpdateCategoryContent = ({ categoryData }) => {
  const dispatch = useDispatch();
  const UpdatecatR = useSelector((state) => state.UpdatecatR);
  const { cat, error } = UpdatecatR;

  const [values, setValues] = useState({
    category_name: "",
    category_desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    setValues({
      category_name: categoryData.category_name,
      category_desc: categoryData.category_desc,
    });
  }, []);

  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const mess = validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      const cid = categoryData.id;
      dispatch(UpdateCategoryAction({ values, cid: cid }));
      swal("Category Updated Successfully", " ", "success");
    }
  };

  return (
    <div>
      <div className={classes.Admin_panel_content_Body}>
        <div className={formclasses.container}>
          <div className={formclasses.title}>Update Complaint Category</div>
          <div className={formclasses.content}>
            <form onSubmit={submitHandler}>
              <div className={formclasses["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={formclasses["input-box-login"]}>
                  <span className={formclasses.signinspan}>
                    Complaint Category Name
                  </span>
                  <input
                    type="text"
                    name="category_name"
                    value={values.category_name}
                    onChange={handleChange}
                    required
                  />
                  {message.category_name && (
                    <p className={msg.error}>{message.category_name}</p>
                  )}
                  {/* {error && error.complaint_exist && (
                    <p className={msg.error}>
                      {"Complain Category with this name is already exists."}
                    </p>
                  )} */}
                </div>
              </div>
              <div className={formclasses["input-textarea"]}>
                <span className={formclasses.signinspan}>
                  Complaint Category Desctiption
                </span>
                <textarea
                  className={formclasses.textarea}
                  name="category_desc"
                  value={values.category_desc}
                  onChange={handleChange}
                />
              </div>
              {error && <p className={msg.error}>{error}</p>}

              <div className={formclasses.button}>
                <input type="submit" value="Update Category" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateCategoryContent;
