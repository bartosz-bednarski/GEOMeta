import classes from "./achievements.module.scss";

import trophyImg from "../../assets/images/ui/trophy.svg";
import QuizAchievement from "./QuizAchievement";
const Achievements = (props) => {
  return (
    <div className={classes["achievements-container"]}>
      <div className={classes["achievements-container__header-box"]}>
        <div
          className={classes["achievements-container__header-box__logo-box"]}
        >
          <img src={trophyImg} alt="user" />
        </div>
        <span>Osiągnięcia</span>
      </div>
      <div className={classes["achievements-container__content-box"]}>
        <QuizAchievement type="Flagi" points="100" games="10" />
        <QuizAchievement type="Herby" points="100" games="10" />
        <QuizAchievement type="Rejestracje" points="100" games="10" />
      </div>
    </div>
  );
};

export default Achievements;
