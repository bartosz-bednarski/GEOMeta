import classes from "./largeFrame.module.scss";
import rightHand from "../../assets/images/ui/hand-right-outline.svg";
import leftHand from "../../assets/images/ui/hand-left-outline.svg";
import highTemperature from "../../assets/images/ui/fever.svg";
import mediumTemperature from "../../assets/images/ui/thermometer.svg";
import lowTemperature from "../../assets/images/ui/cold-temperature.svg";
const LargeFrame = ({ border, type }) => {
  return (
    <span
      className={`${classes.box} ${
        border === "purple" && classes["purple-border"]
      }`}
    >
      {type === "high" && (
        <img
          className={classes["box__img"]}
          src={highTemperature}
          alt="highTemperature"
        />
      )}
      {type === "low" && (
        <img
          className={classes["box__img"]}
          src={lowTemperature}
          alt="lowTemperature"
        />
      )}
      {type === "medium" && (
        <img
          className={classes["box__img"]}
          src={mediumTemperature}
          alt="mediumTemperature"
        />
      )}
      {type === "rightHand" && (
        <img className={classes["box__img"]} src={rightHand} alt="rightHand" />
      )}
      {type === "leftHand" && (
        <img className={classes["box__img"]} src={leftHand} alt="leftHand" />
      )}
    </span>
  );
};

export default LargeFrame;
