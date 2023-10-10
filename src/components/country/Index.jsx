import { useParams } from "react-router-dom";
import classes from "./country.module.scss";
import polandflag from "../../assets/images/country/flags/poland.svg";
import CountryDetailsBorder15 from "../ui/CountryDetailsBorder15";
import CountryDetailsBorder50 from "../ui/CountryDetailsBorder50";
import CountryDetailsEmblem from "../ui/CountryDetailsEmblem";
const Country = (props) => {
  const countryFlag = require(`../../assets/images/country/flags/${props.data[0].country_flag}`);
  console.log(props.data);
  const params = useParams();
  console.log(params.countryId);
  return (
    <div className={classes["country-container"]}>
      <div className={classes["country-container__details-container"]}>
        <div
          className={classes["country-container__details-container__flag-box"]}
        >
          <img
            src={polandflag}
            className={
              classes["country-container__details-container__flag-box__flag"]
            }
          />
        </div>
        <div
          className={
            classes["country-container__details-container__main-info-box"]
          }
        >
          <span
            className={
              classes[
                "country-container__details-container__main-info-box__country-name"
              ]
            }
          >
            {props.data[0].country_name}
          </span>
          <div
            className={
              classes[
                "country-container__details-container__main-info-box__row-1-box"
              ]
            }
          >
            <CountryDetailsBorder15 type="capitol" width="small">
              {props.data[0].capitol}
            </CountryDetailsBorder15>
            <CountryDetailsBorder15 type="dolar" width="small">
              {props.data[0].currency}
            </CountryDetailsBorder15>
          </div>
          <div
            className={
              classes[
                "country-container__details-container__main-info-box__row-1-box"
              ]
            }
          >
            <CountryDetailsEmblem emblem={props.data[0].emblem} />
            <CountryDetailsBorder50 type={props.data[0].temperature} />
            <CountryDetailsBorder50 type={props.data[0].movement} />
          </div>

          <CountryDetailsBorder15 type="website" width="lage">
            {props.data[0].website}
          </CountryDetailsBorder15>
          <CountryDetailsBorder15 type="plate" width="large">
            Plate
          </CountryDetailsBorder15>
        </div>
      </div>
    </div>
  );
};
export default Country;
