import classes from "./countryDetailsBorder15.module.scss";
import capitol from "../../assets/images/ui/capitol.svg";
import truck from "../../assets/images/ui/truck.svg";
import website from "../../assets/images/ui/website.svg";
const CountryDetailsBorder15 = (props) => {
  return (
    <span
      className={`${classes.box} ${props.width === "small" && classes.small} ${
        props.width === "large" && classes.large
      }`}
    >
      {props.children}
      <span className={classes["box__corner-tr"]}>
        {props.type === "capitol" && (
          <img
            src={capitol}
            alt="capitol"
            className={classes["box__corner-tr__img"]}
          />
        )}
        {props.type === "plate" && (
          <img
            src={truck}
            alt="truck"
            className={classes["box__corner-tr__img"]}
          />
        )}
        {props.type === "website" && (
          <img
            src={website}
            alt="www"
            className={classes["box__corner-tr__img"]}
          />
        )}
        {props.type === "dolar" && "$"}
      </span>
    </span>
  );
};
export default CountryDetailsBorder15;
