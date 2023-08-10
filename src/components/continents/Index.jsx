import classes from "./continents.module.scss";

import EuropeImg from "../../assets/images/continents/EuropeImg";
import NorthAmericaImg from "../../assets/images/continents/NorthAmericaImg";
import AsiaImg from "../../assets/images/continents/AsiaImg";
import SouthAmericaImg from "../../assets/images/continents/SouthAmericaImg";
import AfricaImg from "../../assets/images/continents/AfricaImg";
import AustraliaImg from "../../assets/images/continents/AustraliaImg";
import WorldImg from "../../assets/images/continents/WorldImg";
import { useState } from "react";
const Continents = () => {
  const [activeContinent, setActiveContinent] = useState({
    active: false,
    continent: "",
  });
  const activeContinentHandler = (continent) => {
    setActiveContinent({
      active: true,
      continent: continent,
    });
  };
  console.log(activeContinent);
  return (
    <div className={classes.continents}>
      <main className={classes["continents__main-container"]}>
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
    </div>
  );
};
export default Continents;
