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
import Stamp from "./Stamp";
const Continents = () => {
  const [activeContinent, setActiveContinent] = useState({
    active: false,
    id: "",
    continent: "",
  });
  const continentRef = useRef(null);
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  let day = new String(date.getDay());
  day = day.length === 1 ? `0${day}` : day;
  const dateToExp =
    day + " " + month[date.getMonth()] + " " + date.getFullYear();
  // let check = activeContinent.id !== "" ? true : false;

  const activeContinentHandler = ({ id: id, continent: continent }) => {
    setActiveContinent({
      active: true,
      id: id,
      continent: continent,
    });
    setTimeout(() => {
      continentRef.current.scrollIntoView({ behavior: "smooth" });
    }, 2600);
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
          <Stamp
            continent={activeContinent.continent}
            date={dateToExp}
            style="northAmerica"
          >
            <NorthAmericaImg
              activeContinent={activeContinent}
              activeContinentHandler={activeContinentHandler}
            />
          </Stamp>
        )}
        {activeContinent.id === "southAmerica" && (
          <Stamp
            continent={activeContinent.continent}
            date={dateToExp}
            style="southAmerica"
          >
            <SouthAmericaImg
              activeContinent={activeContinent}
              activeContinentHandler={activeContinentHandler}
            />
          </Stamp>
        )}
        {activeContinent.id === "europe" && (
          <Stamp
            continent={activeContinent.continent}
            date={dateToExp}
            style="europe"
          >
            <EuropeImg
              activeContinent={activeContinent}
              activeContinentHandler={activeContinentHandler}
            />
          </Stamp>
        )}
        {activeContinent.id === "africa" && (
          <Stamp
            continent={activeContinent.continent}
            date={dateToExp}
            style="africa"
          >
            <AfricaImg
              activeContinent={activeContinent}
              activeContinentHandler={activeContinentHandler}
            />
          </Stamp>
        )}
        {activeContinent.id === "asia" && (
          <Stamp
            continent={activeContinent.continent}
            date={dateToExp}
            style="asia"
          >
            <AsiaImg
              activeContinent={activeContinent}
              activeContinentHandler={activeContinentHandler}
            />
          </Stamp>
        )}
        {activeContinent.id === "oceania" && (
          <Stamp
            continent={activeContinent.continent}
            date={dateToExp}
            style="oceania"
          >
            <AustraliaImg
              activeContinent={activeContinent}
              activeContinentHandler={activeContinentHandler}
            />
          </Stamp>
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
