import HomeNav from "./nav/HomeNav";
import classes from "./home.module.scss";
import Logo from "../tools/Logo";
import bookImg from "../../assets/images/home/open-book.1024x822.png";
import worldImg from "../../assets/images/home/world-connection.svg";
const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["home__nav-container"]}>
        <Logo />
        <HomeNav />
        <span />
      </div>
      <main className={classes["home__main-container"]}>
        <div className={classes["home__main-container__images-box"]}>
          <img
            src={bookImg}
            className={classes["home__main-container__images-box__book"]}
          />
          <img
            src={worldImg}
            className={classes["home__main-container__images-box__world"]}
          />
        </div>
        <div className={classes["home__main-container__text-box"]}>
          <span className={classes["home__main-container__text-box__logo"]}>
            GEOMeta
          </span>
          <span className={classes["home__main-container__text-box__text"]}>
            Twój kompleksowy przewodnik po grze GeoGuessr, który dostarczy Ci
            niezbędnych narzędzi i wskazówek, abyś mógł odkrywać świat w pełni
            świadomie i skutecznie!
          </span>
        </div>
      </main>
    </div>
  );
};
export default Home;
