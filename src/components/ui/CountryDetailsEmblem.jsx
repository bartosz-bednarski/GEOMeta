import classes from "./countryDetailsEmblem.module.scss";
const CountryDetailsEmblem = (props) => {
  const emblemImg = require(`../../assets/images/country/emblems/${props.emblem}`);
  return (
    <span className={classes["emblem-box"]}>
      <img
        src={emblemImg}
        alt={emblemImg}
        className={classes["emblem-box__img"]}
      />
    </span>
  );
};
export default CountryDetailsEmblem;
