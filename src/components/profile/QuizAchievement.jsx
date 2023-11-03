import classes from "./quizAchievement.module.scss";
import starImg from "../../assets/images/ui/star.svg";
import sumImg from "../../assets/images/ui/sum.svg";
import flagImg from "../../assets/images/country/flags/chile.svg";
import emblemImg from "../../assets/images/country/emblems/chile.svg";
import plateImg from "../../assets/images/country/plates/canada.jpg";
const QuizAchievement = (props) => {
  return (
    <div className={classes["achievement-container"]}>
      <div className={classes["achievement-container__header-box"]}>
        <div className={classes["achievement-container__header-box__logo-box"]}>
          {props.type == "Flagi" && <img src={flagImg} alt="flag" />}
          {props.type == "Herby" && <img src={emblemImg} alt="emblem" />}
          {props.type == "Rejestracje" && <img src={plateImg} alt="plate" />}
        </div>
        <span>Quiz {props.type}</span>
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
          {props.points} punktów
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
          {props.games} gier
        </div>
      </div>
    </div>
  );
};
export default QuizAchievement;
