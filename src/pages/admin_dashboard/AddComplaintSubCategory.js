import classes from "../../css/admin_css/AdminDashboard.module.css";
import formclasses from "../../css/account_css/UserAccount.module.css";
import tbl from "../../css/admin_css/table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import msg from "../../css/msg/msg.module.css";
import {
  AddComplaintSubCategoryAction,
  ListComplaintSubCategoryAction,
} from "../../redux/actions/adminActions/ComplaintSubCategoryAction";
import { ListComplaintCategoryAction } from "../../redux/actions/adminActions/ComplaintCategoryAction";
import Loading from "../../components/layout/LoadingScreen";

import DeleteSubCategoryDialog from "../../components/admin/delete_popup/deleteSubCategory";
import ValidateComplaintSubCategory from "../../components/admin/complaintSubCatValidator";
import UpdateSubCategoryContent from "./UpdatePages/SubCategoryContent";
import UpdateSubCategoryForm from "./UpdatePages/UpdateSubCategoryForm";

const AddComplaintSubCategory = () => {
  const dispatch = useDispatch();
  const addComplaintSubCR = useSelector((state) => state.addComplaintSubCR);
  const { error, success } = addComplaintSubCR;

  const listComplaintSubCR = useSelector((state) => state.listComplaintSubCR);
  const { loading, SubcatList } = listComplaintSubCR;

  const listComplaintCategoryR = useSelector(
    (state) => state.listComplaintCategoryR
  );
  const { catList } = listComplaintCategoryR;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [values, setValues] = useState({
    category_id: "",
    sub_category_name: "",
    sub_category_desc: "",
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
    const index = SubcatList.find(function (item, index) {
      f = index;
      return item.id === id;
    });
    handleDialog(
      "Are you sure want to delete?",
      true,
      SubcatList[f].sub_category_name,
      SubcatList[f].id
    );
    idCategoryRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setCategory(SubcatList.filter((p) => p.id !== idCategoryRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  //--------------> Delete Popup code End <----------------------
  const [isOpen, setIsOpen] = useState(false);
  const [subcatid, setSubcatId] = useState(0);
  const [subCatData, setSubCatData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setSubCatData((prev) => {
        return SubcatList.find((cobj) => {
          return cobj.id === subcatid;
        });
      });
    } else {
      setSubCatData(null);
    }
  }, [subcatid]);

  const togglePopup = (e) => {
    setSubcatId(+e.target.value);
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(ListComplaintSubCategoryAction());
      dispatch(ListComplaintCategoryAction());
    }
  }, [dispatch, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const mess = ValidateComplaintSubCategory(values);
    if (Object.keys(mess).length !== 0) {
      setMessage(mess);
    } else {
      dispatch(AddComplaintSubCategoryAction(values));
      setValues({
        category_id: "",
        sub_category_name: "",
        sub_category_desc: "",
      });
    }
  };
  const newCatList = SubcatList?.map((obj) => {
    return {
      ...obj,
      category_id: catList?.find((cat) => cat.id === obj.category_id)
        .category_name,
    };
  });

  return (
    <div>
      <div className={classes["home-content"]}>
        <div className={classes["sales-boxes"]}>
          <div className={classes["recent-sales"]}>
            {dialog.isLoading && (
              <DeleteSubCategoryDialog
                cname={dialog.cname}
                onDialog={areUSureDelete}
                dialogMessage={dialog.dialogMessage}
                cid={dialog.cid}
              />
            )}
            <div className={classes.Admin_panel_content_Body}>
              <div className={formclasses.container}>
                <div className={formclasses.title}>
                  Add Complaint Sub Category
                </div>
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
                          <option>Select a Category</option>
                          {catList?.map((cat) => (
                            <option key={cat.id} value={cat.id}>
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

                        {error && error.complaint_exist && (
                          <p className={msg.error}>
                            {"Sub Category with this name is already exists."}
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
                        name="sub_category_desc"
                        value={values.sub_category_desc}
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
                <caption>Complaint Sub Category Details</caption>
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Category Name</th>
                    <th>Sub Category Name</th>
                    <th>Sub Category Desctiption</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {newCatList?.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.category_id}</td>
                      <td>{s.sub_category_name}</td>
                      <td>{s.sub_category_desc}</td>
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
            {isOpen && subCatData && (
              <div>
                <UpdateSubCategoryForm
                  content={<UpdateSubCategoryContent subCatData={subCatData} />}
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

export default AddComplaintSubCategory;
