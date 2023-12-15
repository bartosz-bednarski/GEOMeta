import React from "react";
import { useState, useEffect } from "react";
import classes from "./country.module.scss";
import SmallFrame from "../ui/SmallFrame";
import LargeFrame from "../ui/LargeFrame";
import CountryDetailsEmblem from "../ui/CountryDetailsEmblem";
import ModalCountryIcons from "./ModalCountryIcons.tsx";
import { countryProps } from "country";

const Country: React.FC<{ countryData: countryProps }> = ({ countryData }) => {
  const [displayModal, setDisplayModal] = useState<boolean>(true);
  useEffect(() => {
    if (localStorage.getItem("displayIconsMeaningModal") === "1") {
      setDisplayModal(false);
    }
    localStorage.setItem("displayIconsMeaningModal", "1");
  }, []);

  const countryFlag = require(`../../assets/images/country/flags/${countryData[0].country_flag}`);
  const plates = require(`../../assets/images/country/plates/${countryData[0].plate}`);
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
            {countryData[0].country_name}
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
              {countryData[0].country_name}
            </span>
            <div
              className={
                classes[
                  "country-container__details-container__main-info-box__row-1-box"
                ]
              }
            >
              <SmallFrame type="capitol" width="small">
                {countryData[0].capitol}
              </SmallFrame>
              <SmallFrame type="dolar" width="small">
                {countryData[0].currency}
              </SmallFrame>
            </div>
            <div
              className={
                classes[
                  "country-container__details-container__main-info-box__row-1-box"
                ]
              }
            >
              <CountryDetailsEmblem emblem={countryData[0].emblem} />
              <LargeFrame type={countryData[0].temperature} border={null} />
              <LargeFrame type={countryData[0].movement} border={null} />
            </div>
            <a href={countryData[0].website}>
              <SmallFrame type="website" width="lage">
                {countryData[0].website}
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
