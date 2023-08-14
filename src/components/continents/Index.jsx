import classes from "./continents.module.scss";

import EuropeImg from "../../assets/images/continents/EuropeImg";
import NorthAmericaImg from "../../assets/images/continents/NorthAmericaImg";
import AsiaImg from "../../assets/images/continents/AsiaImg";
import SouthAmericaImg from "../../assets/images/continents/SouthAmericaImg";
import AfricaImg from "../../assets/images/continents/AfricaImg";
import AustraliaImg from "../../assets/images/continents/AustraliaImg";
import WorldImg from "../../assets/images/continents/WorldImg";
import NorthAmericaSingleImg from "../../assets/images/continents/continentsSingle/northAmerica.svg";
import SouthAmericaSingleImg from "../../assets/images/continents/continentsSingle/southAmerica.svg";
import AfricaSingleImg from "../../assets/images/continents/continentsSingle/africa6.svg";
import OceaniaSingleImg from "../../assets/images/continents/continentsSingle/oceania2.svg";
import EuropeSingleImg from "../../assets/images/continents/continentsSingle/europe2.svg";
import AsiaSingleImg from "../../assets/images/continents/continentsSingle/asia2.svg";
import { useEffect, useRef, useState } from "react";
const Continents = () => {
  const [activeContinent, setActiveContinent] = useState({
    active: false,
    id: "",
    continent: "",
  });
  const continentRef = useRef(null);

  // let check = activeContinent.id !== "" ? true : false;

  const activeContinentHandler = ({ id: id, continent: continent }) => {
    setActiveContinent({
      active: true,
      id: id,
      continent: continent,
    });
    continentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   activeContinentHandler();
  // }, []);

  console.log(activeContinent);
  return (
    <div className={classes.continents}>
      <main className={classes["continents__map-container"]}>
        {!activeContinent.active && (
          <WorldImg activeContinentHandler={activeContinentHandler} />
        )}
        {activeContinent.id === "northAmerica" && (
          <NorthAmericaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.id === "southAmerica" && (
          <SouthAmericaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.id === "europe" && (
          <EuropeImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.id === "africa" && (
          <AfricaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.id === "asia" && (
          <AsiaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.id === "oceania" && (
          <AustraliaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
      </main>
      <div className={classes["continents__continent"]} ref={continentRef}>
        <div className={classes["continents__continent__image-box"]}>
          <span className={classes["continents__continent__image-box__title"]}>
            {activeContinent.continent}
          </span>
          <img
            src={
              (activeContinent.id === "africa" && AfricaSingleImg) ||
              (activeContinent.id === "asia" && AsiaSingleImg) ||
              (activeContinent.id === "europe" && EuropeSingleImg) ||
              (activeContinent.id === "northAmerica" &&
                NorthAmericaSingleImg) ||
              (activeContinent.id === "southAmerica" &&
                SouthAmericaSingleImg) ||
              (activeContinent.id === "oceania" && OceaniaSingleImg)
            }
            className={classes["continents__continent__image-box__image"]}
          />
        </div>
      </div>
    </div>
  );
};
export default Continents;
