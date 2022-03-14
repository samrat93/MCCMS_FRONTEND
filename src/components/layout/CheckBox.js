import classes from "../../css/layout_css/CheckBox.module.css";
const CheckBox = () => {
  return (
    <div>
      <label className={classes.toggle}>
        <input className={classes.toggle_input} type="checkbox" />
        <span className={classes.toggle_label}>
          <span className={classes.toggle_text}>Verify User</span>
        </span>
      </label>
    </div>
  );
};
export default CheckBox;
