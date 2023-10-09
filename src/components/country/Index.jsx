import { useParams } from "react-router-dom";
import classes from "./country.module.scss";
import polandflag from "../../assets/images/country/flags/poland.svg";
import CountryDetailsBorder15 from "../ui/CountryDetailsBorder15";
import CountryDetailsBorder50 from "../ui/CountryDetailsBorder50";
const Country = () => {
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
            Polska
          </span>
          <div
            className={
              classes[
                "country-container__details-container__main-info-box__row-1-box"
              ]
            }
          >
            <CountryDetailsBorder15 type="capitol" width="small">
              Warszawa
            </CountryDetailsBorder15>
            <CountryDetailsBorder15 type="dolar" width="small">
              PLN / zł
            </CountryDetailsBorder15>
          </div>
          <div
            className={
              classes[
                "country-container__details-container__main-info-box__row-1-box"
              ]
            }
          >
            <CountryDetailsBorder50 type="mediumTemperature" />
            <CountryDetailsBorder50 type="rightHand" />
          </div>

          <CountryDetailsBorder15 type="website" width="lage">
            https://www.gov.pl/
          </CountryDetailsBorder15>
          <CountryDetailsBorder15 type="plate" width="large">
            PLN / zł
          </CountryDetailsBorder15>
        </div>
      </div>
    </div>
  );
};
export default Country;
