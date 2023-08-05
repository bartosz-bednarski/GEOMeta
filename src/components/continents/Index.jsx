import classes from "./continents.module.scss";

import EuropeImg from "../../assets/images/continents/EuropeImg";
import NorthAmericaImg from "../../assets/images/continents/NorthAmericaImg";
import AsiaImg from "../../assets/images/continents/AsiaImg";
import SouthAmericaImg from "../../assets/images/continents/SouthAmericaImg";
import AfricaImg from "../../assets/images/continents/AfricaImg";
import AustraliaImg from "../../assets/images/continents/AustraliaImg";
import { useState } from "react";
const Continents = () => {
  const [activeContinent, setActiveContinent] = useState({
    active: false,
    continent: "",
  });
  const activeContinentHandler = (event) => {
    setActiveContinent({
      active: true,
      continent: event.currentTarget.id,
    });
  };
  console.log(activeContinent);
  return (
    <div className={classes.continents}>
      <main className={classes["continents__main-container"]}>
        <span
          className={`${classes["continents__main-container__img-container"]} ${classes.northAmerica}`}
          id="northAmerica"
          onClick={activeContinentHandler}
        >
          <NorthAmericaImg status={activeContinent} />
        </span>
        <span
          className={`${classes["continents__main-container__img-container"]} ${classes.europe}`}
          id="europe"
          onClick={activeContinentHandler}
        >
          <EuropeImg status={activeContinent} />
        </span>
        <span
          className={`${classes["continents__main-container__img-container"]} ${classes.asia}`}
          id="asia"
          onClick={activeContinentHandler}
        >
          <AsiaImg status={activeContinent} />
        </span>
        <span
          className={`${classes["continents__main-container__img-container"]} ${classes.southAmerica}`}
          id="southAmerica"
          onClick={activeContinentHandler}
        >
          <SouthAmericaImg status={activeContinent} />
        </span>
        <span
          className={`${classes["continents__main-container__img-container"]} ${classes.africa}`}
          id="africa"
          onClick={activeContinentHandler}
        >
          <AfricaImg status={activeContinent} />
        </span>
        <span
          className={`${classes["continents__main-container__img-container"]} ${classes.australia}`}
          id="australia"
          onClick={activeContinentHandler}
        >
          <AustraliaImg status={activeContinent} />
        </span>
      </main>
    </div>
  );
};
export default Continents;
