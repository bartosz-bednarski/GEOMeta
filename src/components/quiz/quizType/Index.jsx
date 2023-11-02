import classes from "./quiz.module.scss";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import QuizView from "./QuizView";
import QuizScore from "./QuizScore";
const QuizType = () => {
  const params = useParams();
  console.log(params.quizType);
  const accessToken = localStorage.getItem("accessToken");
  const loader = useLoaderData();
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

  const postAnswersHTTP = async () => {
    const param = params.quizType;
    console.log(param);
    const url = accessToken
      ? `https://geo-meta-rest-api.vercel.app/api/quiz/post${
          param[0].toUpperCase() + param.slice(1)
        }/auth`
      : `https://geo-meta-rest-api.vercel.app/api/quiz/post${
          param[0].toUpperCase() + param.slice(1)
        }`;
    // const url = accessToken
    //   ? `http://localhost:9001/api/quiz/post${
    //       param[0].toUpperCase() + param.slice(1)
    //     }/auth`
    //   : `http://localhost:9001/api/quiz/post${
    //       param[0].toUpperCase() + param.slice(1)
    //     }`;
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userAnswers),
    });
    const data = await response.json();
    if ((data.message = "ok")) {
      setServerAnswers(data.data.user_correct_answers);
      setUserScore(data.data.user_score);
    }
  };

  useEffect(() => {
    if (getAnswers === true) {
      postAnswersHTTP();
      console.log("getAnswers");
    }
  }, [getAnswers]);
  return (
    <div className={classes["flags-layout"]}>
      {questions.id !== 5 && (
        <QuizView
          data={data}
          setQuestionsHandler={setQuestionsHandler}
          setUserAnswers={(answers) => setUserAnswers(answers)}
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
      {serverAnswers !== "" && (
        <QuizScore serverAnswers={serverAnswers} userScore={userScore} />
      )}
    </div>
  );
};
export default QuizType;
