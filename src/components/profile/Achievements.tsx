import React from "react";
import classes from "./achievements.module.scss";
import { useAppSelector } from "../../redux/hooks";
import trophyImg from "../../assets/images/ui/trophy.svg";
import QuizAchievement from "./QuizAchievement";
const Achievements: React.FC = () => {
  const flagsQuiz = useAppSelector((state) => state.achievements.flagsQuiz);
  const emblemsQuiz = useAppSelector((state) => state.achievements.emblemsQuiz);
  const platesQuiz = useAppSelector((state) => state.achievements.platesQuiz);
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
          points={flagsQuiz.points}
          games={flagsQuiz.games}
        />
        <QuizAchievement
          type="Herby"
          points={emblemsQuiz.points}
          games={emblemsQuiz.games}
        />
        <QuizAchievement
          type="Rejestracje"
          points={platesQuiz.points}
          games={platesQuiz.games}
        />
      </div>
    </div>
  );
};

export default Achievements;
