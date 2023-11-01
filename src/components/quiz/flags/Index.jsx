import classes from "./flagsQuiz.module.scss";
import check from "../../../assets/images/ui/check.svg";
import cross from "../../../assets/images/ui/cross-mark.svg";
import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
const FlagsQuiz = () => {
  const loader = useLoaderData();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10);
  const [data, setData] = useState(loader.data);
  const [questions, setQuestions] = useState({
    id: 0,
    question: loader.data[0].question,
    data: loader.data[0].data,
    updated: false,
  });
  const [getAnswers, setGetAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [serverAnswers, setServerAnswers] = useState("");
  const [userScore, setUserScore] = useState(0);
  //questionsHandler in timer
  const setQuestionsHandler = () => {
    setQuestions((prevState) => {
      if (prevState.id < 4) {
        return {
          id: prevState.id + 1,
          question: data[prevState.id + 1].question,
          data: data[prevState.id + 1].data,
        };
      }
      if (prevState.id === 4) {
        setGetAnswers(true);
        return {
          id: 5,
          question: "",
          data: "",
        };
      }
    });
  };

  const getAnswersHTTP = async () => {
    const response = await fetch(
      "https://geo-meta-rest-api.vercel.app/api/quiz/postFlags",
      // "http://localhost:9001/api/quiz/postFlags",
      {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(userAnswers),
      }
    );
    const data = await response.json();
    if ((data.message = "ok")) {
      setServerAnswers(data.data.user_correct_answers);
      setUserScore(data.data.user_score);
    }
  };
  let intervalID = useRef(null);
  let timeout = useRef(null);

  //get anserwsEffect
  useEffect(() => {
    if (getAnswers === true) {
      getAnswersHTTP();
      console.log("getAnswers");
    }
  }, [getAnswers]);

  //timerEffect
  useEffect(() => {
    if (questions.id < 5) {
      intervalID.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1010);

      timeout.current = setTimeout(() => {
        setQuestionsHandler();
        setTimeLeft(10);

        return clearInterval(intervalID.current), clearTimeout(timeout.current);
      }, 10000);
      let newAnswers = [...userAnswers];
      newAnswers[questions.id] = {
        id: questions.id,
        user_answer: "",
        correct_answer: data[questions.id].answer,
      };
      setUserAnswers(newAnswers);
    }
  }, [questions]);

  return (
    <div className={classes["flags-layout"]}>
      {questions.id !== 5 && (
        <div className={classes["flags-layout__flags-container"]}>
          <h1>Wybierz flagę {questions.question}</h1>
          <div className={classes["flags-layout__flags-container__flags-box"]}>
            {questions.data.map((flag, index) => {
              return (
                <span
                  className={
                    classes["flags-layout__flags-container__flags-box__img-box"]
                  }
                >
                  <img
                    src={require(`../../../assets/images/country/flags/${flag.country_flag}`)}
                    onClick={(e) => {
                      clearInterval(intervalID.current);
                      clearTimeout(timeout.current);
                      setTimeLeft(10);
                      setQuestionsHandler();
                      let newAnswers = [...userAnswers];
                      newAnswers[e.target.id] = {
                        id: e.target.id,
                        user_answer: `${index}`,
                        correct_answer: data[e.target.id].answer,
                      };
                      setUserAnswers(newAnswers);
                    }}
                    id={questions.id}
                  />
                </span>
              );
            })}
          </div>
          <span
            className={classes["flags-layout__flags-container__timer"]}
            onClick={() => console.log(questions)}
          >
            {timeLeft}
          </span>
          <span
            className={classes["flags-layout__flags-container__timer-box"]}
          />
        </div>
      )}
      {serverAnswers !== "" && (
        <div className={classes["flags-layout__score-container"]}>
          <div
            className={
              classes["flags-layout__score-container__context-container"]
            }
          >
            <h1>Gratulacje!</h1>
            <div
              className={
                classes[
                  "flags-layout__score-container__context-container__answers-container"
                ]
              }
            >
              {serverAnswers.map((score) => (
                <span
                  className={
                    classes[
                      "flags-layout__score-container__context-container__answers-container__answer-box"
                    ]
                  }
                >
                  <span>Pytanie nr. {score.question_number + 1}</span>
                  {score.userAnswer === "correct" && (
                    <img src={check} alt="check" />
                  )}
                  {score.userAnswer === "wrong" && (
                    <img src={cross} alt="cross" />
                  )}
                </span>
              ))}
            </div>
            <h2>Twój wynik: {userScore} pnkt</h2>
          </div>
          <div
            className={
              classes["flags-layout__score-container__buttons-container"]
            }
          >
            <Button content="Zagraj jeszcze raz" onClick={() => navigate(0)} />
            <Button content="Inne Quizy" onClick={() => navigate("/quiz")} />
          </div>
        </div>
      )}
    </div>
  );
};
export default FlagsQuiz;
