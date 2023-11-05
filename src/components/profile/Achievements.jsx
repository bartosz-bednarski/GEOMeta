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
        <QuizAchievement
          type="Flagi"
          points={props.data.flags_quiz_score}
          games={props.data.flags_quiz_counter}
        />
        <QuizAchievement
          type="Herby"
          points={props.data.emblems_quiz_score}
          games={props.data.emblems_quiz_counter}
        />
        <QuizAchievement
          type="Rejestracje"
          points={props.data.plates_quiz_score}
          games={props.data.plates_quiz_counter}
        />
      </div>
    </div>
  );
};

export default Achievements;
