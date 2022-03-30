import classes from "../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../css/account_css/UserAccount.module.css";
import tbl from "../../css/admin_css/table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import msg from "../../css/msg/msg.module.css";
import {
  AddComplaintCategoryAction,
  ListComplaintCategoryAction,
} from "../../redux/actions/adminActions/ComplaintCategoryAction";
import DeleteCategoryDialog from "../../components/admin/delete_popup/deleteCategory";
import ValidateComplaintCategory from "../../components/admin/complaintCategoryValidator";
import UpdateCategoryContent from "./UpdatePages/UpdateCategoryContent";
import UpdateCategoryForm from "./UpdatePages/UpdateCategoryForm";
import Loading from "../../components/layout/LoadingScreen";

const AddComplaintCategory = () => {
  const dispatch = useDispatch();
  const addComplaintCategoryR = useSelector(
    (state) => state.addComplaintCategoryR
  );
  const { error, success } = addComplaintCategoryR;
  const listComplaintCategoryR = useSelector(
    (state) => state.listComplaintCategoryR
  );
  const { loading, catList } = listComplaintCategoryR;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [values, setValues] = useState({
    category_name: "",
    category_desc: "",
  });
  const { message, setMessage } = useState("");

  //--------------> Delete Popup code Start <----------------------
  const [category, setCategory] = useState(success);

  const [dialog, setDialog] = useState({
    dialogMessage: "",
    isLoading: false,
    //update
    cname: "",
    cid: "",
  });
  const idCategoryRef = useRef();
  const handleDialog = (dialogMessage, isLoading, cname, cid) => {
    setDialog({
      dialogMessage,
      isLoading,
      //update
      cname,
      cid,
    });
  };
  const handleDelete = (id) => {
    var f;
    const index = catList.find(function (item, index) {
      f = index;
      return item.id === id;
    });
    handleDialog(
      "Are you sure want to delete?",
      true,
      catList[f].category_name,
      catList[f].id
    );
    idCategoryRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setCategory(catList.filter((p) => p.id !== idCategoryRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  //--------------> Delete Popup code End <----------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(ListComplaintCategoryAction());
    }
  }, [dispatch, userInfo]);

  const [isOpen, setIsOpen] = useState(false);
  const [cid, setCid] = useState(0);
  const [cdata, setCData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setCData((prev) => {
        return catList.find((cobj) => {
          return cobj.id === cid;
        });
      });
    } else {
      setCData(null);
    }
  }, [cid]);

  const togglePopup = (e) => {
    setCid(+e.target.value);
    setIsOpen(!isOpen);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const mess = ValidateComplaintCategory(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(AddComplaintCategoryAction(values));
      setValues({
        category_name: "",
        category_desc: "",
      });
    }
  };
  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            {dialog.isLoading && (
              <DeleteCategoryDialog
                cname={dialog.cname}
                onDialog={areUSureDelete}
                dialogMessage={dialog.dialogMessage}
                cid={dialog.cid}
              />
            )}
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>Add Complaint Category</div>
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

                        {error && error.complaint_exist && (
                          <p className={msg.error}>
                            {
                              "Complain Category with this name is already exists."
                            }
                          </p>
                        )}
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
                    {success && (
                      <p className={msg.success}>
                        {"Complaint Category Added Successfully."}
                      </p>
                    )}

                    <div className={formclasses.button}>
                      <input type="submit" value="Add Complain Category" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {loading === true ? (
              <div className={classes.loadingDiv}>
                <Loading />
              </div>
            ) : (
              <table className={tbl.table}>
                <caption>Complaint Category Details</caption>
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Complaint Category Name</th>
                    <th>omplaint Category Desctiption</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {catList?.map((s, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{s.category_name}</td>
                      <td>{s.category_desc}</td>
                      <td>
                        <button
                          className={tbl.tbl_button_edit}
                          value={s.id}
                          onClick={togglePopup}
                        >
                          update
                        </button>

                        <button
                          className={tbl.tbl_button}
                          onClick={() => handleDelete(s.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {isOpen && cdata && (
              <div>
                <UpdateCategoryForm
                  content={<UpdateCategoryContent categoryData={cdata} />}
                  handleClose={togglePopup}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComplaintCategory;
