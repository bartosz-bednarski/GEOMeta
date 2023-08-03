import classes from "./continents.module.scss";

import EuropeImg from "../../assets/images/continents/EuropeImg";
import NorthAmericaImg from "../../assets/images/continents/NorthAmericaImg";
import AsiaImg from "../../assets/images/continents/AsiaImg";
import SouthAmericaImg from "../../assets/images/continents/SouthAmericaImg";
import AfricaImg from "../../assets/images/continents/AfricaImg";
import AustraliaImg from "../../assets/images/continents/AustraliaImg";
import { useState } from "react";
const Continents = () => {
  const [activeState, setActiveState] = useState("#68E1FD");
  return (
    <div className={classes.continents}>
      <main className={classes["continents__main-container"]}>
        <span className={classes["continents__main-container__img-container"]}>
          <NorthAmericaImg status={activeState} />
        </span>
        <span className={classes["continents__main-container__img-container"]}>
          <EuropeImg status={activeState} />
        </span>
        <span className={classes["continents__main-container__img-container"]}>
          <AsiaImg status={activeState} />
        </span>
        <span className={classes["continents__main-container__img-container"]}>
          <SouthAmericaImg status={activeState} />
        </span>
        <span className={classes["continents__main-container__img-container"]}>
          <AfricaImg status={activeState} />
        </span>
        <span className={classes["continents__main-container__img-container"]}>
          <AustraliaImg status={activeState} />
        </span>
      </main>
    </div>
  );
};
export default Continents;
