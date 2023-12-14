import classes from "./stamp.module.scss";
const Stamp = ({ continent, continentStyle, children }) => {
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  let day = String(date.getDate());
  day = day.length === 1 ? `0${day}` : day;
  const dateToExp =
    day + " " + month[date.getMonth()] + " " + date.getFullYear();

  return (
    <div className={classes["img-container"]}>
      <div
        className={`${classes["img-container__stamp"]} ${
          classes["img-container__stamp__" + continentStyle]
        }`}
      >
        <div className={classes["img-container__stamp__content"]}>
          <span>{continent.toUpperCase()}</span>
          <span className={classes["img-container__stamp__content__date"]}>
            {dateToExp}
          </span>
          <span>IMMIGRATION</span>
          <span className={classes["img-container__stamp__content__code"]}>
            (0975)
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Stamp;
