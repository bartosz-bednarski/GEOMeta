import classes from "./continents.module.scss";
import EuropeImg from "../../assets/images/continents/EuropeImg";
import NorthAmericaImg from "../../assets/images/continents/NorthAmericaImg";
import AsiaImg from "../../assets/images/continents/AsiaImg";
import SouthAmericaImg from "../../assets/images/continents/SouthAmericaImg";
import AfricaImg from "../../assets/images/continents/AfricaImg";
import AustraliaImg from "../../assets/images/continents/AustraliaImg";
import WorldImg from "../../assets/images/continents/WorldImg";
import Stamp from "../ui/Stamp";
const WorldMap = (props) => {
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
  let day = new String(date.getDate());
  day = day.length === 1 ? `0${day}` : day;
  const dateToExp =
    day + " " + month[date.getMonth()] + " " + date.getFullYear();
  const activeContinent = props.activeContinent;
  const activeContinentHandler = props.activeContinentHandler;
  return (
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
  );
};
export default WorldMap;
