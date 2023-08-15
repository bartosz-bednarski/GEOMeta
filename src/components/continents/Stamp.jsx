import classes from "./stamp.module.scss";
const Stamp = (props) => {
  let continent = props.continent;
  console.log(props.style);
  return (
    <div className={classes["img-container"]}>
      <div
        className={`${classes["img-container__stamp"]} ${
          classes["img-container__stamp__" + props.style]
        }`}
      >
        <div className={classes["img-container__stamp__content"]}>
          <span>{continent.toUpperCase()}</span>
          <span className={classes["img-container__stamp__content__date"]}>
            {props.date}
          </span>
          <span>IMMIGRATION</span>
          <span className={classes["img-container__stamp__content__code"]}>
            (0975)
          </span>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default Stamp;
