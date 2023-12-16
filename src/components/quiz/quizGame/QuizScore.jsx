import classes from "./quizScore.module.scss";
import { useNavigate } from "react-router-dom";
import check from "../../../assets/images/ui/check.svg";
import cross from "../../../assets/images/ui/cross-mark.svg";
import Button from "../../ui/Button";
const QuizScore = ({ serverAnswers, userScore }) => {
  const navigate = useNavigate();
  return (
    <div className={classes["score-container"]}>
      <div className={classes["score-container__context-container"]}>
        <h1>Gratulacje!</h1>
        <div
          className={
            classes["score-container__context-container__answers-container"]
          }
        >
          {serverAnswers.map((score) => (
            <span
              className={
                classes[
                  "score-container__context-container__answers-container__answer-box"
                ]
              }
            >
              <span>Pytanie nr. {score.question_number + 1}</span>
              {score.userAnswer === "correct" && (
                <img src={check} alt="check" />
              )}
              {score.userAnswer === "wrong" && <img src={cross} alt="cross" />}
            </span>
          ))}
        </div>
        <h2>Twój wynik: {userScore} pnkt</h2>
      </div>
      <div className={classes["score-container__buttons-container"]}>
        <Button content="Zagraj jeszcze raz" onClick={() => navigate(0)} />
        <Button content="Inne Quizy" onClick={() => navigate("/quiz")} />
      </div>
    </div>
  );
};
export default QuizScore;
