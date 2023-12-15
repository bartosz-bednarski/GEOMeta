import React from "react";
import classes from "./quizAchievement.module.scss";
import starImg from "../../assets/images/ui/star.svg";
import sumImg from "../../assets/images/ui/sum.svg";
import flagImg from "../../assets/images/country/flags/chile.svg";
import emblemImg from "../../assets/images/country/emblems/chile.svg";
import plateImg from "../../assets/images/country/plates/canada.jpg";
import { quizAchievementsProps } from "profile";
const QuizAchievement: React.FC<quizAchievementsProps> = ({
  type,
  points,
  games,
}) => {
  return (
    <div className={classes["achievement-container"]}>
      <div className={classes["achievement-container__header-box"]}>
        <div className={classes["achievement-container__header-box__logo-box"]}>
          {type === "Flagi" && <img src={flagImg} alt="flag" />}
          {type === "Herby" && <img src={emblemImg} alt="emblem" />}
          {type === "Rejestracje" && <img src={plateImg} alt="plate" />}
        </div>
        <span>Quiz {type}</span>
      </div>
      <div className={classes["achievement-container__achievement-box"]}>
        <div
          className={
            classes["achievement-container__achievement-box__item-box"]
          }
        >
          <div
            className={
              classes[
                "achievement-container__achievement-box__item-box__img-box"
              ]
            }
          >
            <img src={starImg} alt="star" />
          </div>
          {points} punktów
        </div>
        <div
          className={
            classes["achievement-container__achievement-box__item-box"]
          }
        >
          <div
            className={
              classes[
                "achievement-container__achievement-box__item-box__img-box"
              ]
            }
          >
            <img src={sumImg} alt="star" />
          </div>
          {games} gier
        </div>
      </div>
    </div>
  );
};
export default QuizAchievement;
