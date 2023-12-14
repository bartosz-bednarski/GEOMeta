import { useState, useEffect } from "react";
import classes from "./country.module.scss";
import SmallFrame from "../ui/SmallFrame";
import LargeFrame from "../ui/LargeFrame";
import CountryDetailsEmblem from "../ui/CountryDetailsEmblem";
import ModalCountryIcons from "./ModalCountryIcons";

const Country = ({ data }) => {
  const [displayModal, setDisplayModal] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("displayIconsMeaningModal") === "1") {
      setDisplayModal(false);
    }
    localStorage.setItem("displayIconsMeaningModal", "1");
  }, []);

  const countryFlag = require(`../../assets/images/country/flags/${data[0].country_flag}`);
  const plates = require(`../../assets/images/country/plates/${data[0].plate}`);
  return (
    <>
      {displayModal && <ModalCountryIcons />}
      <div className={classes["country-container"]}>
        <div className={classes["country-container__details-container"]}>
          <span
            className={
              classes[
                "country-container__details-container__country-name-mobile"
              ]
            }
          >
            {data[0].country_name}
          </span>
          <div
            className={
              classes["country-container__details-container__flag-box"]
            }
          >
            <img
              src={countryFlag}
              alt={countryFlag}
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
              {data[0].country_name}
            </span>
            <div
              className={
                classes[
                  "country-container__details-container__main-info-box__row-1-box"
                ]
              }
            >
              <SmallFrame type="capitol" width="small">
                {data[0].capitol}
              </SmallFrame>
              <SmallFrame type="dolar" width="small">
                {data[0].currency}
              </SmallFrame>
            </div>
            <div
              className={
                classes[
                  "country-container__details-container__main-info-box__row-1-box"
                ]
              }
            >
              <CountryDetailsEmblem emblem={data[0].emblem} />
              <LargeFrame type={data[0].temperature} />
              <LargeFrame type={data[0].movement} />
            </div>
            <a href={data[0].website}>
              <SmallFrame type="website" width="lage">
                {data[0].website}
              </SmallFrame>
            </a>
            <SmallFrame type="plate" width="large">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                src={plates}
                alt="vehicle-plate"
              />
            </SmallFrame>
          </div>
        </div>
      </div>
    </>
  );
};
export default Country;
