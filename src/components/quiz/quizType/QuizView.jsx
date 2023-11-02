import { useParams } from "react-router-dom";
import classes from "./quizView.module.scss";
import { useEffect, useRef, useState } from "react";
const QuizView = (props) => {
  const params = useParams();
  //timerEffect

  let intervalID = useRef(null);
  let timeout = useRef(null);
  const [timeLeft, setTimeLeft] = useState(10);
  useEffect(() => {
    if (props.questions.id < 5) {
      intervalID.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1010);

      timeout.current = setTimeout(() => {
        props.setQuestionsHandler();
        setTimeLeft(10);

        return clearInterval(intervalID.current), clearTimeout(timeout.current);
      }, 10000);
      let newAnswers = [...props.userAnswers];
      newAnswers[props.questions.id] = {
        id: props.questions.id,
        user_answer: "",
        correct_answer: props.data[props.questions.id].answer,
      };
      props.setUserAnswers(newAnswers);
    }
  }, [props.questions]);
  return (
    <div className={classes["quiz-view-container"]}>
      <h1>
        Wybierz {params.quizType === "flags" && "flagę "}
        {params.quizType === "emblems" && "herb "}
        {params.quizType === "plates" && "rejestracje dla "}
        {props.questions.question}
      </h1>
      <div
        className={classes["quiz-view-container__quiz-view-box"]}
        style={params.quizType === "plates" ? { width: "900px" } : {}}
      >
        {params.quizType === "flags" &&
          props.questions.data.map((flag, index) => {
            return (
              <span
                className={
                  classes["quiz-view-container__quiz-view-box__img-flags-box"]
                }
              >
                <img
                  src={require(`../../../assets/images/country/flags/${flag.country_flag}`)}
                  onClick={(e) => {
                    clearInterval(intervalID.current);
                    clearTimeout(timeout.current);
                    setTimeLeft(10);
                    props.setQuestionsHandler();
                    let newAnswers = [...props.userAnswers];
                    newAnswers[e.target.id] = {
                      id: e.target.id,
                      user_answer: `${index}`,
                      correct_answer: props.data[e.target.id].answer,
                    };
                    props.setUserAnswers(newAnswers);
                  }}
                  id={props.questions.id}
                />
              </span>
            );
          })}
        {params.quizType === "emblems" &&
          props.questions.data.map((emblem, index) => {
            return (
              <span
                className={
                  classes["quiz-view-container__quiz-view-box__img-emblems-box"]
                }
              >
                <img
                  src={require(`../../../assets/images/country/emblems/${emblem.emblem}`)}
                  onClick={(e) => {
                    clearInterval(intervalID.current);
                    clearTimeout(timeout.current);
                    setTimeLeft(10);
                    props.setQuestionsHandler();
                    let newAnswers = [...props.userAnswers];
                    newAnswers[e.target.id] = {
                      id: e.target.id,
                      user_answer: `${index}`,
                      correct_answer: props.data[e.target.id].answer,
                    };
                    props.setUserAnswers(newAnswers);
                  }}
                  id={props.questions.id}
                />
              </span>
            );
          })}
        {params.quizType === "plates" &&
          props.questions.data.map((plates, index) => {
            return (
              <span
                className={
                  classes["quiz-view-container__quiz-view-box__img-plates-box"]
                }
              >
                <img
                  src={require(`../../../assets/images/country/plates/${plates.plate}`)}
                  onClick={(e) => {
                    clearInterval(intervalID.current);
                    clearTimeout(timeout.current);
                    setTimeLeft(10);
                    props.setQuestionsHandler();
                    let newAnswers = [...props.userAnswers];
                    newAnswers[e.target.id] = {
                      id: e.target.id,
                      user_answer: `${index}`,
                      correct_answer: props.data[e.target.id].answer,
                    };
                    props.setUserAnswers(newAnswers);
                  }}
                  id={props.questions.id}
                />
              </span>
            );
          })}
      </div>
      <span
        className={classes["quiz-view-container__timer"]}
        onClick={() => console.log(props.questions)}
      >
        {timeLeft}
      </span>
      <span className={classes["quiz-view-container__timer-box"]} />
    </div>
  );
};
export default QuizView;
