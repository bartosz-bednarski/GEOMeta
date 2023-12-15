import React from "react";
import classes from "./continents.module.scss";
import EuropeImg from "./EuropeImg.tsx";
import NorthAmericaImg from "./NorthAmericaImg.tsx";
import AsiaImg from "./AsiaImg.tsx";
import SouthAmericaImg from "./SouthAmericaImg.tsx";
import AfricaImg from "./AfricaImg.tsx";
import AustraliaImg from "./AustraliaImg.tsx";
import WorldImg from "./WorldImg.tsx";
import Stamp from "../ui/Stamp";
import {
  activeContinent,
  activeContinentHandler,
} from "../../types/continents";
const WorldMap: React.FC<{
  activeContinent: activeContinent;
  activeContinentHandler: activeContinentHandler;
}> = ({ activeContinent, activeContinentHandler }) => {
  return (
    <main className={classes["continents__map-container"]}>
      {!activeContinent.active && (
        <WorldImg activeContinentHandler={activeContinentHandler} />
      )}
      {activeContinent.id === "northAmerica" && (
        <Stamp
          continent={activeContinent.continent}
          continentStyle="northAmerica"
        >
          <NorthAmericaImg activeContinentHandler={activeContinentHandler} />
        </Stamp>
      )}
      {activeContinent.id === "southAmerica" && (
        <Stamp
          continent={activeContinent.continent}
          continentStyle="southAmerica"
        >
          <SouthAmericaImg activeContinentHandler={activeContinentHandler} />
        </Stamp>
      )}
      {activeContinent.id === "europe" && (
        <Stamp continent={activeContinent.continent} continentStyle="europe">
          <EuropeImg activeContinentHandler={activeContinentHandler} />
        </Stamp>
      )}
      {activeContinent.id === "africa" && (
        <Stamp continent={activeContinent.continent} continentStyle="africa">
          <AfricaImg activeContinentHandler={activeContinentHandler} />
        </Stamp>
      )}
      {activeContinent.id === "asia" && (
        <Stamp continent={activeContinent.continent} continentStyle="asia">
          <AsiaImg activeContinentHandler={activeContinentHandler} />
        </Stamp>
      )}
      {activeContinent.id === "oceania" && (
        <Stamp continent={activeContinent.continent} continentStyle="oceania">
          <AustraliaImg activeContinentHandler={activeContinentHandler} />
        </Stamp>
      )}
    </main>
  );
};
export default WorldMap;
