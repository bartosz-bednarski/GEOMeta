import React from "react";
import { useParams } from "react-router-dom";
import classes from "./quizView.module.scss";
import { useEffect, useRef, useState } from "react";
import { quizViewProps, userAnswers } from "quiz";
const QuizView: React.FC<quizViewProps> = ({
  quizQuestions,
  setQuestionsHandler,
  setUserAnswers,
  questions,
  userAnswers,
}) => {
  const params = useParams();
  //timerEffect

  let intervalID = useRef<null | ReturnType<typeof setInterval> | number>(null);
  let timeout = useRef<null | ReturnType<typeof setTimeout> | number>(null);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  useEffect(() => {
    if (questions.id < 5) {
      intervalID.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1010);

      timeout.current = window.setTimeout(() => {
        setQuestionsHandler();
        setTimeLeft(10);

        return (
          clearInterval(intervalID.current) & clearTimeout(timeout.current)
        );
      }, 10000);
      let newAnswers: userAnswers = [...userAnswers];
      newAnswers[questions.id] = {
        id: questions.id,
        user_answer: "",
        correct_answer: quizQuestions[questions.id].answer,
      };
      console.log(newAnswers);
      setUserAnswers(newAnswers);
    }
  }, [questions]);
  return (
    <div className={classes["quiz-view-container"]}>
      <h1>
        Wybierz {params.quizType === "flags" && "flagę "}
        {params.quizType === "emblems" && "herb "}
        {params.quizType === "plates" && "rejestracje dla "}
        {questions.question}
      </h1>
      <div
        className={classes["quiz-view-container__quiz-view-box"]}
        style={params.quizType === "plates" ? { width: "80%" } : {}}
      >
        {params.quizType === "flags" &&
          questions.data.map((flag, index) => {
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
                    setQuestionsHandler();
                    let newAnswers: userAnswers = [...userAnswers];
                    newAnswers[e.target.id] = {
                      id: e.target.id,
                      user_answer: `${index}`,
                      correct_answer: quizQuestions[e.target.id].answer,
                    };
                    setUserAnswers(newAnswers);
                  }}
                  id={String(questions.id)}
                  alt="quiz-img"
                />
              </span>
            );
          })}
        {params.quizType === "emblems" &&
          questions.data.map((emblem, index) => {
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
                    setQuestionsHandler();
                    let newAnswers = [...userAnswers];
                    newAnswers[e.target.id] = {
                      id: e.target.id,
                      user_answer: `${index}`,
                      correct_answer: quizQuestions[e.target.id].answer,
                    };
                    setUserAnswers(newAnswers);
                  }}
                  id={questions.id}
                  alt="quiz-img"
                />
              </span>
            );
          })}
        {params.quizType === "plates" &&
          questions.data.map((plates, index) => {
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
                    setQuestionsHandler();
                    let newAnswers = [...userAnswers];
                    newAnswers[e.target.id] = {
                      id: e.target.id,
                      user_answer: `${index}`,
                      correct_answer: quizQuestions[e.target.id].answer,
                    };
                    setUserAnswers(newAnswers);
                  }}
                  id={questions.id}
                  alt="quiz-img"
                />
              </span>
            );
          })}
      </div>
      <span
        className={classes["quiz-view-container__timer"]}
        onClick={() => console.log(questions)}
      >
        {timeLeft}
      </span>
      <span className={classes["quiz-view-container__timer-box"]}>
        <span
          className={classes["quiz-view-container__timer-box__fill"]}
          style={{ width: `${timeLeft * 10}%` }}
        ></span>
      </span>
    </div>
  );
};
export default QuizView;
