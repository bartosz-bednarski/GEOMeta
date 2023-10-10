import classes from "./countryDetailsEmblem.module.scss";
import poland from "../../assets/images/country/emblems/poland.svg.png";
const CountryDetailsEmblem = (props) => {
  const emblemImg = require(`../../assets/images/country/emblems/${props.emblem}`);
  return (
    <span className={classes["emblem-box"]}>
      <img
        src={emblemImg}
        alt="poland"
        className={classes["emblem-box__img"]}
      />
    </span>
  );
};
export default CountryDetailsEmblem;
