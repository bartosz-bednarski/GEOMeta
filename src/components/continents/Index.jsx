import classes from "./continents.module.scss";
import NorthAmericaSingleImg from "../../assets/images/continents/continentsSingle/northAmerica.svg";
import SouthAmericaSingleImg from "../../assets/images/continents/continentsSingle/southAmerica.svg";
import AfricaSingleImg from "../../assets/images/continents/continentsSingle/africa6.svg";
import OceaniaSingleImg from "../../assets/images/continents/continentsSingle/oceania2.svg";
import EuropeSingleImg from "../../assets/images/continents/continentsSingle/europe2.svg";
import AsiaSingleImg from "../../assets/images/continents/continentsSingle/asia2.svg";
import { useRef, useState } from "react";
import WorldMap from "./WorldMap";
import { default as CountryBox } from "../ui/CountryLabel";
import { useNavigate } from "react-router-dom";
import { getContinent } from "../../api/continents";

const Continents = () => {
  const [activeContinent, setActiveContinent] = useState({
    active: false,
    id: "",
    continent: "",
  });
  const [countries, setCountries] = useState([]);
  const continentRef = useRef(null);
  const navigate = useNavigate();

  const activeContinentHandler = async ({ id, continent }) => {
    setActiveContinent({
      active: true,
      id: id,
      continent: continent,
    });

    const data = await getContinent(id);
    setCountries(data);
    continentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.continents}>
      <WorldMap
        activeContinent={activeContinent}
        activeContinentHandler={activeContinentHandler}
      />
      {activeContinent.active !== false && (
        <div className={classes["continents__continent"]} ref={continentRef}>
          <div className={classes["continents__continent__image-box"]}>
            <span
              className={classes["continents__continent__image-box__title"]}
            >
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
              alt="continent"
              className={classes["continents__continent__image-box__image"]}
            />
          </div>

          {countries.length > 0 && (
            <div
              className={classes["continents__continent__countries-container"]}
            >
              <div
                className={
                  classes[
                    "continents__continent__countries-container__countries-box"
                  ]
                }
              >
                {countries.map((country) => {
                  return (
                    <CountryBox
                      img={country.img}
                      country={country.country}
                      key={country.country}
                      continent={activeContinent.id}
                      onClick={() => {
                        navigate(`${country.country}`);
                        window.scrollTo(0, 0);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Continents;
