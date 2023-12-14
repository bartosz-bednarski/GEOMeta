import classes from "./smallFrame.module.scss";
import capitol from "../../assets/images/ui/capitol.svg";
import truck from "../../assets/images/ui/truck.svg";
import website from "../../assets/images/ui/website.svg";
const SmallFrame = ({ type, width, children }) => {
  return (
    <span
      className={`${classes.box} ${width === "small" && classes.small} ${
        width === "large" && classes.large
      }`}
      style={type === "plate" ? { padding: 0, height: "290px" } : {}}
    >
      {children}
      <span className={classes["box__corner-tr"]}>
        {type === "capitol" && (
          <img
            src={capitol}
            alt="capitol"
            className={classes["box__corner-tr__img"]}
          />
        )}
        {type === "plate" && (
          <img
            src={truck}
            alt="truck"
            className={classes["box__corner-tr__img"]}
          />
        )}
        {type === "website" && (
          <img
            src={website}
            alt="www"
            className={classes["box__corner-tr__img"]}
          />
        )}
        {type === "dolar" && "$"}
      </span>
    </span>
  );
};
export default SmallFrame;
