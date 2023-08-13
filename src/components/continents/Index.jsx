import classes from "./continents.module.scss";

import EuropeImg from "../../assets/images/continents/EuropeImg";
import NorthAmericaImg from "../../assets/images/continents/NorthAmericaImg";
import AsiaImg from "../../assets/images/continents/AsiaImg";
import SouthAmericaImg from "../../assets/images/continents/SouthAmericaImg";
import AfricaImg from "../../assets/images/continents/AfricaImg";
import AustraliaImg from "../../assets/images/continents/AustraliaImg";
import WorldImg from "../../assets/images/continents/WorldImg";
import NorthAmericaSingleImg from "../../assets/images/continents/continentsSingle/northAmerica.svg";
import { useRef, useState } from "react";
const Continents = () => {
  const [activeContinent, setActiveContinent] = useState({
    active: false,
    continent: "",
  });
  const continentRef = useRef(null);

  const activeContinentHandler = (continent) => {
    setActiveContinent({
      active: true,
      continent: continent,
    });
    continentRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(activeContinent);
  return (
    <div className={classes.continents}>
      <main className={classes["continents__map-container"]}>
        {!activeContinent.active && (
          <WorldImg activeContinentHandler={activeContinentHandler} />
        )}
        {activeContinent.continent === "northAmerica" && (
          <NorthAmericaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.continent === "southAmerica" && (
          <SouthAmericaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.continent === "europe" && (
          <EuropeImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.continent === "africa" && (
          <AfricaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.continent === "asia" && (
          <AsiaImg
            activeContinent={activeContinent}
            activeContinentHandler={activeContinentHandler}
          />
        )}
        {activeContinent.continent === "australia" && (
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
            src={NorthAmericaSingleImg}
            className={classes["continents__continent__image-box__image"]}
          />
        </div>
      </div>
    </div>
  );
};
export default Continents;
