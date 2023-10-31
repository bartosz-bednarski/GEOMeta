import classes from "./flagsQuiz.module.scss";
import flag from "../../../assets/images/country/flags/chile.svg";
import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
const FlagsQuiz = () => {
  const loader = useLoaderData();
  const [timeLeft, setTimeLeft] = useState(3);
  const [data, setData] = useState(loader.data);
  const [questions, setQuestions] = useState({
    id: 0,
    question: loader.data[0].question,
    data: loader.data[0].data,
    updated: false,
  });
  const [getAnswers, setGetAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
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
      // "https://geo-meta-rest-api.vercel.app/api/forum/createTopic",
      "http://localhost:9001/api/quiz/postFlags",
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
    console.log(data);
  };
  console.log(data);
  console.log(userAnswers);
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
      }, 1000);

      timeout.current = setTimeout(() => {
        setQuestionsHandler();
        setTimeLeft(3);

        return clearInterval(intervalID.current), clearTimeout(timeout.current);
      }, 3000);
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
                <img
                  src={require(`../../../assets/images/country/flags/${flag.country_flag}`)}
                  onClick={(e) => {
                    clearInterval(intervalID.current);
                    clearTimeout(timeout.current);
                    setTimeLeft(3);
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
    </div>
  );
};
export default FlagsQuiz;
