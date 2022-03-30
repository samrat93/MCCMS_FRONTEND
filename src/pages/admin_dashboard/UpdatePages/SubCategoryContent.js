import classes from "../../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../../css/account_css/UserAccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import msg from "../../../css/msg/msg.module.css";
import Validate from "../../../components/admin/complaintSubCatValidator";
import { UpdateSubCategoryAction } from "../../../redux/actions/adminActions/ComplaintSubCategoryAction";
import swal from "sweetalert";

const UpdateSubCategoryContent = ({ subCatData }) => {
  //   console.log(subCatData);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const UpdateSubCatR = useSelector((state) => state.UpdateSubCatR);
  const { error } = UpdateSubCatR;

  const listComplaintCategoryR = useSelector(
    (state) => state.listComplaintCategoryR
  );
  const { catList } = listComplaintCategoryR;

  const displayCatName = [subCatData].map((obj) => {
    return {
      ...obj,
      category_id: catList?.find((cat) => cat.id === obj.category_id)
        .category_name,
    };
  });
  //   console.log(displayCatName);

  const [values, setValues] = useState({
    category_id: "",
    sub_category_name: "",
    sub_category_desc: "",
  });

  useEffect(() => {
    setValues({
      category_id: subCatData.category_id,
      sub_category_name: subCatData.sub_category_name,
      sub_category_desc: subCatData.sub_category_desc,
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const mess = Validate(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      const id = subCatData.id;
      dispatch(UpdateSubCategoryAction({ values, id: id }));
      swal("Sub Category Updated Successfully", " ", "success");
    }
  };

  return (
    <div>
      <div className={classes.Admin_panel_content_Body}>
        <div className={formclasses.container}>
          <div className={formclasses.title}>Update Sub Category</div>
          <div className={formclasses.content}>
            <form onSubmit={submitHandler}>
              <div className={formclasses["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={formclasses["input-box-login"]}>
                  <span className={formclasses.signinspan}>
                    Select Complaint Category
                  </span>

                  <select
                    name="category_id"
                    onChange={handleChange}
                    className={formclasses.selectValue}
                  >
                    <option>{displayCatName[0].category_id}</option>
                    {catList?.map((cat) => (
                      <option
                        key={cat.id}
                        value={cat.id}
                        onSelect={handleChange}
                      >
                        {cat.category_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={formclasses["user-details"]}>
                {/* {loading && <p>Loading...</p>} */}
                <div className={formclasses["input-box-login"]}>
                  <span className={formclasses.signinspan}>
                    Complaint Sub Category Name
                  </span>
                  <input
                    type="text"
                    name="sub_category_name"
                    value={values.sub_category_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={formclasses["input-textarea"]}>
                <span className={formclasses.signinspan}>
                  Complaint Category Desctiption
                </span>
                <textarea
                  className={formclasses.textarea}
                  name="sub_category_desc"
                  value={values.sub_category_desc}
                  onChange={handleChange}
                />
              </div>

              {error && <p className={msg.error}>{error}</p>}
              <div className={formclasses.button}>
                <input type="submit" value="Update Data" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateSubCategoryContent;
