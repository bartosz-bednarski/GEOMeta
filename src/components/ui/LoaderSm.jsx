import classes from "./loaderSm.module.scss";
import plane from "../../assets/images/ui/airplane-outline.svg";
import world from "../../assets/images/ui/earth-globe-europe-africa.svg";
const LoaderSm = () => {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes["spinner-container__spinner-box"]}>
        <div className={classes["spinner-container__spinner-box__spinner"]}>
          <img
            src={plane}
            className={
              classes["spinner-container__spinner-box__spinner__plane"]
            }
          />
        </div>
        <img
          src={world}
          className={classes["spinner-container__spinner-box__world-img"]}
        />
      </div>
      <span className={classes["spinner-container__text"]}>Ładowanie...</span>
    </div>
  );
};

export default LoaderSm;
