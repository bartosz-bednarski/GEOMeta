import React from "react";
import classes from "./quiz.module.scss";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import QuizView from "./QuizView";
import QuizScore from "./QuizScore";
import { useAppDispatch } from "../../../redux/hooks";
import { updateAchievements } from "../../../redux/achievements-reducer";
import Loader from "../../ui/Loader";
import { postUserAnswers } from "../../../api/quiz";
import { questions, quizGameLoader, userAnswers } from "quiz";
const QuizGame: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const loader = useLoaderData() as quizGameLoader;
  const quizQuestions = loader.data;
  const [questions, setQuestions] = useState<questions>({
    id: 0,
    question: loader.data[0].question,
    data: loader.data[0].data,
    updated: false,
  });
  const [getAnswers, setGetAnswers] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<userAnswers>([
    { id: 0, user_answer: "", correct_answer: "" },
  ]);
  const [serverAnswers, setServerAnswers] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const setQuestionsHandler = () => {
    setQuestions((prevState) => {
      if (prevState.id < 4) {
        return {
          id: prevState.id + 1,
          question: quizQuestions[prevState.id + 1].question,
          data: quizQuestions[prevState.id + 1].data,
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

  const postUserAnswersHandler = async () => {
    setIsFetching(true);
    const data = await postUserAnswers(
      accessToken,
      params.quizType,
      userAnswers
    );
    setIsFetching(false);
    if ((data.message = "ok")) {
      dispatch(updateAchievements());
      setServerAnswers(data.data.user_correct_answers);
      setUserScore(data.data.user_score);
    }
  };

  useEffect(() => {
    if (getAnswers === true) {
      postUserAnswersHandler();
    }
  }, [getAnswers]);
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div className={classes["flags-layout"]}>
      {questions.id !== 5 && (
        <QuizView
          quizQuestions={quizQuestions}
          setQuestionsHandler={setQuestionsHandler}
          setUserAnswers={(answers: userAnswers) => setUserAnswers(answers)}
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
export default QuizGame;
