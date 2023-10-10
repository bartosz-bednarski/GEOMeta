import classes from "./countryDetailsBorder50.module.scss";
import rightHand from "../../assets/images/ui/hand-right-outline.svg";
import leftHand from "../../assets/images/ui/hand-left-outline.svg";
import highTemperature from "../../assets/images/ui/fever.svg";
import mediumTemperature from "../../assets/images/ui/thermometer.svg";
import lowTemperature from "../../assets/images/ui/cold-temperature.svg";
const CountryDetailsBorder50 = (props) => {
  return (
    <span className={classes.box}>
      {props.type === "high" && (
        <img
          className={classes["box__img"]}
          src={highTemperature}
          alt="highTemperature"
        />
      )}
      {props.type === "low" && (
        <img
          className={classes["box__img"]}
          src={lowTemperature}
          alt="lowTemperature"
        />
      )}
      {props.type === "medium" && (
        <img
          className={classes["box__img"]}
          src={mediumTemperature}
          alt="mediumTemperature"
        />
      )}
      {props.type === "rightHand" && (
        <img className={classes["box__img"]} src={rightHand} alt="rightHand" />
      )}
      {props.type === "leftHand" && (
        <img className={classes["box__img"]} src={leftHand} alt="leftHand" />
      )}
    </span>
  );
};

export default CountryDetailsBorder50;
