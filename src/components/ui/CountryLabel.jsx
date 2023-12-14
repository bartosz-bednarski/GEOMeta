import classes from "./countryLabel.module.scss";
const CountryLabel = (props) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => (images[item.replace("./", "")] = r(item)));

    return images;
  }
  let images;

  if (props.continent === "northAmerica") {
    images = importAll(
      require.context(
        "../../assets/images/continent/northAmerica/",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
  }
  if (props.continent === "southAmerica") {
    images = importAll(
      require.context(
        "../../assets/images/continent/southAmerica/",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
  }
  if (props.continent === "africa") {
    images = importAll(
      require.context(
        "../../assets/images/continent/africa/",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
  }
  if (props.continent === "europe") {
    images = importAll(
      require.context(
        "../../assets/images/continent/europe/",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
  }
  if (props.continent === "asia") {
    images = importAll(
      require.context(
        "../../assets/images/continent/asia/",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
  }
  if (props.continent === "oceania") {
    images = importAll(
      require.context(
        "../../assets/images/continent/oceania/",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
  }
  if (props.img !== undefined) {
    return (
      <div className={classes.label} onClick={props.onClick}>
        <img src={images[props.img]} alt="country-icon" />
        {props.country}
      </div>
    );
  }
};
export default CountryLabel;
