import HomeNav from "./nav/Navigation";
import classes from "./home.module.scss";
import LogoSmall from "../tools/LogoSmall";
import LogoBig from "../tools/LogoBig";
import worldBookImg from "../../assets/images/home/grafika1v21.png";
const Home = () => {
  return (
    <div className={classes.home}>
      <main className={classes["home__main-container"]}>
        <div className={classes["home__main-container__text-box"]}>
          <LogoBig />
          <span className={classes["home__main-container__text-box__text"]}>
            Twój kompleksowy przewodnik po grze GeoGuessr, który dostarczy Ci
            niezbędnych narzędzi i wskazówek, abyś mógł odkrywać świat w pełni
            świadomie i skutecznie!
          </span>
        </div>
        <img
          src={worldBookImg}
          className={classes["home__main-container__worldBookImg"]}
        />
      </main>
    </div>
  );
};
export default Home;
